<?php
/**
 * AgriyaBase - Lumen framework
 *
 * PHP version 5.5.9
 *
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Agriya <info@agriya.com>
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-03-28
 * @Paypal Ref Doc: https://developer.paypal.com/docs/classic/express-checkout/ht_ec-recurringPaymentProfile-curl-etc/
 */

namespace App\Http\Controllers;

use App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Faker\Provider\DateTime;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Setting;
use App\User;
use App\UserProfile;
use App\Http\Controllers\Controller;
use Plugins\Subscriptions\Model\Subscription;
use App\Subscribe;
use App\TransactionLog;
use App\PaypalLog;
use App\AppointmentSettings;
use App\Suspend;
use App\Services\SubscriptionService;
use Log;

class PaymentsController extends Controller
{
    private $_api_context;
    protected $SubscriptionService;
    public function __construct(SubscriptionService $subscription_service) {
        $this->_paypal_conf = config('paypal');
        $this->_paypal_mode =  $this->_paypal_conf['is_live_mode'] == 1?'live':'sandbox';
        $this->SubscriptionService = $subscription_service;
        /*$this->_api_context = new ApiContext(new OAuthTokenCredential($paypal_conf['api_id'], $paypal_conf['secret']));*/
    }

    public function subscribe(Request $request){
        $user = $this->auth->user();
        $userDetails = User::where('id','=',$user->id)->first();
        if($userDetails['is_trial'] != 1){
            $link = url('/');
             $linkParam = 'home';
             return response()->json(['status'=>'success', 'linkparam'=> $linkParam, 'urlgo'=>$link]);
        }
        $planDetails = $request->only(['id','name','period_days','price','paypal_plan_id']);
        $planDetails['description'] = 'Doctor Plan Subcription';
        $baseUrl = url('/');
        $paypalFields = [
            'METHOD' => 'SetExpressCheckout',
            'VERSION' => '86', /* Don't change this one */
            'LOCALECODE' => 'en',

            'PAYMENTREQUEST_0_AMT' => $planDetails['price'],
            'PAYMENTREQUEST_0_CURRENCYCODE' => /*'EUR'*/ config('site.currency.string') ,
            'PAYMENTREQUEST_0_PAYMENTACTION' => 'Sale',
            'PAYMENTREQUEST_0_ITEMAMT' => $planDetails['price'],

            'L_PAYMENTREQUEST_0_NAME0' => $planDetails['name'],
            'L_PAYMENTREQUEST_0_DESC0' => $planDetails['description'],
            'L_PAYMENTREQUEST_0_QTY0' => 1,
            'L_PAYMENTREQUEST_0_AMT0' => $planDetails['price'],
            'L_PAYMENTREQUEST_0_ITEMCATEGORY0' => 'Digital',

            'L_BILLINGTYPE0' => 'RecurringPayments',
            'L_BILLINGAGREEMENTDESCRIPTION0' => $planDetails['name'],

            'CANCELURL' => $baseUrl.'#/payment/cancel',
            'RETURNURL' => $baseUrl.'#/payment/success'
        ];            
        $link = $this->curlProcess($paypalFields, 1);
        $linkParam = 'payapl';
        return response()->json(['status'=>'success', 'linkparam'=> $linkParam, 'urlgo'=>$link]);
    }
    public function paysuccess($token, $payerId){
        $paypalFields = [
            'METHOD' => 'GetExpressCheckoutDetails',
            'VERSION' => '86',
            'TOKEN' => $token
        ];
        $paypalResponse = $this->curlProcess($paypalFields);
        if($paypalResponse != null){
            if($paypalResponse['ACK'] == 'Success') {
                $user = $this->auth->user();
                $planDetails = $this->plan_details_by_name($paypalResponse['L_NAME0']);
                $this->transaction_log($paypalResponse);
                $this->update_paypal_log_status($paypalResponse);
                $userProfile = UserProfile::where('user_id', '=', $user->id)->with(['country'])->first();
				
                $profileCreationFields = [
                    'METHOD' => 'CreateRecurringPaymentsProfile',
                    'VERSION' => '86',
                    'TOKEN' => $token,
                    'PayerID' => $payerId,
                    'PROFILESTARTDATE' => date('Y-m-d') . 'T' . date('H:i:s', strtotime('+15 minutes', time())) . "Z",
                    'DESC' => $planDetails['name'],
                    'BILLINGPERIOD' => 'Day',
                    'BILLINGFREQUENCY' => $planDetails['period_days'],
                    'AMT' => $planDetails['price'],
                    'CURRENCYCODE' => /*'EUR'*/ config('site.currency.string') ,
                    'COUNTRYCODE' => $userProfile['country']['iso2'],
                    'MAXFAILEDPAYMENTS' => 3
                ];
                $profileCreationRespoonse = $this->curlProcess($profileCreationFields);
                if ($profileCreationRespoonse != null) {
                    $subscribeEnd = date('Y-m-d H:i:s', strtotime("+ ". $planDetails['period_days']. " days", strtotime($profileCreationRespoonse['TIMESTAMP'])));
                    /* For update the Paypal Profile Id for User */
                    $updateValue = [
                        'subscription_id' =>$planDetails->id,
                        'subscription_end'=>$subscribeEnd,
                        'is_trial'=> 0,
                    ];
                    User::where('id','=',$user->id)->update($updateValue);
                    /* Here for update the status to activate the profile */
                    AppointmentSettings::where('user_id', '=', $user->id)->update(['is_active'=>true]);
                    $this->subscribeLog(array_merge($profileCreationRespoonse, $updateValue));
                }
            }
        }
    }
    public function curlProcess($paypalParams = array(), $step = null){
        $credientials = [
            'USER' => $this->_paypal_conf['api_username'],
            'PWD' => $this->_paypal_conf['api_password'],
            'SIGNATURE' => $this->_paypal_conf['api_signature']
        ];
        $paymentUrl = $this->_paypal_mode == 'live'?'https://api-3t.paypal.com/nvp':'https://api-3t.sandbox.paypal.com/nvp';
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_URL, $paymentUrl);
        curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query(array_merge($credientials, $paypalParams)));
        $response =    curl_exec($curl);
        curl_close($curl);
        $nvp = array();
        if (preg_match_all('/(?<name>[^\=]+)\=(?<value>[^&]+)&?/', $response, $matches)) {
            foreach ($matches['name'] as $offset => $name) {
                $nvp[$name] = urldecode($matches['value'][$offset]);
            }
            if($step != null){
                if (isset($nvp['ACK']) && $nvp['ACK'] == 'Success') {
                    $query = array(
                        'cmd'    => '_express-checkout',
                        'token'  => $nvp['TOKEN']
                    );
                    /* Here for Paypal Log Table Entry */
                    $this->store_paypal_log($paypalParams, $nvp['TOKEN']);
                    $redirLink = $this->_paypal_mode == 'live'?'https://www.paypal.com/cgi-bin/webscr?%s':'https://www.sandbox.paypal.com/cgi-bin/webscr?%s';
                    return sprintf($redirLink, http_build_query($query));
                }
            }else{
                return $nvp;
            }
        }else{
            return null;
        }
    }

    public function store_paypal_log($planDetails, $token){
        $user = $this->auth->user();
        $storedValue = [
            'amount' => $planDetails['PAYMENTREQUEST_0_AMT'],
            'user_id' => $user->id,
            'token' => $token,
            'transaction_type' => 1,
            'status' => 0
        ];
        $created = PaypalLog::create($storedValue);
        if($created){
            return 'success';
        }else{
            return null;
        }
    }
    public function update_paypal_log_status($paypalProfileResponse){
        $updatedFields = [
            'payer_id' => $paypalProfileResponse['PAYERID'],
            'paypal_response' => json_encode($paypalProfileResponse),
            'status' => 1
        ];
        $update = PaypalLog::where('token','=',$paypalProfileResponse['TOKEN'])->update($updatedFields);
        if($update){
            return 'success';
        }else{
            return null;
        }
    }
    public function transaction_log($paypalResponse){
        $user = Auth::user();
        $storedValue = [
            'user_id' => $user->id,
            'receiver_user_id' => 1,
            'transactionable_type' => 1,
            'transaction_type_id' => 1,
            'amount' => $paypalResponse['AMT'],
            'description' => json_encode($paypalResponse),
            'payment_gateway_id' => 13,
            'mode' => $this->_paypal_conf['is_live_mode']
        ];
        $created = TransactionLog::create($storedValue);
        if($created){
            return 'success';
        }else{
            return null;
        }
    }
    public function plan_details_by_name($planName = null){
        if($planName != null){
            $scubscription = Subscription::where('name','=',$planName)->first();
            return $scubscription;
        }
    }
    public function subscribeLog($Log){
        $user = $this->auth->user();
        $storedValues = [
            'user_id' => $user->id,
            'subscription_id'=> $Log['subscription_id'],
            'profile_id'=> $Log['PROFILEID'],
            'subscription_start'=> date('Y-m-d H:i:s', strtotime($Log['TIMESTAMP'])),
            'subscription_end'=> $Log['subscription_end'],
            'mode' => $this->_paypal_conf['is_live_mode'],
            'status' => 1
        ];
        Subscribe::create($storedValues);
    }
    public function getprofiledetails(){
        $paypalFields = [
            'METHOD' => 'GetRecurringPaymentsProfileDetails',
            //'METHOD' => 'ManageRecurringPaymentsProfileStatus',
            'VERSION' => '86', /* Don't change this one */
            'LOCALECODE' => 'en',
            'PROFILEID' => 'I-LGRFFLGC9ADK'
        ];
        $paypalResponse = $this->curlProcess($paypalFields);
        echo '<pre>'; print_r($paypalResponse); die;
    }
    public function paypalsuspend(){
        $profileDetails = $this->get_paypal_profile_id();
        if($profileDetails != null){
            $paypalFields = [
                'METHOD' => 'ManageRecurringPaymentsProfileStatus',
                'VERSION' => '86', /* Don't change this one */
                'LOCALECODE' => 'en',
                'PROFILEID' => $profileDetails['profile_id'],
                'ACTION' => 'Suspend'
            ];
            $paypalResponse = $this->curlProcess($paypalFields);
            if($paypalResponse['ACK'] == 'Success'){
                $this->statusLog($paypalResponse,$profileDetails, 'suspend');
            }else{
                return response()->json(['Failed' => 'Suspend failed try again later']);
            }
        }
    }
    public function paypalactive(){
        $profileDetails = $this->get_paypal_profile_id();
        if($profileDetails != null){
            $paypalFields = [
                'METHOD' => 'ManageRecurringPaymentsProfileStatus',
                'VERSION' => '86', /* Don't change this one */
                'LOCALECODE' => 'en',
                'PROFILEID' => $profileDetails['profile_id'],
                'ACTION' => 'Reactivate'
            ];
            $paypalResponse = $this->curlProcess($paypalFields);
            if($paypalResponse['ACK'] == 'Success'){
                $this->statusLog($paypalResponse,$profileDetails, 'active');
            }else{
                return response()->json(['Failed' => 'Activation failed try again later']);
            }
        }
    }
    public function paypalcancel(){
        $profileDetails = $this->get_paypal_profile_id();
        if($profileDetails != null){
            $paypalFields = [
                'METHOD' => 'ManageRecurringPaymentsProfileStatus',
                'VERSION' => '86', /* Don't change this one */
                'LOCALECODE' => 'en',
                'PROFILEID' => $profileDetails['profile_id'],
                'ACTION' => 'Cancel'
            ];
            $paypalResponse = $this->curlProcess($paypalFields);
            if($paypalResponse['ACK'] == 'Success'){
                $this->statusLog($paypalResponse,$profileDetails, 'cancel');
            }else{
                return response()->json(['Failed' => 'Activation failed try again later']);
            }
        }
    }
    public function get_paypal_profile_id(){
        $user = $this->auth->user();
        $subscription = Subscribe::where(['user_id'=>$user->id, 'subscription_id'=> $user->subscription_id])->where('is_cancel','!=',true)->orderBy('created_at', 'desc')->first();
        if($subscription){
            return  $subscription;
        }else{
            return null;
        }
    }
    public function statusLog($responseLog, $subscribeDetails, $status){
        $user = $this->auth->user();
        $storedValues = [
            'user_id' => $user->id, 
            'profile_id'=> $responseLog['PROFILEID'], 
            'subscription_id' => $subscribeDetails['subscription_id'], 
            'status' => $status, 
            'description' =>json_encode($responseLog), 
            'subscribe_id' => $subscribeDetails['id']
        ];
        Suspend::create($storedValues);
        if($status == 'cancel'){
            $updateValue = [
                'is_cancel' => 1,
                'is_suspend' => 0
            ];
            $userUpdateValue = [
                'is_paypal_suspend' => 0,
                'is_paypal_cancel' => 1
            ];
            $message = "Paypal Subscription Canceled Successfully";
        }else if($status == 'active'){
            $updateValue['is_suspend'] = 0;
            $userUpdateValue['is_paypal_suspend'] = 0;
            $message = "Paypal Subscription Activated Successfully";
        }else if($status == 'suspend'){
            $updateValue['is_suspend'] = 1;
            $userUpdateValue['is_paypal_suspend'] = 1;
            $message = "Paypal Subscription Suspend Successfully";
        }
        /* for update the subscribe table */
        Subscribe::where('id','=',$subscribeDetails->id)->update($updateValue);
        User::where('id','=',$user->id)->update($userUpdateValue);
        return response()->json(['Success' => $message]);
    }
    public function testSub($value='')
    {
        $this->SubscriptionService->check_is_expiry();
    }
}
<?php
namespace App\Services;

use App\User;
use App\AppointmentSettings;
use App\Services\MailService;
use Plugins\Subscriptions\Model\Subscription;
use Validator;
use Carbon;

class SubscriptionService
{
    /**
     * updates daily currency rates in currency_conversion & currency_conversion_history table through cron
     */
    public function check_is_expiry(){
        /* For get the all doctor's if the expiry date is completed without expiry */
        $date = Carbon::parse(Carbon::now()->subDays(1))->format('Y-m-d');
        $conditions = [
            'role_id' => config('constants.ConstUserTypes.Doctor'),
            'subscription_end' => $date,
            'is_expiry' => 0
        ];
        $users = User::select(['id','email','role_id','subscription_end','is_expiry','subscription_id'])->with('user_profile')->where($conditions)->get()->toArray();
        /* For update the is_expiry = 1 and deactivate the Profile view in appointment_setting */
        foreach($users as $user){
            /* Update the user table here */
            User::where('id', '=', $user->id)->update(['is_expiry'=>true]);
            /* Update appointment_setting table here */
            AppointmentSettings::where('user_id', '=', $user->id)->update(['is_active'=>false, 'is_suspend'=>true]);
            /* Send a mail for account is expiry */
            $subscription = Subscription::where('id','=',$user['subscription_id'])->first();
            if($subscription){
                $subscriptionName = $subscription['name']. ' Plan';
            }else{
                $subscriptionName = 'Free Plan';
            }
            $userName = $user['user_profile']['first_name'].' '.$user['user_profile']['last_name'];
            $template = $this->getTemplate('Membership Plan Expiried alert mail');
            $emailFindReplace = array(
                '##USERNAME##' => $userName,
                '##SUBSCRIPTION##' => $subscriptionName,
                '##EXPIRY_DATE##' => $user['subscription_end'],
                '##PLAN_URL##' => "#/subscribe/plans"
            );
            $this->sendMail($template, $emailFindReplace, $user['email'],$userName);
        }
        echo 'done'; exit;
    }
}
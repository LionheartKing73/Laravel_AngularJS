<?php
/**
 * AgriyaBase - Lumen framework
 * PHP version 5.5.9
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Agriya <info@agriya.com>
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-03-28
 */

namespace App\Http\Controllers;

use App\UserRoles;
//use Dingo\Api\Auth\Provider\JWT;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Requests\CreateUserRequest;

use App\Http\Controllers\Controller;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redis;

use App\Transformers\UserTransformer;
use App\Transformers\UserAuthTransformer;
use App\Transformers\UploadAttachmentTransformer;

use App\Services\UserService;
use App\Services\IpService;
use App\Services\UserLoginService;
use App\Attachment;
use App\Services\UserProfileService;
use App\Services\AppointmentSettingsService;
use App\Ip;
use App\UserLogin;
use App\AppointmentSettings;
use Carbon;
use \Firebase\JWT\JWT;

/**
 * Users resource representation.
 * @Resource("Users")
 */
class UsersController extends Controller
{
    /**
     * @var UserService
     */
    protected $UserService;
    /**
     * @var IpService
     */
    protected $IpService;
    /**
     * @var UserLoginService
     */
    protected $UserLoginService;

    /**
     * @var UserProfileService
     */
    protected $UserProfileService;
    
    /**
     * @var AppointmentSettings
     */
    protected $AppointmentSettingsService;
    
    /**
     * UsersController constructor.
     */
    public function __construct(UserService $user_service, IpService $ip_service, UserLoginService $user_login_service, UserProfileService $user_profile_service, AppointmentSettingsService $appointment_settings_service)
    {
        // Apply the jwt.auth middleware to all methods in this controller
        // except for the authenticate method. We don't want to prevent
        // the user from retrieving their token if they don't already have it
        $this->middleware('jwt.auth', ['only' => ['change_password', 'getAuth','updatedevice']]);
        $this->UserService = $user_service;
        $this->IpService = $ip_service;
        $this->UserLoginService = $user_login_service;
        $this->UserProfileService = $user_profile_service;
        $this->AppointmentSettingsService = $appointment_settings_service;
    }
    
    /**
     * Show the best rated doctors.
     * @Get("/users")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "role_id": 1, "username": "admin", "email": "guest@gmail.com", "available_wallet_amount": 0, "is_active": 1, "is_email_confirmed": 1, "register_ip_id": 1, "last_login_ip_id": 3}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    
    public function index() 
    {
        $users = User::where('is_active', 1)->orderBy('overall_avg_rating','desc')->take(4)->get();
        return $this->response->collection($users, (new UserTransformer)->setDefaultIncludes(['user_profile','attachments']));
    }
    
    /**
     * Show the specified user.
     * Show the user with a `id`.
     * @Get("/users/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "role_id": 1, "username": "admin", "email": "guest@gmail.com", "available_wallet_amount": 0, "is_active": 1, "is_email_confirmed": 1, "register_ip_id": 1, "last_login_ip_id": 3}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function show(Request $request, $username = null)
    {
        if($username){
            $user = User::with('user_profile', 'attachments','UserEducations')->where("username", $username)->first();
        }else{
            $auth_user = $this->auth->user();
            $user = User::with('user_profile', 'attachments','UserEducations')->find($auth_user->id);
        }
        if (!$user) {
            return $this->response->errorNotFound("Invalid Request");
        }
        if($username){
            if($this->auth->user() && $this->auth->user('role_id')){
                return $this->response->item($user, (new UserTransformer)->setDefaultIncludes(['user_profile', 'attachmentable','UserFavorite']));
            }else{
                return $this->response->item($user, (new UserTransformer)->setDefaultIncludes(['user_profile', 'attachmentable']));
            }
            
        }else{
            return $this->response->item($user, (new UserAuthTransformer)->setDefaultIncludes(['user_profile', 'attachmentable']));
        }
    }

    /**
     * Store a new user.
     * Store a new user with a `username`, `email`, `password`, `confirm_password` and `is_agree_terms_conditions`.
     * @Post("/users/register")
     * @Transaction({
     *      @Request({"name": "XXXXXX", "email": "XXXXX@gmail.com", "password": "XXXXXX", "confirm_password": "XXXXXX", "is_agree_terms_conditions": 1}),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
     * })
     */
    public function register(Request $request)
    {
        $user_data = $request->only('first_name','last_name','username', 'email', 'password', 'confirm_password','phone','postal_code','specialty_id','language_id','gender_id','is_agree_terms_conditions','user_type', 'country_id','is_phone_register');
        //echo '<pre>'; print_r($user_data); die;
        $validator = Validator::make($user_data, User::GetValidationRule(), User::GetValidationMessage());
        if ($validator->passes()) {
            if ($request->has('password')) {
                $user_data['password'] = Hash::make($request->password);
            }
            $user_data['is_active'] = 1;
            $user_data['mobile'] = $user_data['phone'];
            if(!empty($user_data['specialty_id'])){
                $user_data['role_id'] = config('constants.ConstUserTypes.Doctor');
                $user_data['is_trial'] = true;
                $user_data['subscription_id'] = false;
                /*Carbon::parse(Carbon::now()->addDays(config('site.free.subscription_days')))->format('Y-m-d')*/
                $user_data['subscription_end'] = Carbon::parse(Carbon::now()->addDays(config('site.free.subscription_days')))->format('Y-m-d');
            }else{
                $user_data['role_id'] = config('constants.ConstUserTypes.User');
            }
            $user_data['register_ip_id'] = $this->IpService->getIpId($request->ip());
            $user_data['is_email_confirmed'] = 1;
            $user_data['user_avatar_source_id'] = config('constants.ConstSocialLogin.User');
            $user_data['otp'] = $this->UserService->generateOTP();
            if (config('user.is_email_verification_for_register')) {
                $user_data['is_email_confirmed'] = 0;
				$user_data['activate_hash'] = rand(1,100);
            }
            if (config('user.is_admin_activate_after_register')) {
                $user_data['is_active'] = 0;
            }
            //Captcha verification
            if($user_data['is_phone_register'] == 1){
                unset($user_data['is_phone_register']);
            }else{
                $captcha = $request['g-recaptcha-response'];
                if ($this->UserService->captchaCheck($captcha) == false) {
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('Captcha Verification failed.');
                }
                unset($user_data['is_phone_register']);
            }

            $user = User::create($user_data);
            if ($user) {
                /* For Appintment Settings Table */
                if($user_data['role_id'] == config('constants.ConstUserTypes.Doctor')){
                    $appointment_settings_data['user_id'] = $user->id;
                    $appointment_settings_data['is_active'] = 0;
                    $appointment_settings = $this->AppointmentSettingsService->save_appointment_settings($appointment_settings_data);
                    $appointment_settings->save();
                    $user_profile_data['specialty_id'] = $user_data['specialty_id'];
                    $user_profile_data['language_id'] = $user_data['language_id'];
                    $user_profile_data['is_doctor'] = 1;
                    $user_profile_data['is_newpatient_accepted'] = 1;
                    $user_profile_data['display_name'] = $user_data['first_name'].' '.$user_data['last_name'];
                }
                /* For User Profile Table */
                $user_profile_data['user_id'] = $user->id;
                $user_profile_data['first_name'] = $user_data['first_name'];
                $user_profile_data['last_name'] = $user_data['last_name'];
                $user_profile_data['gender_id'] = $user_data['gender_id'];
                $user_profile_data['postal_code'] = $user_data['postal_code'];
                $user_profile_data['phone'] = $user_data['phone'];
                $user_profile_data['country_id'] = $user_data['country_id'];

                $user_profile = $this->UserProfileService->save_user_profile_details($user_profile_data);
                $user_profile->save();
                //return response()->json(['Success' => 'Register Successfull.'], 200);
				return $this->UserService->emailConditions($user, 'register');
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Could not create new user.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Could not create new user.', $validator->errors());
        }
    }

    /**
     * User Authentication.
     * @Post("/users/login")
     * @Transaction({
     *      @Request({"email": "guest@gmail.com", "password": "XXXXXX"}),
     *      @Response(200, body={"success": "Login successfully", "Token": "XXXXXX"}),
     *      @Response(401, body={"message": "Email or Password Invalid", "status_code": 401})
     * })
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if(config('user.is_otp_verify') == 1){
            $user = User::where('email','=',$credentials['email'])->first();
            if($user){
                if($user->is_otp_verify == 0){
                    return response()->json(['Failed' => 'OTP Verification Failed.','id'=>$user->id, 'otp_screen'=>true]);
                }
            }
        }
        $credentials['is_active'] = true;
        $credentials['is_email_confirmed'] = true;
        try {
            if (!$userToken = JWTAuth::attempt($credentials)) {
                return $this->response->errorUnauthorized();
            }
        } catch (JWTException $e) {
            // something went wrong
            throw new \Symfony\Component\HttpKernel\Exception\HttpException('Could not create token');
        }
        // insert record in user logins after successful login
        $ip_id = $this->IpService->getIpId($request->ip());
        //$role = $this->UserLoginService->saveUserLogin($request, $ip_id);
        // Admin End Token varaiable should be need. so we assign two variable
        $token = $userToken;
        $message = "User login successfully";
        $timezone = config('site.timezone');
        // if no errors are encountered we can return a JWT
        return response()->json(compact('userToken', 'token', 'message', 'timezone'));
    }

    /**
     * Activate user.
     * @Put("/users/{id}/activate/{hash}")
     * @Transaction({
     *      @Request({"id": 1, "hash": "XXXXXXXXXXX"}),
     *      @Response(200, body={"success": "User Activated."}),
     *      @Response(404, body={"message": "Invalid Activation Request", "status_code": 404})
     * })
     */
    public function activate($hash, $id){
        $user = User::find($id);
        if (!$user) {
            return $this->response->errorNotFound("Invalid Request");
        }
        if ($user) {
            $user_valid = $this->UserService->validateHash($user->id, $hash, $user->activate_hash);
            if ($user_valid === false) {
                return $this->response->errorNotFound("Invalid Activation Request");
            }
            $user->is_email_confirmed = 1;
            $user->activate_hash = rand(1,100);
            if (!config('user.is_admin_activate_after_register')) {
                $user->is_active = 1;
            }
            if ($user->save()) {
                return $this->UserService->emailConditions($user, 'activate');
            }
        }
    }

    /**
     * Change Password.
     * @Put("/users/{id}/change_password")
     * @Transaction({
     *      @Request({"id": 1, "old_password": "XXXXXX", "password": "XXXXXX", "confirm_password": "XXXXXX"}),
     *      @Response(200, body={"success": "Password changed."}),
     *      @Response(422, body={"message": "Could not change password.","errors": {},"status_code": 422}),
     *      @Response(400, body={"error": "token_not_provided"}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404}),
     * })
     */
    public function changePassword(Request $request, $id)
    {
        $user = User::find($id);
        if (!$user) {
            return $this->response->errorNotFound("Invalid Request");
        }
        if (!$password = Hash::check($request->old_password, $user->password)) {
            $this->response->errorNotFound("Your old password is incorrect, please try again");
        }
        $user_data = $request->only('password', 'confirm_password');
        $validator = Validator::make($user_data, User::GetValidationRule());
        if ($validator->passes()) {
            $user->password = Hash::make($request->password);
            if ($user->save()) {
                return response()->json(['Success' => 'Password Changed Successfully.'], 200);
            }
        } else {
            throw new \Dingo\Api\Exception\UpdateResourceFailedException('Could not change password.', $validator->errors());
        }
    }

    /**
     * Forget Password.
     * @Put("/users/forgot_password")
     * @Transaction({
     *      @Request({"email": "guest@gmail.com"}),
     *      @Response(200, body={"success": "We have sent an email."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404}),
     *      @Response(422, body={"message": "Could not change password.","errors": {},"status_code": 422})
     * })
     */
    public function forgetPassword(Request $request)
    {
        $user_data = $request->only('email');
        $validator = Validator::make($user_data, User::GetForgetPasswordValidationRule());
        if ($validator->passes()) {
            $user = User::where('email', $request->email)->first();
            if (!$user) {
                return $this->response->errorNotFound("Invalid Email");
            }
            $user_data['id'] = $user->id;
            $new_password = uniqid();
            $user_data['password'] = Hash::make($new_password);

            if ($user->update($user_data)) {
                try {
                    $this->UserService->sendForgotPasswordMail($new_password, $user->email, $user->username);
                    return response()->json(['Success' => 'We have sent an email to ' . $user->email . ' with further instructions'], 200);
                } catch (\Exception $e) {
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('Password could not be updated. Please, try again.');
                }
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Password could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\UpdateResourceFailedException('Password could not be updated.', $validator->errors());
        }

    }

    /*
     * Get Authenticated user
     * @Get("/users/auth")
     * @Transaction({
     *      @Response(200, body={"id": 1, "role_id": 1, "username": "test", "email": "guest@gmail.com", "available_wallet_amount": 10, "is_active": 1, "is_email_confirmed": 1, "register_ip_id": 192.168.1.22, "last_login_ip_id": 192.168.1.22,"user_profile :{}}),
     *      @Response(400, body={"message": "Token not provided", "status_code": 400}),
     * })
     */
    public function getAuth()
    {
        $user = $this->auth->user();
        if ($user) {
            return $this->response->item($user, (new UserAuthTransformer)->setDefaultIncludes(['user_profile', 'attachmentable']));
        }
    }

    /*
     * Get Authenticated user Upload OR default avatar thumb url
     * @Get("/users/{id}/attachment")
     * @Transaction({
     *      @Response(200, body={"thumb": {}}),
     *      @Response(400, body={"message": "Token not provided", "status_code": 400}),
     * })
     */
    public function getUserUploadAttachment()
    {
        $user = $this->auth->user();
        if ($user) {
            if ($user->attachments) {
                return $this->item($user->attachments, new UploadAttachmentTransformer());
            } else {
                $user->attachments = Attachment::where('id', '=', config('constants.ConstAttachment.UserAvatar'))->first();
                $user->attachments->attachmentable_id = $user->id;
                return $this->item($user->attachments, new UploadAttachmentTransformer());
            }
        }
    }

    public function updatedevice(Request $request){
        $user = $this->auth->user();
        $acceptFields = $request->only('device_type','device_token');
        $update = User::where('id', '=', $user->id)->update($acceptFields);
        if ($update) {
            return response()->json(['Success' => 'Device Token has been updated'], 200);
        }else{
            return response()->json(['Failed' => 'Device Token not been updated']);
        }
    }

    public function authterminate(){
        $user = $this->auth->user();
        $token = $this->UserService->expiryToken($user);
        return response()->json(['Success' => 'Logout Succssfull'], 200);
    }

    public function otpresend($id){
        $user = User::find($id);
        if($user){
            if($user->is_otp_verify != 1){
                $this->UserService->sendOTP($id, $user->mobile, $user->otp);
                return response()->json(['Success' => 'OTP Sent Successfully'], 200);
            }else{
                return response()->json(['Failed' => 'OTP is already verified', 'urlgo'=>'login']);
            }
        }
        throw new \Dingo\Api\Exception\StoreResourceFailedException('Invalid Request Send');
    }
    public function otpverify($id, $otp){        
        $user = User::find($id);
        if($user){
            if($user->is_otp_verify == false){
                if($user->otp == $otp){
                /* Update OTP is verified */
                    User::where('id', '=', $user->id)->update(['is_otp_verify'=>true]);
                    return response()->json(['Success' => 'OTP verified successfully','urlgo'=>'login'], 200);
                }else{
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('Invalid OTP');
                }
            }else{
                return response()->json(['Failed' => 'OTP already verified','urlgo'=>'login']);
            }
        }else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Invalid Request Send');
        }
    }

    public function inviteUser(Request $request){

        try {
            $encryptedPassword = Hash::make("123456");
            return response()->json(['Success' => 'We have sent an email to ' . $request->email . ' with further instructions'], 200);
        } catch (\Exception $e) {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Password could not be updated. Please, try again.');
        }
        Hash::make("123456");

    }


    public function authenticateUser(Request $request)
    {
        $user = null;
        $credentials = $request->only('email', 'password');

        $credentials['is_active'] = true;
        $credentials['is_email_confirmed'] = true;
        try {
            if (!$userToken = JWTAuth::attempt($credentials)) {
                return $this->response->errorUnauthorized();
            }
        } catch (JWTException $e) {
            // something went wrong
            throw new \Symfony\Component\HttpKernel\Exception\HttpException('Could not create token');
        }

        $user = User::where('email','=',$credentials['email'])->first();

        // insert record in user logins after successful login
        /*$ip_id = $this->IpService->getIpId($request->ip());
        $role = $this->UserLoginService->saveUserLogin($request, $ip_id);*/
        // Admin End Token varaiable should be need. so we assign two variable
        $token = $userToken;
        $message = "User login successfully";
        $timezone = config('site.timezone');


        //Generate JWT.
        $issuedAt   = time();
        $expire  = $issuedAt + 36000; //Adding One hour.
        $data = [
            'iat' => $issuedAt,
            'uid' => $user->id,
            'exp' => $expire
        ];

        $jwtSecret = env('JWT_SECRET');

        $jwt = JWT::encode($data, $jwtSecret);

        $decodedData = JWT::decode($jwt, $jwtSecret, array('HS256'));
        $uid = $decodedData->uid;

        $basePath = config('app.basepath');
        //Call UserInfo.
        $response = false;
        try{
            $data = array("id" => $user->id);
            $data_string = json_encode($data);
            $ch = curl_init($basePath.'/user/saveUserInfo');
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                    'Content-Length: ' . strlen($data_string),
                    'userId:'.$user->id,)
            );
            $response = curl_exec($ch);

            if($response == false){
                throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to login');
            }else{
                $oResponse = json_decode($response);
                if($oResponse->status == 200){
                    $result = $oResponse->result;
                    $rights = $result->permissionMap;
                    $clinicId = $result->clinicId;
                    return response()->json(compact('userToken', 'token', 'message', 'rights', 'timezone', 'clinicId','jwt'));
                }else {
                    throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to login');
                }
            }
        }
        catch(\Exception $e){
            throw new \Dingo\Api\Exception\StoreResourceFailedException($e->getMessage());
        }
    }
}
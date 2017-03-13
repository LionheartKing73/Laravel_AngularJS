<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Appointment;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\AppointmentTransformer;
use App\Transformers\UserProfileTransformer;
use App\User;
use App\AppointmentSettings;
use App\UserProfile;
use App\Specialty;
use App\SpecialtyDiseas;
use App\AppointmentModifications;
use App\Services\AppointmentService;
use GuzzleHttp\json_decode;
use League\Fractal\Manager;
use Carbon;
/**
 * Appointments resource representation.
 *
 * @Resource("Appointments")
 */
class AppointmentsController extends Controller {

    
    /**
     * @var AppointmentSettings
     */
    protected $AppointmentService;    
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(AppointmentService $appointment_service) {
        /* $this->middleware('jwt.auth'); */
        $this->middleware('jwt.auth', ['only' => ['index', 'show', 'booking','booked','userisbook','changeStatus','calenderview']]);
        $this->AppointmentService = $appointment_service;
    }

    /**
     * Show all appointments
     *
     * Get a JSON representation of all the user views.
     *
     * @Get("/appointments?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the user views list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the user views list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort user views by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display user views By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search user views.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request, $type = null) {
        $user = $this->auth->user();
        if($user->role_id == config('constants.ConstUserTypes.User')) {
            $condition = ['user_id' => $user->id];
        } else if($user->role_id == config('constants.ConstUserTypes.Doctor')) {
            $condition = ['doctor_user_id' => $user->id];
        }
        if ($type == 'all' || $type == null) {
            $appointments = Appointment::where($condition)->orderBy('created_at', 'desc')->paginate(20);
        } else if ($type == 'today') {
            $date_condition = ['appointment_date' => date('Y-m-d')];
            $condition = array_merge($condition, $date_condition);
            $appointments = Appointment::where($condition)->orderBy('created_at', 'desc')->paginate(20);
        } else if ($type == 'week') {
            $today = Carbon::now();
            $startDate = Carbon::parse(Carbon::parse($today)->subDays($today->dayOfWeek))->format('Y-m-d');            
            $endDate = Carbon::parse(Carbon::parse($startDate)->addDays(7))->format('Y-m-d');    
            $appointments = Appointment::whereBetween('appointment_date', [
                       $startDate,
                        $endDate 
                    ])
                    ->where('doctor_user_id', $user->id)
                    ->orderBy('created_at', 'desc')
                    ->paginate(20);
        } else if ($type == 'month') {
            $startDate = date('Y-m-01');
            $endDate = Carbon::parse(Carbon::parse($startDate)->addMonth(1))->format('Y-m-d');
            $appointments = Appointment::whereBetween('appointment_date', [
                        $startDate,
                        $endDate
                    ])
                    ->where($condition)
                    ->orderBy('created_at', 'desc')
                    ->paginate(20);
        } else if ($type == 'pending-approval') {
            $appointments = Appointment::where(['appointment_status_id' => config('constants.ConstAppointmentStatus.PendingApproval'),'user_id'=>$user->id])->orderBy('created_at', 'desc')->paginate(20);
        } else if ($type == 'approved') {
            $appointments = Appointment::where(['appointment_status_id' => config('constants.ConstAppointmentStatus.Approved'),'user_id'=>$user->id])->orderBy('created_at', 'desc')->paginate(20);
        } else if ($type == 'cancelled') {
            $appointments = Appointment::where(['appointment_status_id' => config('constants.ConstAppointmentStatus.Cancelled'),'user_id'=>$user->id])->orderBy('created_at', 'desc')->paginate(20);
        } else if ($type == 'rejected') {
            $appointments = Appointment::where(['appointment_status_id' => config('constants.ConstAppointmentStatus.Rejected'),'user_id'=>$user->id])->orderBy('created_at', 'desc')->paginate(20);
        }
        return $this->response->paginator($appointments, (new AppointmentTransformer)->setDefaultIncludes(['User', 'doctor_user','appointment_status']));
    }

    /**
     * Show the specified appointment details.
     * Show the page with a `id`.     *
     * @Get("/appointments/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "language_id": 42, "title": "Term and conditions", "slug": "term-and-conditions", "page_content": "XXX", "is_active": 0, "Language": {"id": 42, "name": "English", "iso2": "en", "iso3": "eng", "is_active": 1}}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function show($id) {
        $user = $this->auth->user();
        $appointmnet = Appointment::find($id);
        if (!$appointmnet) {
            return $this->response->errorNotFound("Invalid Request");
        }
        if($user->role_id == config('constants.ConstUserTypes.Doctor')){
            return $this->response->item($appointmnet, (new AppointmentTransformer)->setDefaultIncludes(['appointment_status','user', 'specialty_diseas']));
        }else{
            return $this->response->item($appointmnet, (new AppointmentTransformer)->setDefaultIncludes(['doctor_user', 'appointment_status','specialty_diseas']));
        }

    }

    /**
     * Show the specified appointment details.
     * Show the page with a `id`.     *
     * @Get("/appointments/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "language_id": 42, "title": "Term and conditions", "slug": "term-and-conditions", "page_content": "XXX", "is_active": 0, "Language": {"id": 42, "name": "English", "iso2": "en", "iso3": "eng", "is_active": 1}}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function booking($doctorId, $aptDate, $aptTime) {
        $fractal = new Manager();
        /* For get the Doctor Profile Details Here */
        $doctorProfile = UserProfile::where('user_id', '=', $doctorId)->first();
        $doctorProfileWithIncludes = new \League\Fractal\Resource\Item($doctorProfile, (new UserProfileTransformer)->setDefaultIncludes(['User','city', 'country', 'gender']));
        $doctorDetailValue = $fractal->createData($doctorProfileWithIncludes)->toArray();
        /* For get the Doctor Specialty Diseas */
        $doctorSpecialtieDiseas = SpecialtyDiseas::select(['id', 'name', 'slug'])->whereIn('id', explode(',', $doctorProfile['specialty_id']))->get()->toArray();
        /* Here for Star Rating */
        $doctorDetailValue['data']['start_rating'] = User::scopeStarRating($doctorId);
        return response()->json(['doctor_profile' => $doctorDetailValue, 'doctor_specialty_diseas' => $doctorSpecialtieDiseas]);
    }

    public function booked(Request $request) {
        $acceptFields = $request->only('step1value', 'step2value');
        $user = $this->auth->user();
        $storedValue = array_merge(
                json_decode(base64_decode($acceptFields['step1value']), true), json_decode(base64_decode($acceptFields['step2value']), true)
        );
        $storedValue['user_id'] = $user->id;
        $storedValue['patient_note'] = isset($storedValue['notes'])?$storedValue['notes']:' ';
		unset($storedValue['notes']);
        $drProfile = UserProfile::select(['user_id', 'is_newpatient_accepted'])->where('user_id', '=', $storedValue['doctor_user_id'])->first()->toArray();
        $storedValue['appointment_status_id'] = ($drProfile['is_newpatient_accepted'] == 0) ? config('constants.ConstAppointmentStatus.Approved') : config('constants.ConstAppointmentStatus.PendingApproval');
        foreach ($storedValue as $fieldName => $fieldValue) {
            if (strpos($fieldName, 'appointment_date') !== false || strpos($fieldName, 'guest_dob') !== false || strpos($fieldName, 'dob') !== false) {
                $storedFieldValue[$fieldName] = !empty($fieldValue) ? date('Y-m-d', strtotime($fieldValue)) : '';
            } else {
                $storedFieldValue[$fieldName] = $fieldValue;
            }
        }
        $isAlreadyBooked = Appointment::where(['appointment_date'=>DATE($storedFieldValue['appointment_date']),'appointment_time'=>$storedFieldValue['appointment_time'], 'doctor_user_id'=>$storedValue['doctor_user_id']])->get();
        if(empty($isAlreadyBooked->toArray())){
            $created = Appointment::create($storedFieldValue);
            if ($created) {
                $doctorProfile = UserProfile::with('user','City','Country')->select(['user_id', 'first_name', 'last_name', 'dr_title', 'phone', 'gender_id', 'address', 'specialty_id','city_id','country_id','postal_code'])->where('user_id', '=', $storedValue['doctor_user_id'])->first();
                $patientProfile = UserProfile::with('user')->select(['user_id', 'first_name', 'last_name', 'phone', 'address'])->where('user_id', '=', $user->id)->first();
                 $this->AppointmentService->sendAppointmentRequestDoctorMail($doctorProfile, $patientProfile,$storedFieldValue);
                /*$this->AppointmentService->sendAppointmentRequestDoctorMail($doctorProfile, $patientProfile,$storedFieldValue['appointment_date'],$storedFieldValue['appointment_time']);*/
                return response()->json(['Success' => 'Appointment Added Successfully'], 200);
            } else {
                return response()->json(['Failed' => 'Appointment Added Failed']);
            }
        }else{
            return response()->json(['Failed' => 'Appointment Slot is Already Booked']);
        }

    }
    public function calenderview($month = null){
        $user = $this->auth->user();
        if($month == null){
            $betweenDates = [
                date('Y-m-').'1',
                date('Y-m-d', strtotime('+1 month'))
            ];
        }else{
            $date = date('Y-m-d',strtotime(date('Y').'-'.$month.'-01'));
            $betweenDates = [
                $date,
                date('Y-m-d',strtotime('+1 month',strtotime($date)))
            ];
        }
        if($user->role_id == config('constants.ConstUserTypes.User')) {
            $condition = ['user_id' => $user->id];
        } else if($user->role_id == config('constants.ConstUserTypes.Doctor')) {
            $condition = ['doctor_user_id' => $user->id];
            /* Get Modified Appointment Schedule which is only leave */
            $appointments['leaveEvent'] = AppointmentModifications::whereBetween('appoint_date', $betweenDates)->where(['user_id' => $user->id,'type'=>1])->select(['id','appoint_date'])->get()->toArray();
        }
        $appointments['appointmentEvent'] = Appointment::whereBetween('appointment_date',$betweenDates)->where($condition)
            ->select(['appointment_time','first_name','last_name','id','appointment_date'])
            ->get()->toArray();
        /* for calender purpose in api*/
        $appointments['prevMonth'] = date('M',strtotime('-1 month',strtotime($betweenDates[0])));
        $appointments['nextMonth'] = date('M',strtotime($betweenDates[1]));
        $appointments['serverTimeZone'] = $this->get_server_time_zone();
        return response()->json($appointments);
    }
    public  function userisbook($doctorid, $userid){
        $appointmentDetail = Appointment::where(['doctor_user_id'=>$doctorid,'user_id'=>$userid,'status'=>config('constants.ConstAppointmentStatus.Closed')])->first();
        if($appointmentDetail){
            return response()->json(['data'=>['is_visited'=>true]]);
        }else{
            return response()->json(['data'=>['is_visited'=>false]]);
        }
    }
    public function changeStatus($appointmentId, $appointmentStatus){
        if($appointmentStatus == 'confirm'){
            $updateValue['appointment_status_id'] = config('constants.ConstAppointmentStatus.Approved');
            $msg = "Appointment Confirmed Successfully";
        }else if($appointmentStatus == 'decline'){
            $updateValue['appointment_status_id'] = config('constants.ConstAppointmentStatus.Rejected');
            $msg = "Appointment Decline Successfully";
        }else if($appointmentStatus == 'cancel'){
            $updateValue['appointment_status_id'] = config('constants.ConstAppointmentStatus.Cancelled');
            $msg = "Appointment Cancelled Successfully";
        }
        $update = Appointment::where('id','=',$appointmentId)->update($updateValue);
        if($update){
             $this->AppointmentService->appointmentStatusMail($appointmentId, $updateValue['appointment_status_id']);
            return response()->json(['Success' => $msg], 200);
        }else{
            return response()->json(['Failed' => 'Appointment Status could not be updated. Please, try again.']);
        }
    }
    public function get_server_time_zone(){
        $offset = Carbon::now()->format('Z') / 3600;
        if(is_float($offset)){
            $offsetExp = explode('.', $offset);
            if($offsetExp[0] < 0){
                $serverTimeZone = (strlen($offsetExp[0]) != 2)? str_ireplace('-','-0',$offsetExp[0]).':30':'-'.$offsetExp[0].':30';   
            }else{
                $serverTimeZone = (strlen($offsetExp[0]) != 2)?'+0'.$offsetExp[0].':30':'+'.$offsetExp[0].':30';
            }
        }else{
            if($offset < 0){
                $serverTimeZone = (strlen($offset) != 2)? str_ireplace('-','-0',$offset).':00':'-'.$offset.':00';
            }else{
                $serverTimeZone = (strlen($offset) != 2)?'+0'.$offset.':30':'+'.$offset.':30';
            }
        }
        return $serverTimeZone;
    }

    /* For Cron Testing Process */
    public function chagneexpiry(){
        $this->AppointmentService->changeappointmentexpiry();
    }
    /* For Cron Testing Process */
    public function sendalert(){
        $this->AppointmentService->changeappointmentexpiry();
    }

}

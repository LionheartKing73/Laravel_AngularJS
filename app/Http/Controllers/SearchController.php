<?php

/**
 * AgriyaBase - Lumen framework
 * PHP version 5.5.9
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Mugundhan Asokan
 * @email      a.mugundhan@gmail.com
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-04-13
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\UserProfileTransformer;
use App\Transformers\UserAuthTransformer;
use App\User;
use App\UserProfile;
use App\Appointment;
use App\AppointmentSettings;
use App\Transformers\AppointmentSettingsTransformer;
use App\AppointmentModifications;
use App\AppointmentModificationsTransformer;
use DateTime;
use League\Fractal\Manager;
use DB;

class SearchController extends Controller {

    public function search(Request $request) {
        //$requestFields = $request->input();
        $searchFields = $request->only('review','gender_id','city_id','specialty_disease_id','specialty_id','insurance_id','page', 'doctor');
        $viewSlot = 1;
        $conditions = '';
        $wherRawCondition = '';
        $isWeb = !empty($request['is_web'])?true:null;
        if(!empty($request['review']) && ($request['review'] == true)){
            $reivew = true;    
        }else{
            $reivew = null;
        }
        
        foreach ($searchFields as $fields => $value) {
            if ($fields != 'page') {
                if(!empty($value)) {
                    if ($fields == 'doctor') {
                        $conditions = [['display_name','LIKE','%'.$value.'%']];
                    } else if (($fields == 'insurance_id') || ($fields == 'specialty_id') || ($fields == 'specialty_disease_id')) {
                        $wherRawCondition[] = "FIND_IN_SET($value,$fields)";
                    } else if($fields == 'review'){
                        
                    }else{
                        $conditions[$fields] = $value;
                    }
                }
            }
        }
        $conditions['is_doctor'] = 1; /* For get only docotor */
        /* for search doctor by first & last name */
        if(!empty($searchFields['doctor'])){
             if(!empty($wherRawCondition)){
                $query = UserProfile::join('appointment_settings', function ($join) {
                        $join->on('appointment_settings.user_id', '=', 'user_profiles.user_id')
                        ->where('appointment_settings.is_active', '=', 1)
                        ->where('appointment_settings.is_suspend', '=', 0);
                    })
                    ->whereRaw(implode(' AND ',$wherRawCondition))
                    ->where($conditions);
            }else{
                $query = UserProfile::join('appointment_settings', function ($join) {
                        $join->on('appointment_settings.user_id', '=', 'user_profiles.user_id')
                        ->where('appointment_settings.is_active', '=', 1)
                        ->where('appointment_settings.is_suspend', '=', 0);
                    })
                    ->where($conditions);
            }
        }else{
           if(!empty($wherRawCondition)){
                $query = UserProfile::join('appointment_settings', function ($join) {
                        $join->on('appointment_settings.user_id', '=', 'user_profiles.user_id')
                        ->where('appointment_settings.is_active', '=', 1)
                        ->where('appointment_settings.is_suspend', '=', 0);
                    })
                    ->whereRaw(implode(' AND ',$wherRawCondition))
                    ->where($conditions);
            }else{
                $query = UserProfile::join('appointment_settings', function ($join) {
                        $join->on('appointment_settings.user_id', '=', 'user_profiles.user_id')
                        ->where('appointment_settings.is_active', '=', 1)
                        ->where('appointment_settings.is_suspend', '=', 0);
                    })
                    ->where($conditions);
            }
        }
         if(!empty($searchFields['review'])){
            $docotorsListPaginate = $query->select(['user_profiles.user_id', 'users.overall_avg_rating'])
                                        ->join('users', function ($join) {
                                            $join->on('users.id', '=', 'user_profiles.user_id');
                                        })
                                        ->orderBy('users.overall_avg_rating', 'desc')
                                        ->paginate(config('listing.per_page'))->toArray();
        }else{
            $docotorsListPaginate = $query->select(['user_profiles.user_id'])->paginate(config('listing.per_page'))->toArray();
        }
        
        $userIds = array_column($docotorsListPaginate['data'], 'user_id');
        unset($docotorsListPaginate['data']);
        $appointmentDetails = $this->get_doctors_appointment_details($userIds, $viewSlot, 1, $isWeb, $reivew);
        if(!empty($appointmentDetails)){
            $jsonUserIds = base64_encode(implode('-',$userIds));
            return response()->json(['paginate_values' => $docotorsListPaginate, 'user_profiles' => [$appointmentDetails],'weekids'=>$jsonUserIds,'userLoadMore'=>5, 'viewslot'=>$viewSlot]);
        }else{
            return response()->json(['paginate_values' => [], 'user_profiles' => [],'weekids'=>'','userLoadMore'=>5, 'viewslot'=>$viewSlot]);
        }
    }

    public function get_doctors_appointment_details($userIds, $viewSlot = 1, $isUserProfileNeeded = 1, $isWeb, $reivew) {
        if (!empty($userIds)) {
            /* For get the appointment setting details */ 
            $appoinmentSettings = AppointmentSettings::whereIn('user_id', $userIds)->get()->toArray();
            if (!empty($appoinmentSettings)) {
                /* addDate() is based on today date process if we need current date and day just pass empty function */
                $daysArray = [
                    0 => $this->addDate(0, $viewSlot),
                    1 => $this->addDate(1, $viewSlot),
                    2 => $this->addDate(2, $viewSlot),
                    3 => $this->addDate(3, $viewSlot),
                    4 => $this->addDate(4, $viewSlot),
                    5 => $this->addDate(5, $viewSlot),
                    6 => $this->addDate(6, $viewSlot),
                ];

                $settingFrom = $daysArray[0]['date'];
                $settingTo = $daysArray[6]['date'];
                foreach ($appoinmentSettings as $appointmentSetting) {
                    $modifiedAppointmentDetails = $this->get_doctor_appointment_modificaiton_details($appointmentSetting['user_id'], $settingFrom, $settingTo);
                    /* For build the modified setting process */
                    if (!empty($modifiedAppointmentDetails)) {
                        $buildWeek = '';
                        foreach ($modifiedAppointmentDetails as $modifiedAppointmentDetail) {
                            $calenderBuildDay[] = $this->getDatebyDay($modifiedAppointmentDetail['appoint_date']);
                            if (in_array($modifiedAppointmentDetail['appoint_date'], array_column($daysArray, 'date'))) {
                                $day['day'] = $this->getDatebyDay($modifiedAppointmentDetail['appoint_date']);
                                if ($modifiedAppointmentDetail['type'] == 1) {
                                    $buildWeek[$day['day']] = [0 => '--'];
                                } else {
                                    $buildWeek[$day['day']] = '';
                                    if (!empty($modifiedAppointmentDetail['practice_open'])) {
                                        foreach (explode(',', $modifiedAppointmentDetail['practice_open']) as $timeValue) {
                                            $buildWeek[$day['day']][] = $timeValue;
                                        }
                                    } else {
                                        $buildWeek[$day['day']] = ['0' => '--'];
                                    }
                                }
                            }
                        }
                        if (count($buildWeek) != 7) {
                            $otherBuildDays = array_diff(array_column($daysArray, 'day'), $calenderBuildDay);
                            $otherDaysbuildWeek = $this->appointmentsettings_calender_build($otherBuildDays, $appointmentSetting);
                            $buildWeek = array_merge($buildWeek, $otherDaysbuildWeek);
                        }
                    } else {
                        $buildWeek = $this->appointmentsettings_calender_build(array_column($daysArray, 'day'), $appointmentSetting);
                    }
                    if ($isUserProfileNeeded) {
                        $fractal = new Manager();
                        /* For get the Doctor Profile Details */
                        $doctorDetail = UserProfile::where('user_id', $appointmentSetting['user_id'])->first();
                        $doctorDetailwithIncludes = new \League\Fractal\Resource\Item($doctorDetail, (new UserProfileTransformer)->setDefaultIncludes(['User', 'city', 'state', 'country', 'gender']));
                        $doctorDetailValue = $fractal->createData($doctorDetailwithIncludes)->toArray();
                        $doctorDetailValue['starRating'] = User::scopeStarRating($appointmentSetting['user_id']); /* here need to add the start rating calculation */
                        $calenderDetails[$appointmentSetting['user_id']] = array_merge($doctorDetailValue, $buildWeek);
                    } else {
                        $calenderDetails = $buildWeek;
                    }
                    /* For Removed Booked Appointment Details Here */
                    $appointmentDetails = $this->get_doctor_booking_appointments($appointmentSetting['user_id'], $settingFrom, $settingTo);
                    if (!empty($appointmentDetails)) {
                        foreach ($appointmentDetails as $appointmentDetail) {
                            $checkDay = date('D', strtotime($appointmentDetail['appointment_date']));
                            if ($isUserProfileNeeded) {
                                if (!empty($calenderDetails[$appointmentSetting['user_id']][$checkDay])) {
                                    if (($key = array_search($appointmentDetail['appointment_time'], $calenderDetails[$appointmentSetting['user_id']][$checkDay])) !== false) {
                                        unset($calenderDetails[$appointmentSetting['user_id']][$checkDay][$key]);
                                        if(!empty($calenderDetails[$appointmentSetting['user_id']][$checkDay])){    
                                            $calenderDetails[$appointmentSetting['user_id']][$checkDay] = array_values($calenderDetails[$appointmentSetting['user_id']][$checkDay]);
                                        }else{
                                            $calenderDetails[$appointmentSetting['user_id']][$checkDay] = [0 => '--'];
                                        }
                                    }
                                }
                            } else {
                                if (!empty($calenderDetails[$checkDay])) {
                                    if (($key = array_search($appointmentDetail['appointment_time'], $calenderDetails[$checkDay])) !== false) {
                                        unset($calenderDetails[$checkDay][$key]);
                                        if(!empty($calenderDetails[$checkDay])){
                                            $calenderDetails[$checkDay] = array_values($calenderDetails[$checkDay]);
                                        }else{
                                            $calenderDetails[$checkDay] = [0 => '--'];
                                        }
                                    }
                                }
                            }
                        }
                    }
                    /* Here Removed For Current Date & Time Before Appointment Time */
                    if ($viewSlot == 1) {
                        $todayDay = $daysArray[0]['day'];
                        $format = config('site.timeformat');
                        if($format == 12){
                            $currentTime = date('h:i A');
                        }else{
                            $currentTime = date('H:i');
                        }
                        if ($isUserProfileNeeded) {
                            $todayCond = $calenderDetails[$appointmentSetting['user_id']][$todayDay];
                        }else{
                            $todayCond = $calenderDetails[$todayDay];
                        }
                        //echo '<pre>'; print_r($todayCond); die;
                        if (!empty($todayCond)) {
                            if($format == 12){
                                $filterValue = array_filter($todayCond, function ($timeValue) use ($currentTime) {
                                    return date('H:i', strtotime($timeValue)) > date('H:i', strtotime($currentTime));
                                });
                            }else{
                                $filterValue = array_filter($todayCond, function ($timeValue) use ($currentTime) {
                                    return $timeValue > $currentTime;
                                });
                            }
                            if ($isUserProfileNeeded) {
                                unset($calenderDetails[$appointmentSetting['user_id']][$todayDay]);
                                if(!empty($filterValue)){
                                    $calenderDetails[$appointmentSetting['user_id']][$todayDay] = array_values($filterValue);
                                     
                                }else{
                                    $calenderDetails[$appointmentSetting['user_id']][$todayDay] = [0 => '--'];
                                }
                            }else{
                                unset($calenderDetails[$todayDay]);
                                if(empty(!$filterValue)){
                                    $calenderDetails[$todayDay] = array_values($filterValue);
                                }else{
                                    $calenderDetails[$todayDay] = [0 => '--'];
                                }
                            }
                        }
                    }
                    if($isWeb == null){
                        /* for find and fill the empty block */
                        $maxCountDay = '';
                        foreach($daysArray as $day){
                            if ($isUserProfileNeeded) {
                                $maxCountDay[] = count($calenderDetails[$appointmentSetting['user_id']][$day['day']]);
                            }else{
                                $maxCountDay[] = count($calenderDetails[$day['day']]);
                            }
                        }
                        $maxCount = max($maxCountDay);
                        foreach($daysArray as $day){
                            if ($isUserProfileNeeded) {
                                $objCountVal = count($calenderDetails[$appointmentSetting['user_id']][$day['day']]);
                                if($maxCount != $objCountVal){
                                    $fillVal = $maxCount - $objCountVal;
                                    $calenderDetails[$appointmentSetting['user_id']][$day['day']] = array_merge($calenderDetails[$appointmentSetting['user_id']][$day['day']], array_fill($objCountVal, $fillVal, '--'));
                                }
                            }else{
                                $objCountVal =  count($calenderDetails[$day['day']]);
                                if($maxCount != $objCountVal){
                                    $fillVal = $maxCount - $objCountVal;
                                    $calenderDetails[$day['day']] = array_merge($calenderDetails[$day['day']], array_fill($objCountVal, $fillVal, '--'));
                                }
                            }
                        }
                    }
                }
                return $calenderDetails;
            }
        }else{
            return $calenderDetails = '';
        }
    }

    public function appointmentsettings_calender_build($daysArray = array(), $appointmentSetting) {
        if (!empty($daysArray)) {
            foreach ($daysArray as $otherDay) {
                if ($appointmentSetting['type'] == 0) {
                    if ($appointmentSetting['is_two_session'] == 1) {
                        /* Before Break Here */
                        $beforeBreak = $this->getTimeSlot($appointmentSetting['practice_open'], $appointmentSetting['lunch_at'], $appointmentSetting['calendar_slot_id']);
                        
                        /* After the Break Here */
                        $afterBreak = $this->getTimeSlot($appointmentSetting['resume_at'], $appointmentSetting['practice_close'], $appointmentSetting['calendar_slot_id']);
                        $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                    } else {
                        $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['practice_open'], $appointmentSetting['practice_close'], $appointmentSetting['calendar_slot_id']);
                    }
                } else {
                    /* For Check individual and set the time for all days */
                    if ($otherDay == 'Mon') {
                        if ($appointmentSetting['is_monday_open'] == 1) {
                            if ($appointmentSetting['monday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['monday_practice_open'], $appointmentSetting['monday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['monday_resume_at'], $appointmentSetting['monday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['monday_practice_open'], $appointmentSetting['monday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    } else if ($otherDay == 'Tue') {
                        if ($appointmentSetting['is_tuesday_open'] == 1) {
                            if ($appointmentSetting['tuesday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['tuesday_practice_open'], $appointmentSetting['tuesday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['tuesday_resume_at'], $appointmentSetting['tuesday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['tuesday_practice_open'], $appointmentSetting['tuesday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    } else if ($otherDay == 'Wed') {
                        if ($appointmentSetting['is_wednesday_open'] == 1) {
                            if ($appointmentSetting['wednesday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['wednesday_practice_open'], $appointmentSetting['wednesday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['wednesday_resume_at'], $appointmentSetting['wednesday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['wednesday_practice_open'], $appointmentSetting['wednesday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    } else if ($otherDay == 'Thu') {
                        if ($appointmentSetting['is_thrusday_open'] == 1) {
                            if ($appointmentSetting['thrusday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['thrusday_practice_open'], $appointmentSetting['thrusday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['thrusday_resume_at'], $appointmentSetting['thrusday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['thrusday_practice_open'], $appointmentSetting['thrusday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    } else if ($otherDay == 'Fri') {
                        if ($appointmentSetting['is_friday_open'] == 1) {
                            if ($appointmentSetting['friday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['friday_practice_open'], $appointmentSetting['friday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['friday_resume_at'], $appointmentSetting['friday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['friday_practice_open'], $appointmentSetting['friday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    } else if ($otherDay == 'Sat') {
                        if ($appointmentSetting['is_saturday_open'] == 1) {
                            if ($appointmentSetting['saturday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['saturday_practice_open'], $appointmentSetting['saturday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['saturday_resume_at'], $appointmentSetting['saturday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['saturday_practice_open'], $appointmentSetting['saturday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    } else if ($otherDay == 'Sun') {
                        if ($appointmentSetting['is_sunday_open'] == 1) {
                            if ($appointmentSetting['sunday_two_session'] == 1) {
                                /* Before Break Here */
                                $beforeBreak = $this->getTimeSlot($appointmentSetting['sunday_practice_open'], $appointmentSetting['sunday_lunch_at'], $appointmentSetting['calendar_slot_id']);
                                
                                /* After the Break Here */
                                $afterBreak = $this->getTimeSlot($appointmentSetting['sunday_resume_at'], $appointmentSetting['sunday_practice_close'], $appointmentSetting['calendar_slot_id']);
                                $buildWeek[$otherDay] = array_merge($beforeBreak, $afterBreak);
                            } else {
                                $buildWeek[$otherDay] = $this->getTimeSlot($appointmentSetting['sunday_practice_open'], $appointmentSetting['sunday_practice_close'], $appointmentSetting['calendar_slot_id']);
                            }
                        } else {
                            $buildWeek[$otherDay] = [0 => '--'];
                        }
                    }
                }
            }
        } else {
            $buildWeek = '';
        }
        return $buildWeek;
    }

    public function get_doctor_appointment_modificaiton_details($doctorId, $startDate = null, $endDate = null) {
        if ($startDate == null && $endDate == null) {
            $modifiedAppointmentSettings = AppointmentModifications::where('appoint_date', '>=', date('Y-m-d'))->where(['user_id' => $doctorId, 'is_active'=>1])->get();
        } else {
            $modifiedAppointmentSettings = AppointmentModifications::whereBetween('appoint_date', [$startDate, $endDate])->where(['user_id'=>$doctorId , 'is_active'=>1])->get();
        }
        return $modifiedAppointmentSettings->toArray();
    }

    public function get_doctor_booking_appointments($doctorId,$startDate = null, $endDate = null){
        $whereInIds = [config('constants.ConstAppointmentStatus.Cancelled'), config('constants.ConstAppointmentStatus.Rejected')];
        if ($startDate == null && $endDate == null) {
            $appointmentBookings =  Appointment::where('appointment_date', '>=', date('Y-m-d'))
                    ->where(['doctor_user_id' => $doctorId])
                    ->whereNotIn('appointment_status_id', $whereInIds)
                    ->select(['appointment_date','appointment_time','doctor_user_id'])
                    ->get();
        } else {
            $appointmentBookings =  Appointment::whereBetween('appointment_date', [$startDate, $endDate])
                ->where('doctor_user_id', $doctorId)
                ->whereNotIn('appointment_status_id', $whereInIds)
                ->select(['appointment_date','appointment_time','doctor_user_id'])
                ->get();
        }
        return $appointmentBookings->toArray();
    }
    public function getDatebyDay($date) {
        return date('D', strtotime($date));
    }

    public function addDate($days = 0, $multipleCount = 1) {
        /* Here calculate the added day or days */
        if ($multipleCount > 1) {
            $addDays = ($multipleCount - 1) * 7 + $days;
        } else {
            $addDays = $days;
        }
        /* Here start date added process */
        if (($days == 0) && ($multipleCount == 1)) {
            return ['day' => date('D'), 'date' => date('Y-m-d')];
        } else if (($days == 0) && ($multipleCount > 1)) {
            $days = ($multipleCount - 1) * 7;
            $todayDate = date('Y-m-d');
            $date = [
                'day' => date('D', strtotime($todayDate . "+" . $days . " days")),
                'date' => date('Y-m-d', strtotime($todayDate . "+" . $days . " days")),
            ];
            return $date;
        } else {
            $todayDate = date('Y-m-d');
            $date = [
                'day' => date('D', strtotime($todayDate . "+" . $addDays . " days")),
                'date' => date('Y-m-d', strtotime($todayDate . "+" . $addDays . " days")),
            ];
            return $date;
        }
    }

    public function getTimeSlot($startTime, $endTime, $interval) {
        /* For Split the time slot here */
        $format = config('site.timeformat');
        $start = new DateTime(date('Y-m-d') . $startTime);
        $end = new DateTime(date('Y-m-d') . $endTime);
        if($format == 12){
            $timeSlotList[] = $start->modify('+0 minutes')->format('h:i A'); /* For add the start time has current time */
        }else{
            $timeSlotList[] = $start->modify('+0 minutes')->format('H:i'); /* For add the start time has current time */
        }
        while ($start < $end) {
            if($format == 12){
                $timeSlotList[] = $start->modify('+' . $interval . 'minutes')->format('h:i A');
            }else{
                $timeSlotList[] = $start->modify('+' . $interval . 'minutes')->format('H:i');
            }

        }
        return $timeSlotList;
    }
    public function weeklist($userIds, $viewSlot){
        $isWeb = !empty($_GET['is_web'])?true:null;
		$reivew = true;
        $userIDS = explode('-',base64_decode($userIds));
        $appointmentDetails = $this->get_doctors_appointment_details($userIDS, $viewSlot, 1 , $isWeb, $reivew);
        return response()->json(['user_profiles' => [$appointmentDetails],'viewslot'=>$viewSlot,'userLoadMore'=>5]);
    }
    public function getdoctorweeklist($userId, $viewSlot){
        $isWeb = !empty($_GET['is_web'])?true:null;
        $reivew = null;
        $appointmentDetails = $this->get_doctors_appointment_details([$userId], $viewSlot,0, $isWeb, $reivew);
        return response()->json(['user_profiles' => [$appointmentDetails],'viewslot'=>$viewSlot,'userLoadMore'=>5]);
    }
    public function timesplitslot(){
        $user = $this->auth->user();
        $appointmentSettings = AppointmentSettings::where('user_id','=',$user->id)->first();
        $splitedTime = $this->getTimeSlot('00:00','23:59',$appointmentSettings['calendar_slot_id']);
        array_pop($splitedTime);
        return response()->json(['data'=>$splitedTime]);   
    }
}
<?php
namespace App\Services;

use App\AppointmentSettings;

class AppointmentSettingsService {

    /**
     * Save record to doctor appointment settings table after login
     * @param $request
     * @param $ip_id
     * @return UserLogin
     */
    public function save_appointment_settings($request_data)
    {
        $appointement_settings = new AppointmentSettings;
        $appointement_settings->user_id = $request_data['user_id'];
        $appointement_settings->calendar_slot_id = 30;
        $appointement_settings->practice_open = date('Y-m-d').' 10:00:00';
        $appointement_settings->practice_close = date('Y-m-d').' 18:00:00';
        $appointement_settings->is_active = 1;
        return $appointement_settings;
    }
}

?>
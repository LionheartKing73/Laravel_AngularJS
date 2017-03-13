<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$api = $app->make('Dingo\Api\Routing\Router');

$value = config('app.timezone');
date_default_timezone_set($value);

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->get('robots.txt', function () use ($app) {
    return config('site.robots');
});

$api->version(['v1'], function ($api) use ($app) {

    $api->group(['prefix' => 'admin', 'namespace' => 'App\Http\Controllers\Admin'], function () use ($api) {
        // cities admin side
        $api->delete('cities/{id}', 'AdminCitiesController@destroy');
        $api->get('cities', 'AdminCitiesController@index');
        $api->get('cities/{id}/edit', 'AdminCitiesController@edit');
        $api->get('cities/{id}', 'AdminCitiesController@edit');
        $api->post('cities', 'AdminCitiesController@store');
        $api->put('cities/{id}', 'AdminCitiesController@update');

        // countries admin side
        $api->delete('countries/{id}', 'AdminCountriesController@destroy');
        $api->get('countries', 'AdminCountriesController@index');
        $api->get('countries/{id}/edit', 'AdminCountriesController@edit');
        $api->get('countries/{id}', 'AdminCountriesController@edit');
        $api->post('countries', 'AdminCountriesController@store');
        $api->put('countries/{id}', 'AdminCountriesController@update');

        // currencies
        $api->delete('currencies/{id}', 'AdminCurrenciesController@destroy');
        $api->get('currencies', 'AdminCurrenciesController@index');
        $api->get('currencies/{id}/edit', 'AdminCurrenciesController@edit');
        $api->get('currencies/{id}', 'AdminCurrenciesController@edit');
        $api->post('currencies', 'AdminCurrenciesController@store');
        $api->put('currencies/{id}', 'AdminCurrenciesController@update');

        // admin dashboards
        $api->get('activities', 'AdminDashboardsController@activities');
        $api->get('stats', 'AdminDashboardsController@stats');

        // email templates admin side
        $api->get('email_templates', 'AdminEmailTemplatesController@index');
        $api->get('email_templates/{id}/edit', 'AdminEmailTemplatesController@edit');
        $api->get('email_templates/{id}', 'AdminEmailTemplatesController@edit');
        $api->put('email_templates/{id}', 'AdminEmailTemplatesController@update');

        // ips
        $api->delete('ips/{id}', 'AdminIpsController@destroy');
        $api->get('ips', 'AdminIpsController@index');
        $api->get('ips/{id}', 'AdminIpsController@show');

        // languages admin side
        $api->get('languages', 'AdminLanguagesController@index');
        $api->get('languages/{id}/edit', 'AdminLanguagesController@edit');
        $api->get('languages/{id}', 'AdminLanguagesController@edit');
        $api->post('languages', 'AdminLanguagesController@store');
        $api->put('languages/{id}', 'AdminLanguagesController@update');
        $api->delete('languages/{id}', 'AdminLanguagesController@destroy');

        // roles
        $api->get('roles', 'AdminRolesController@index');

        // Settings
        $api->get('settings', 'AdminSettingsController@index');
        $api->get('settings/{id}/edit', 'AdminSettingsController@edit');
        $api->get('settings/{id}', 'AdminSettingsController@edit');
        $api->get('settings/{name}/show', 'AdminSettingsController@show');
        $api->get('setting_categories/{id}/settings', 'AdminSettingsController@settings');
        $api->put('settings/{id}', 'AdminSettingsController@update');
        $api->get('plugins', 'AdminSettingsController@getPlugin');
        $api->put('plugins', 'AdminSettingsController@updatePlugin');

        // Setting Categories
        $api->get('setting_categories', 'AdminSettingCategoriesController@index');
        $api->get('setting_categories/{id}', 'AdminSettingCategoriesController@show');

        // states
        $api->delete('states/{id}', 'AdminStatesController@destroy');
        $api->get('states', 'AdminStatesController@index');
        $api->get('states/{id}/edit', 'AdminStatesController@edit');
        $api->get('states/{id}', 'AdminStatesController@edit');
        $api->post('states', 'AdminStatesController@store');
        $api->put('states/{id}', 'AdminStatesController@update');


        // users
        $api->delete('users/{id}', 'AdminUsersController@destroy');
        $api->get('users', 'AdminUsersController@index');
        $api->get('users/{id}', 'AdminUsersController@show');
        $api->get('users/{id}/edit', 'AdminUsersController@edit');
        $api->post('users', 'AdminUsersController@store');
        $api->put('users/{id}', 'AdminUsersController@update');

        // user_logins
        $api->delete('user_logins/{id}', 'AdminUserLoginsController@destroy');
        $api->get('user_logins', 'AdminUserLoginsController@index');
        $api->get('user_logins/{id}', 'AdminUserLoginsController@show');

        // withdrawal statuses
        $api->get('withdrawal_statuses', 'AdminWithdrawalStatusesController@index');

        //plans
        $api->delete('plans/{id}', 'AdminPlansController@destroy');
        $api->get('plans', 'AdminPlansController@index');
        $api->get('plans/{id}/edit', 'AdminPlansController@edit');
        $api->get('plans/{id}', 'AdminPlansController@edit');
        $api->post('plans', 'AdminPlansController@store');

        //Specialty
        $api->delete('/specialties/{id}', 'AdminSpecialtiesController@destroy');
        $api->get('/specialties', 'AdminSpecialtiesController@index');
        $api->get('/specialties/{id}/edit', 'AdminSpecialtiesController@edit');
        $api->get('/specialties/{id}', 'AdminSpecialtiesController@edit');
        $api->post('/specialties', 'AdminSpecialtiesController@store');
        $api->put('/specialties/{id}', 'AdminSpecialtiesController@update');

        //Specialty Dieseas
        $api->delete('specialty_diseases/{id}', 'AdminSpecialtyDiseasesController@destroy');
        $api->get('specialty_diseases', 'AdminSpecialtyDiseasesController@index');
        $api->get('specialty_diseases/{id}/edit', 'AdminSpecialtyDiseasesController@edit');
        $api->get('specialty_diseases/{id}', 'AdminSpecialtyDiseasesController@edit');
        $api->post('specialty_diseases', 'AdminSpecialtyDiseasesController@store');
        $api->put('specialty_diseases/{id}', 'AdminSpecialtyDiseasesController@update');
         
        //Insuracne
        $api->delete('/insurances/{id}', 'AdminInsuranceCompaniesController@destroy');
        $api->get('/insurances', 'AdminInsuranceCompaniesController@index');
        $api->get('/insurances/{id}/edit', 'AdminInsuranceCompaniesController@edit');
        $api->get('/insurances/{id}', 'AdminInsuranceCompaniesController@edit');
        $api->post('/insurances', 'AdminInsuranceCompaniesController@store');
        $api->put('/insurances/{id}', 'AdminInsuranceCompaniesController@update');
       
        //User Views
        $api->delete('user_views/{id}', 'AdminUserViewsController@destroy');
        $api->get('user_views', 'AdminUserViewsController@index');

        //Appointments
        $api->get('appointments', 'AdminAppointmentsController@index');
        $api->delete('appointments/{id}', 'AdminAppointmentsController@destroy');

        //Appointment Status
        $api->get('appointment_statuses', 'AdminAppointmentStatusesController@index');

        //Payment Gateways
        $api->get('payment_gateways', 'AdminPaymentGatewaysController@index');
        $api->get('payment_gateways/{id}/edit', 'AdminPaymentGatewaysController@edit');
        $api->get('payment_gateways/{id}', 'AdminPaymentGatewaysController@edit');
        $api->put('payment_gateways/{id}', 'AdminPaymentGatewaysController@update');

        //Payments
        $api->get('transactions', 'AdminTransactionsController@index');
        
        // sms templates admin side 
        $api->get('sms_templates', 'AdminSmsTemplatesController@index');
        $api->get('sms_templates/{id}/edit', 'AdminSmsTemplatesController@edit');
        $api->get('sms_templates/{id}', 'AdminSmsTemplatesController@edit');
        $api->put('sms_templates/{id}', 'AdminSmsTemplatesController@update');

        // providers admin side
        $api->get('providers', 'AdminProvidersController@index');
        $api->get('providers/{id}/edit', 'AdminProvidersController@edit');
        $api->get('providers/{id}', 'AdminProvidersController@edit');
        $api->post('providers', 'AdminProvidersController@store');
        $api->put('providers/{id}', 'AdminProvidersController@update');
        $api->delete('providers/{id}', 'AdminProvidersController@destroy');
        
    });

    //Appointments Settings
    $api->get('/appointments/settings', 'App\Http\Controllers\AppointmentSettingsController@index');
    $api->post('/appointments/settings', 'App\Http\Controllers\AppointmentSettingsController@update');
    $api->put('/appointments/settings', 'App\Http\Controllers\AppointmentSettingsController@show');
    
    //Appointments Settings Modifications
    $api->get('/appointments/modifications', 'App\Http\Controllers\AppointmentModificationsController@index');
    $api->post('/appointments/modifications/add', 'App\Http\Controllers\AppointmentModificationsController@add');
    $api->post('/appointments/modifications/edit/{id}', 'App\Http\Controllers\AppointmentModificationsController@update');
    $api->get('/appointments/modifications/edit/{id}', 'App\Http\Controllers\AppointmentModificationsController@show');
    $api->delete('/appointments/modifications/delete/{id}', 'App\Http\Controllers\AppointmentModificationsController@destroy');
    
    //appointments user side
    $api->get('/appointments/{type}', 'App\Http\Controllers\AppointmentsController@index');
    $api->get('/appointments/booking/{doctorid}/{apt_date}/{apt_time}', 'App\Http\Controllers\AppointmentsController@booking');
    $api->post('/appointments/booking/add', 'App\Http\Controllers\AppointmentsController@booked');
    $api->get('/appointment/{id}/{status}', 'App\Http\Controllers\AppointmentsController@changeStatus');

    //appointment view user side
    $api->get('/appointment/{id}', 'App\Http\Controllers\AppointmentsController@show');

    /* For check the user visit the doctor */
    $api->get('/bookings/{doctorid}/{userid}', 'App\Http\Controllers\AppointmentsController@userisbook');

    //appointment status user side
    $api->get('/appointment_statuses', 'App\Http\Controllers\AppointmentStatusController@index');

    //for search
    $api->get('/search/', 'App\Http\Controllers\SearchController@search');
    $api->get('/search/weeklist/{userids}/{viewslot}', 'App\Http\Controllers\SearchController@weeklist');
    $api->get('/search/getdoctorweeklist/{userids}/{viewslot}', 'App\Http\Controllers\SearchController@getdoctorweeklist');
    $api->get('/search/timeslot', 'App\Http\Controllers\SearchController@timesplitslot');
        
    // specialty diseases front end
    $api->get('/specialty_diseases', 'App\Http\Controllers\SpecialtyDiseasesController@index');

    // specialty front end
    $api->get('/specialties', 'App\Http\Controllers\SpecialtiesController@index');

    // insurance front end
    $api->get('/insurances', 'App\Http\Controllers\InsuranceCompaniesController@index');

    //cities user side
    $api->get('/cities', 'App\Http\Controllers\CitiesController@index');

    //Settings user side
    $api->get('/settings', 'App\Http\Controllers\SettingsController@index');

    //countries user side
    $api->get('/countries', 'App\Http\Controllers\CountriesController@index');

    //currencies user side
    $api->get('/currencies', 'App\Http\Controllers\CurrenciesController@index');

    // gender front end
    $api->get('/genders', 'App\Http\Controllers\GendersController@index');

    //languages user side
    $api->get('/languages', 'App\Http\Controllers\LanguagesController@index');

    //states user side
    $api->get('/states', 'App\Http\Controllers\StatesController@index');

    // users
    $api->get('/users', 'App\Http\Controllers\UsersController@index');
    $api->post('/users/login', 'App\Http\Controllers\UsersController@authenticate');
    $api->get('/users/auth', 'App\Http\Controllers\UsersController@getAuth');
    $api->post('/users/register', 'App\Http\Controllers\UsersController@register');
    $api->put('/users/{user_id}/activate/{hash}', 'App\Http\Controllers\UsersController@activate');
    $api->get('/doctor/{username}', 'App\Http\Controllers\UsersController@show');
    $api->put('/users/{user_id}/change_password', 'App\Http\Controllers\UsersController@changePassword');
    $api->put('/users/forgot_password', 'App\Http\Controllers\UsersController@forgetPassword');
    $api->get('users/{id}/attachment', 'App\Http\Controllers\UsersController@getUserUploadAttachment');
    $api->get('users/otp/verify/{id}/{otp}', 'App\Http\Controllers\UsersController@otpverify');
    $api->get('users/otp/resend/{id}', 'App\Http\Controllers\UsersController@otpresend');
    $api->get('users/logout', 'App\Http\Controllers\UsersController@authterminate');

    // user profiles
    $api->get('/user_profiles/', 'App\Http\Controllers\UserProfilesController@edit');
    $api->post('/user_profiles/', 'App\Http\Controllers\UserProfilesController@update');
    $api->get('/update/display_name', 'App\Http\Controllers\UserProfilesController@update_display_name');
    
    $api->get('/img/{size}/{model}/{filename}', 'App\Http\Controllers\ImagesController@create');
    $api->get('/assets/js/plugins.js', 'App\Http\Controllers\AssetsController@createJsTplFiles');

    // my specialties
    $api->get('/user/specialties', 'App\Http\Controllers\UserProfilesController@my_specialties');
    $api->put('/user/specialties', 'App\Http\Controllers\UserProfilesController@update_specialty');

    // my insurances
    $api->get('/user/insurances/', 'App\Http\Controllers\UserProfilesController@my_insurances');
    $api->put('/user/insurances/', 'App\Http\Controllers\UserProfilesController@update_insurance');
    
    // my languages
    $api->get('/user/languages', 'App\Http\Controllers\UserProfilesController@my_languages');
    $api->put('/user/languages', 'App\Http\Controllers\UserProfilesController@update_language');

    /* For Calender Listing */
    $api->get('/calender/events', 'App\Http\Controllers\AppointmentsController@calenderview');
    $api->get('/calender/events/{month}', 'App\Http\Controllers\AppointmentsController@calenderview');

    /* For Payment Gateways */
    $api->get('/get_gateways', 'App\Http\Controllers\PaymentsController@getGateways');
    $api->post('/subscription/subscribe', 'App\Http\Controllers\PaymentsController@subscribe');
    $api->get('/subscription/approve/{tokenid}/{payerid}', 'App\Http\Controllers\PaymentsController@paysuccess');
    $api->get('/subscription/profiledetails', 'App\Http\Controllers\PaymentsController@getprofiledetails');
    $api->get('/subscription/suspend', 'App\Http\Controllers\PaymentsController@paypalsuspend');
    $api->get('/subscription/active', 'App\Http\Controllers\PaymentsController@paypalactive');
    $api->get('/subscription/cancel', 'App\Http\Controllers\PaymentsController@paypalcancel');
    $api->get('/subscription/cron', 'App\Http\Controllers\PaymentsController@testSub');
    
    /* For Plugins & Enable Plugins Details */
    $api->get('/plugins/list', 'App\Http\Controllers\SettingsController@pluginslist');

    /* For Update Device Token */
    $api->put('/users/update/devicetoken', 'App\Http\Controllers\UsersController@updatedevice');

    /* For Test Appointment Related Crons */
    $api->get('/expiry/appointment', 'App\Http\Controllers\AppointmentsController@chagneexpiry');
    $api->get('/alert/appointment', 'App\Http\Controllers\AppointmentsController@sendalert');

    /*Noodent APIs */

    /*For Noodent User*/
    $api->post('/user/login', 'App\Http\Controllers\UsersController@authenticateUser');
    $api->post('/user/invite', 'App\Http\Controllers\UserController@inviteUser');
    $api->get('/user/permissions', 'App\Http\Controllers\UserController@permissions');
    $api->post('/user/saveRole', 'App\Http\Controllers\UserController@saveRole');
    $api->get('/user/fetchProcess', 'App\Http\Controllers\UserController@fetchProcess');
    $api->get('/user/confirm', 'App\Http\Controllers\UserController@confirm');
    $api->get('/user/rights', 'App\Http\Controllers\UserController@rights');

    /*For Noodent clinic*/
    $api->post('/clinic/save', 'App\Http\Controllers\ClinicController@save');
    $api->get('/clinic/procedure/fetch', 'App\Http\Controllers\ClinicController@fetchClinicProcedures');
    $api->get('/clinic/fetch', 'App\Http\Controllers\ClinicController@fetchClinics');
    $api->post('/clinic/procedure/save', 'App\Http\Controllers\ClinicController@saveClinicProcedures');
    $api->get('/clinic/roles', 'App\Http\Controllers\ClinicController@roles');

    /*For Noodent doctor*/
    $api->post('/doctor/save', 'App\Http\Controllers\DoctorController@save');
    $api->get('/doctor/procedures/fetch', 'App\Http\Controllers\DoctorController@fetchProcedures');

    /*For Noodent Appointment */
    $api->post('appointment/settings/save', 'App\Http\Controllers\AppointmentSettingController@save');

    /*For languages */
    $api->get('languages/fetch', 'App\Http\Controllers\LanguagesController@fetchLanguages');

    /*For cities */
    $api->get('cities/fetch', 'App\Http\Controllers\CitiesController@fetchCities');

});
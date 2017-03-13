/**
 * Each module has a <moduleName>.module.js file.  This file contains the angular module declaration -
 * angular.module("moduleName", []);
 * The build system ensures that all the *.module.js files get included prior to any other .js files, which
 * ensures that all module declarations occur before any module references.
 */
(function(module) {

    module.config(function ($stateProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('AppointmentSetting', {
            url: '/appointments/settings',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AppointmentsSettingController as model',
                    templateUrl: 'Appointments/appointment_setting.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('appointmentModification',{
            url:'/appointments/modifications',
            authenticate: true,
            views:{
                "main":{
                    controller: 'AppointmentsModificationController as model',
                    templateUrl: 'Appointments/appointment_modifications.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('appointmentModificationAdd',{
            url:'/appointments/modifications/add',
            authenticate:true,
            views:{
                "main":{
                    controller:'AppointmentsModificationController as model',
                    templateUrl: 'Appointments/appointment_modifications_add.tpl.html',
                    resolve: ResolveServiceData
                }
            }
            
        }).state('appointmentModificationDelete',{
            url:'/appointments/modifications/delete/{id}',
            authenticate:true,
            views:{
                "main":{
                    controller:'AppointmentsModificationController as model',
                    resolve: ResolveServiceData
                }
            }
            
        }).state('appointmentModificationEdit',{
            url:'/appointments/modifications/edit/{id}',
            authenticate:true,
            views:{
                "main":{
                    controller:'AppointmentsModificationController as model',
                    templateUrl: 'Appointments/appointment_modifications_edit.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('Appointments', {
            url: '/appointments/{type}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AppointmentsController as model',
                    templateUrl: 'Appointments/appointment_index.tpl.html',
                    resolve: ResolveServiceData
                }
            } 
        }).state('MyAppointments', {
            url: '/appointments/all',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AppointmentsController as model',
                    templateUrl: 'Appointments/appointment_index.tpl.html',
                    resolve: ResolveServiceData
                }
            } 
        }).state('AppointmentDetail', {
            url: '/appointment/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AppointmentsController as model',
                    templateUrl: 'Appointments/appointment_view.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('AppointmentBooking', {
            url: '/appointments/booking/{doctorid}/{apt_date}/{apt_time}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'BookingController as model',
                    templateUrl: 'Appointments/appointment_booking_appt_info.tpl.html',
                    resolve: ResolveServiceData
                }
            } 
        }).state('AppointmentBookingStep2', {
            url: '/appointments/booking/{doctorid}/{apt_date}/{apt_time}/step2',
            authenticate: true,
            views: {
                "main": {
                    controller: 'BookingController as model',
                    templateUrl: 'Appointments/appointment_booking_patient_info.tpl.html',
                    resolve: ResolveServiceData
                }
            } 
        }).state('AppointmentBookingStep3', {
            url: '/appointments/booking/{doctorid}/{apt_date}/{apt_time}/step3',
            authenticate: true,
            views: {
                "main": {
                    controller: 'BookingController as model',
                    templateUrl: 'Appointments/appointment_booking_details.tpl.html',
                    resolve: ResolveServiceData
                }
            } 
        }).state('AppointmentBookingStep4', {
            url: '/appointments/booking/{doctorid}/{apt_date}/{apt_time}/final',
            authenticate: true,
            views: {
                "main": {
                    controller: 'BookingController as model',
                    templateUrl: 'Appointments/appointment_booking_confirm.tpl.html',
                    resolve: ResolveServiceData
                }
            } 
        });
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.appointments", [
    'ui.router',
    'ngResource',
    'mgcrea.ngStrap',
    'uiSwitch',
    'oitozero.ngSweetAlert',
    'ui.bootstrap',
    'localytics.directives'
])));

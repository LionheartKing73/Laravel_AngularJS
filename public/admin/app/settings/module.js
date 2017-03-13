"use strict";


angular.module('app.settings', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.settings', {
            abstract: true,
            data: {
                title: 'Settings'
            }
        })
        .state('app.settings.clinicProfile', {
            url: '/settings/clinicProfile',
            data: {
                title: 'Clinic Profile'
            },
            views: {
                "content@app": {
                    controller: 'SettingsCtrl',
                    templateUrl: 'app/settings/views/clinic-profile.html',
                }
            }, 
        })
        .state('app.settings.doctors', {
            url: '/settings/doctors',
            data: {
                title: 'Doctors'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/settings/views/doctors.html'
                }
            }, 
        })
        .state('app.settings.doctors.new', {
            url: '/settings/doctors/new',
            data: {
                title: 'New'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/settings/views/new-doctor.html'
                }
            }, 
        })
        .state('app.settings.doctors.appointment', {
            url: 'settings/doctors/appointment',
            data: {
                title: 'Appointment Settings'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/settings/views/appointment-setting.html'
                }
            }, 
        })
        .state('app.settings.procedures', {
            url: '/procedures',
            data: {
                title: 'Procedures'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/settings/views/procedures.html'
                }
            }, 
        })
        .state('app.settings.users', {
            url: '/users',
            data: {
                title: 'Users'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/settings/views/users.html'
                }
            }, 
        })
        .state('app.settings.invitation', {
            url: '/users/invitation',
            data: {
                title: 'Users'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/settings/views/invitation.html'
                }
            }, 
        })
        .state('app.settings.newRole', {
            url: '/new-role',
            data: {
                title: 'Add new role'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/settings/views/new-role.html'
                }
            }, 
        })
        .state('app.settings.newDoctor', {
             
        })
});
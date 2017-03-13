/**
 * @ngdoc object
 * @name user
 * @description
 *
 * This is the module for user. It controls all user related functions.
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 * @param {string} user name of the module
 * @param {!Array.<string>=} dependencies If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
 *
 *        [
 *            'ui.router',
 *            'angulartics',
 *            'angulartics.google.analytics',
 *            'angulartics.facebook.pixel',
 *            'satellizer',
 *            'ngFileUpload',
 *            'vcRecaptcha'
 *        ]
 * @param {Function=} configFn Optional configuration function for the module.
 * @returns {angular.Module} new Abs.user module with the angular.Module api.
 **/
(function (module) {
    module.config(function ($stateProvider, $authProvider, GENERAL_CONFIG, $analyticsProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $authProvider.tokenPrefix = "";
        $authProvider.tokenName = "userToken";
        $authProvider.loginUrl = GENERAL_CONFIG.api_url + '/users/login';
        $authProvider.signupUrl = GENERAL_CONFIG.api_url + '/users/register';
        $stateProvider.state('login', {
            url: '/users/login',
            authenticate: false,
            views: {
                "main": {
                    controller: 'UserLoginController as model',
                    templateUrl: 'User/login.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('login_user', {
            url: '/users/login_user',
            authenticate: false,
            views: {
                "main": {
                    controller: 'UserRegisterController as model',
                    templateUrl: 'User/login_user.tpl.html'
                }
            }
        }).state('register', {
            url: '/users/register/:user_type',
            authenticate: false,
            views: {
                "main": {
                    controller: 'UserRegisterController as model',
                    templateUrl: 'User/register.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('activate', {
            url: '/users/:id/activate/:hash',
            views: {
                "main": {
                    controller: 'UserActivateController as model',
                    resolve: ResolveServiceData
                }
            }
        }).state('ChangePassword', {
            url: '/users/change_password',
            authenticate: true,
            views: {
                "main": {
                    controller: 'ChangePasswordController as model',
                    templateUrl: 'User/change_password.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('UserProfile', {
            url: '/users/user_profile',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserProfileController as model',
                    templateUrl: 'User/user_profile.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('UserView', {
            url: '/doctor/:username',
            authenticate: false,
            views: {
                "main": {
                    controller: 'UserController as model',
                    templateUrl: 'User/user_view.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('dashboard', {
            url: '/users/dashboard',
            authenticate: true,
            views: {
                "main": {
                    controller: 'DashboardController as model',
                    templateUrl: 'User/dashboard.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('ForgotPassword', {
            url: '/users/forgot_password',
            authenticate: false,
            views: {
                "main": {
                    controller: 'ForgotPasswordController as model',
                    templateUrl: 'User/forgot_password.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('MySpecialties', {
            url: '/user/specialties',
            authenticate: true,
            views: {
                "main": {
                    controller: 'SpecialtyController as model',
                    templateUrl: 'User/my_specialties.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('MyInsurances', {
            url: '/user/insurances',
            authenticate: true,
            views: {
                "main": {
                    controller: 'InsuranceController as model',
                    templateUrl: 'User/my_insurances.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('MyLanguages', {
            url: '/user/languages',
            authenticate: true,
            views: {
                "main": {
                    controller: 'LanguageController as model',
                    templateUrl: 'User/my_languages.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('MyCalender', {
            url: '/user/calendar',
            authenticate: true,
            views: {
                "main": {
                    controller: 'CalenderController as model',
                    templateUrl: 'User/my_calender.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        })/*.state('MyDocotors', {
            url: '/user/favorite ',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserController as model',
                    templateUrl: 'User/my_doctors.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        })*/.state('UpdateDiseases', {
            url: '/update_spectialty_diseases/:id',
            authenticate: true,
            views: {
                "main": {
                    controller: 'SpecialtyController as model',
                    templateUrl: 'User/updateDiseaseForm.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });
}(angular.module("Abs.user", [
    'ui.router',
    'angulartics',
    'angulartics.google.analytics',
    'angulartics.facebook.pixel',
    'satellizer',
    'mwl.calendar',
    'ui.bootstrap',
    'ngFileUpload',
    'vcRecaptcha',
    'mgcrea.ngStrap',
    'ngMap',
    'hm.readmore',
    'checklist-model',
    'angular-input-stars',
    'ngResource',
])));

 
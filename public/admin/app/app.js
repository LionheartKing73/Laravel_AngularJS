'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

angular.module('app', [
    'ngSanitize',
    'ngAnimate',
    'ngCookies',
    'restangular',
    'ui.router',
    'ui.bootstrap',

    // Smartadmin Angular Common Module
    'SmartAdmin',

    // App
    'app.auth',
    'app.layout',
    'app.chat',
    'app.dashboard',
    'app.calendar',
    'app.inbox',
    'app.graphs',
    'app.tables',
    'app.forms',
    'app.ui',
    'app.widgets',
    'app.maps',
    'app.appViews',
    'app.misc',
    'app.smartAdmin',
    'app.eCommerce',
    'app.settings',
    'ui.select',
    'ngSanitize',
    'slick'


])
.config(function ($provide, $httpProvider, RestangularProvider) {


    // Intercept http calls.
    $provide.factory('ErrorHttpInterceptor', function ($q) {
        var errorCounter = 0;
        function notifyError(rejection){
            console.log(rejection);
            $.bigBox({
                title: rejection.status + ' ' + rejection.statusText,
                content: rejection.data,
                color: "#C46A69",
                icon: "fa fa-warning shake animated",
                number: ++errorCounter,
                timeout: 6000
            });
        }

        return {
            // On request failure
            requestError: function (rejection) {
                // show notification
                notifyError(rejection);

                // Return the promise rejection.
                return $q.reject(rejection);
            },

            // On response failure
            responseError: function (rejection) {
                // show notification
                notifyError(rejection);
                // Return the promise rejection.
                return $q.reject(rejection);
            }
        };
    });

    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('ErrorHttpInterceptor');

    RestangularProvider.setBaseUrl(location.pathname.replace(/[^\/]+?$/, ''));

})
.constant('urls', {
    BASE_API: 'http://localhost:8990/api/'
})

.constant('genders', [{
        "name": "Male",
        "id": 1
    },
    {
        "name": "Female",
        "id": 2
    }])
.constant('APP_CONFIG', window.appConfig)

.run(function ($rootScope
    , $state, $stateParams
    , $http, $location, $cookies
    ) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    // editableOptions.theme = 'bs3';
   
    // keep user logged in after page refresh

    if (localStorage.getItem('currentUserToken')) {
        $http.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('currentUserToken');
    }else if($cookies.get('noodentCurrentUserToken')){
        localStorage.setItem('currentUserToken',$cookies.get('noodentCurrentUserToken'));
        $http.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('currentUserToken');
    }

    //redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var publicPages = ['/login'];
        var restrictedPage = publicPages.indexOf($location.path()) === -1;
        if (restrictedPage && !localStorage.getItem('currentUserToken')) {
            $location.path('/login');
        }
    });

});
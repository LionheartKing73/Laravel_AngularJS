(function () {
    'use strict';

    angular
        .module('app.auth')
        .factory('AuthenticationService', Service);

    function Service($http, $cookies) {
        var service = {};

        service.Login = Login;
        service.Logout = Logout;

        return service;

        function Login(email, password, staySignedIn, callback) {
            $http.post('/api/user/login', { email: email, password: password })
                .success(function (response) {
                    // login successful if there's a token in the response
                    if (response.token) {
                        // store username and token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUserToken',response.token);
                        localStorage.setItem('jwt',response.jwt);
                        localStorage.setItem('currentUserEmail',email);

                        if(staySignedIn)
                            $cookies.put('noodentCurrentUserToken', response.token);

                        // add jwt token to auth header for all requests made by the $http service
                        $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;

                        // execute callback with true to indicate successful login
                        callback(true);
                    } else {
                        // execute callback with false to indicate failed login
                        callback(false);
                    }
                });
        }

        function Logout() {
            // remove user from local storage and clear http auth header
            localStorage.clear();
            $http.defaults.headers.common.Authorization = '';

            if($cookies.get('noodentCurrentUserToken'))
                $cookies.remove('noodentCurrentUserToken');

        }
    }
})();
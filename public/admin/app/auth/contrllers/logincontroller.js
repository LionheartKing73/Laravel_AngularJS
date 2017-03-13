"use strict";

angular.module('app.auth').controller('LoginController', function($scope, $location, AuthenticationService) {

    $scope.login = login;
    $scope.email = '';
    $scope.password = '';
    $scope.staySignedIn = true;

    initController();

    function initController() {
        // reset login status
        AuthenticationService.Logout();
    };

    function login() {
        $scope.loading = true;
        AuthenticationService.Login($scope.email, $scope.password, $scope.staySignedIn, function (result) {
            if (result === true) {
                $location.path('/dashboard');
            } else {
                $scope.error = 'Username or password is incorrect';
                $scope.loading = false;
            }
        });
    };
});
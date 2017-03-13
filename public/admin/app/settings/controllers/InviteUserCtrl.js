'use strict';
angular.module('app.maps').controller('InviteUserCtrl',
    function ($scope, InviteUser) {


        $scope.alert = {
            type:'',
            msg:''
        };


        $scope.new_user = {
            "email":"",
            "name":"",
            "roleId":""
        };

        $scope.submitForm = function(){


            InviteUser.inviteUser($scope.new_user, function(res){
                if(res.error_message != undefined){

                    $scope.labelClasses = {
                        "name":"",
                        "email":"",
                        "roleID": ""
                    };

                    angular.forEach(res.error_message, function(item, key) {
                        $scope.labelClasses[key] = 'has-error';
                    });

                    $scope.alert.type='danger';
                    $scope.alert.msg = "Information is not correct.";

                }else if(res.description != undefined && res.description == "Success"){
                    $scope.labelClasses = {
                        "name":"",
                        "email":"",
                        "roleId": ""
                    };

                    $scope.alert.type='success';
                    $scope.alert.msg = "New doctor is saved.";

                }else{
                    $scope.alert.type='danger';
                    $scope.alert.msg = "Something went wrong.";
                }
                console.log(res);
            }, function(err){
                console.log(err);
            });

        };

        $scope.isNotValid = function(){

            if($scope.new_user.name == "")
                return true;
            if($scope.new_user.email == "")
                return true;
            if($scope.new_user.roleId == "")
                return true;

            return false;

        }



    });
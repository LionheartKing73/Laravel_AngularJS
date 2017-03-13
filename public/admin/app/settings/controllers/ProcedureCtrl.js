'use strict';
angular.module('app.maps').controller('ProcedureCtrl',
    function ($scope, Procedure) {


        $scope.procedures = [];

        Procedure.getProcedures(function(res){
            console.log(res);
            $scope.procedures = res.result;
        }, function(err){
            console.log(err);
        });


        $scope.updateProcedures = function(id){

            for(var i = 0; i < $scope.procedures.length; i++){
                if($scope.procedures[i].id = id){
                    $scope.procedures[i].active = ($scope.procedures[i].active != true)? true : false;
                }
            }
            console.log($scope.procedures, id);


        }



    });
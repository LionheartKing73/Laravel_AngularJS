'use strict';
angular.module('app.maps').controller('RoleCtrl',
    function ($scope, Role) {


        $scope.role = {
            "name":"",
            "description":"",
            "rights": {}
        };

        $scope.rights = {};

        $scope.submitForm = function(){

            //console.log($scope.clinic);
            //console.log(Object.keys(localStorage));
            //$scope.clinic.token = localStorage.getItem('currentUserToken');

            console.log("www");
            angular.forEach($scope.rights, function(value, key) {
                var values = [];
                angular.forEach(value, function(v, k) {
                    if(v == true){
                        values.push(k);
                    }
                });
                if(values.length != 0 && $scope.role.rights[key] != true){
                    $scope.role.rights[key] = values;
                }
            });


            Role.saveRole($scope.role, function(res){
                console.log(res);
            }, function(err){
                console.log(err);
            });

        };


        //For dropzone

        //$scope.dropzoneConfig = {
        //    'options': { // passed into the Dropzone constructor
        //        'url': '/api/plug'
        //    },
        //    'eventHandlers': {
        //        'sending': function (file, xhr, formData) {
        //        },
        //        'success': function (file, response) {
        //        }
        //    }
        //};
        //
        ////For google-map
        //$scope.styles = SmartMapStyle.styles;
        //
        //$scope.setType = function (key) {
        //    SmartMapStyle.getMapType(key).then(function (type) {
        //        $scope.map.control.getGMap().mapTypes.set(key, type);
        //        $scope.map.control.getGMap().setMapTypeId(key);
        //    });
        //    $scope.currentType = key;
        //};
        //
        //
        //$scope.map = {
        //    center: {latitude: 45, longitude: -73},
        //    zoom: 8,
        //    control: {}
        //};
        //
        //
        //uiGmapGoogleMapApi.then(function (maps) {
        //
        //    })
        //    .then(function () {
        //        return SmartMapStyle.getMapType('colorful')
        //    }).then(function () {
        //    $scope.setType('colorful')
        //});



    });
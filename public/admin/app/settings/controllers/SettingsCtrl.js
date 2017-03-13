'use strict';

angular.module('app.maps').controller('SettingsCtrl',
    function ($scope, $http, $q, SmartMapStyle, uiGmapGoogleMapApi) {


        $scope.clinic = {};

        $scope.submitForm = function(){

            console.log($scope.clinic);
            $scope.clinic.token = localStorage.getItem('currentUserToken');

            clinicService.saveClinic($scope.clinic, function(res){
                console.log(res);
            }, function(err){
                console.log(err);
            });

        };


        //For dropzone
        $scope.dropzoneConfig = {
            'options': { // passed into the Dropzone constructor
                'url': '/api/plug'
            },
            'eventHandlers': {
                'sending': function (file, xhr, formData) {
                },
                'success': function (file, response) {
                }
            }
        };

        //For google-map
        $scope.styles = SmartMapStyle.styles;

        $scope.setType = function (key) {
            SmartMapStyle.getMapType(key).then(function (type) {
                $scope.map.control.getGMap().mapTypes.set(key, type);
                $scope.map.control.getGMap().setMapTypeId(key);
            });
            $scope.currentType = key;
        };


        $scope.map = {
            center: {latitude: 45, longitude: -73},
            zoom: 8,
            control: {}
        };


        uiGmapGoogleMapApi.then(function (maps) {

            })
            .then(function () {
                return SmartMapStyle.getMapType('colorful')
            }).then(function () {
            $scope.setType('colorful')
        });



    });
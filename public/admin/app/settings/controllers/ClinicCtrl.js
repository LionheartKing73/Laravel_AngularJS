'use strict';

angular.module('app.maps').controller('ClinicCtrl',
    function ($scope, $http, $q, SmartMapStyle, uiGmapGoogleMapApi, Clinic) {

        $scope.alert = {
            type:'',
            msg:''
        };

        //For dropzone

        $scope.clinic = {
            "name":"",
            "webAddress":"",
            "address1": "",
            "address2": "",
            "perfecture": "",
            "postalCode": "",
            "contactName": "",
            "contactPhone": "",
            "latitude": 0,
            "longitude": 0,
            "cityId": ""
        };

        $scope.isNotValid = function(){
            if($scope.clinic.name == "")
            return true;
            if($scope.clinic.addre1 == "")
            return true;
            if($scope.clinic.perfecture == "")
            return true;
            if($scope.clinic.postalCode == "" || isNaN($scope.clinic.postalCode))
            return true;
            if($scope.clinic.contactName == "")
            return true;
            if($scope.clinic.contactPhone == "" | isNaN($scope.clinic.contactPhone))
            return true;
            if($scope.clinic.latitude == 0)
            return true;
            if($scope.clinic.longitude == 0)
            return true;
            if($scope.clinic.cityId == "")
            return true;

            return false;
        };

        $scope.labelClasses = {
            "name":"",
            "webAddress":"",
            "address1": "",
            "address2": "",
            "perfecture": "",
            "postalCode": "",
            "contactName": "",
            "contactPhone": "",
            "cityId": ""
        }

        $scope.submitForm = function(){

            Clinic.saveClinic($scope.clinic, function(res){
                if(res.error_message != undefined){

                    $scope.labelClasses = {
                        "name":"",
                        "webAddress":"",
                        "address1": "",
                        "address2": "",
                        "perfecture": "",
                        "postalCode": "",
                        "contactName": "",
                        "contactPhone": "",
                        "cityId": ""
                    }

                    angular.forEach(res.error_message, function(item, key) {
                        $scope.labelClasses[key] = 'has-error';
                    });

                    $scope.alert.type='danger';
                    $scope.alert.msg = "Information is not correct.";

                }else if(res.description != undefined && res.description == "Success"){
                    $scope.labelClasses = {
                        "name":"",
                        "webAddress":"",
                        "address1": "",
                        "address2": "",
                        "perfecture": "",
                        "postalCode": "",
                        "contactName": "",
                        "contactPhone": "",
                        "cityId": ""
                    }

                    $scope.alert.type='success';
                    $scope.alert.msg = "Clinic is saved.";

                }else{
                    $scope.alert.type='danger';
                    $scope.alert.msg = "Something went wrong.";
                }



                console.log('clinic message', res);
            }, function(err){

            });

        };

        $scope.languages = [];
        $scope.procedures = [];



        Clinic.getCities(function(res){
            $scope.cities = res.result;
            console.log("cities", $scope.cities);
        }, function(err){});


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

        //$scope.setType = function (key) {
        //    SmartMapStyle.getMapType(key).then(function (type) {
        //        $scope.map.control.getGMap().mapTypes.set(key, type);
        //        $scope.map.control.getGMap().setMapTypeId(key);
        //    });
        //    $scope.currentType = key;
        //};


        $scope.map = {
            center: {latitude: 55, longitude: -73},
            zoom: 8,
            control: {}
        };

        // geo-coding

        $scope.geoCode = function () {
            if ($scope.clinic.address1 && $scope.clinic.address1.length > 0 || $scope.clinic.address2 && $scope.clinic.address2.length > 0) {
                if (!this.geocoder) this.geocoder = new google.maps.Geocoder();
                this.geocoder.geocode({ 'address': $scope.clinic.address1+', '+$scope.clinic.address2 }, function (results, status) {
                    console.log('geo results', results);
                    if (status == google.maps.GeocoderStatus.OK) {
                         var loc = results[0].geometry.location;
                         //$scope.clinic.address1 = results[0].formatted_address;
                                $scope.map = {
                                    center: {latitude: loc.lat(), longitude: loc.lng()},
                                    zoom: 8,
                                    control: {}
                                };
                        $scope.clinic.latitude = loc.lat();
                        $scope.clinic.longitude = loc.lng();
                    } else {
                        console.log("Sorry, no results for "+$scope.clinic.address1+"," + $scope.clinic.address2+ " produced no results.");
                     }

                });
            }
        };

        //$scope.geoCode();

        //var events = {
        //    place_changed:function (searchBox) {
        //        var place = searchBox.getPlace();
        //        if (!place || place == 'undefined') {
        //            console.log('no place data :(');
        //            return;
        //        }
        //
        //        // refresh the map
        ///*        $scope.map = {
        //            center:{
        //                latitude:place.geometry.location.lat(),
        //                longitude:place.geometry.location.lng()
        //            },
        //            zoom:10
        //        };
        //*/
        //        // refresh the marker
        //        $scope.marker = {
        //            id:0,
        //            options:{ draggable:false },
        //            coords:{
        //                latitude:place.geometry.location.lat(),
        //                longitude:place.geometry.location.lng()
        //            }
        //        };
        //
        //    }
        //};

        //$scope.searchbox = {
        //    template:'searchbox.tpl.html',
        //    events:events,
        //    options:{
        //        autocomplete:true,
        //        types:['address'],
        //        componentRestrictions:{
        //            country:'fr'
        //        }
        //    }
        //};


        uiGmapGoogleMapApi.then(function (maps) {

            })
            .then(function () {
                return SmartMapStyle.getMapType('colorful')
            }).then(function () {
            $scope.setType('colorful')
        });



    });
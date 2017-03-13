'use strict';
angular.module('app.maps').controller('DoctorCtrl',
    function ($scope, $http, $q, SmartMapStyle, uiGmapGoogleMapApi, Doctor, Procedure, genders) {


        $scope.alert = {
            type:'',
            msg:''
        };

        //For dropzone

        $scope.genders = genders;

        $scope.new_doctor = {
            "name":"",
            "gender":"",
            "email":"",
            "phone": "",
            "professionalStatement": "",
            "affliations": [],
            "certificates": [],
            "awards": [],
            "language": [],
            "procedures": [],
            "educations": []
        };

        $scope.isNotValid = function(){

            if($scope.new_doctor.name == "")
                return true;
            if($scope.new_doctor.gender == "")
                return true;
            if($scope.new_doctor.email == "")
                return true;
            if($scope.new_doctor.phone == "")
                return true;
            if($scope.new_doctor.professionalStatement == "")
                return true;

            return false;

        }

        $scope.affliations = [{"val1":""}];
        $scope.certificates = [{"val1":""}];
        $scope.awards = [{"val1":""}];
        $scope.doctorsLanguages = [{"val1":0}];
        $scope.doctorsProcedures = [{"val1":""}];
        $scope.educations = [{"val1":"", "val2":""}];


        $scope.addRow = function(object){
            if(object.length < 5)
            object.push({});
        };

        $scope.removeRow = function(item, array){
            var index = array.indexOf(item);
            if (index > -1) {
                array.splice(index, 1);
            }
        }

        $scope.submitForm = function(){

            console.log($scope.new_doctor);

            $scope.new_doctor.educations = [];

            angular.forEach($scope.educations, function(item, key) {
                if(item.val1 != undefined && item.val1 != ""){
                    $scope.new_doctor.educations.push(item);
                }
            });

            $scope.new_doctor.affliations = [];

            angular.forEach($scope.affliations, function(item, key) {
                if(item.val1 != undefined && item.val1 != ""){
                    $scope.new_doctor.affliations.push(item);
                }
            });

            $scope.new_doctor.certificates = [];

            angular.forEach($scope.certificates, function(item, key) {
                if(item.val1 != undefined && item.val1 != ""){
                    $scope.new_doctor.certificates.push(item);
                }
            });

            $scope.new_doctor.awards = [];

            angular.forEach($scope.awards, function(item, key) {
                if(item.val1 != undefined && item.val1 != ""){
                    $scope.new_doctor.awards.push(item);
                }
            });

            $scope.new_doctor.language = [];

            console.log("www", $scope.doctorsLanguages);

            angular.forEach($scope.doctorsLanguages, function(item, key) {
                if(item.val1 != undefined && item.val1 != ""){
                    var new_item = angular.copy(item);
                    $scope.new_doctor.language.push(new_item);
                }
            });


            $scope.new_doctor.procedures = [];

            angular.forEach($scope.doctorsProcedures, function(item, key) {
                if(item.val1 != undefined && item.val1 != ""){
                    var new_item = angular.copy(item);
                    $scope.new_doctor.procedures.push(new_item);
                }
            });

            angular.forEach($scope.new_doctor.language, function(item, key) {
                item.val1 = ""+item.val1+"";
            });

            angular.forEach($scope.new_doctor.procedures, function(item, key) {
                item.val1 = ""+item.val1+"";
            });

            $scope.labelClasses = {
                "name":"",
                "gender":"",
                "email":"",
                "phone": "",
                "professionalStatement": ""
            };

            Doctor.saveNewDoctor($scope.new_doctor, function(res){
                if(res.error_message != undefined){

                    $scope.labelClasses = {
                        "name":"",
                        "gender":"",
                        "email":"",
                        "phone": "",
                        "professionalStatement": ""
                    };

                    angular.forEach(res.error_message, function(item, key) {
                        $scope.labelClasses[key] = 'has-error';
                    });

                    $scope.alert.type='danger';
                    $scope.alert.msg = "Information is not correct.";

                }else if(res.description != undefined && res.description == "Success"){
                    $scope.labelClasses = {
                        "name":"",
                        "gender":"",
                        "email":"",
                        "phone": "",
                        "professionalStatement": ""
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

        $scope.languages = [];
        $scope.procedures = [];

        Doctor.getLanguages(function(res){
            $scope.languages = res.result;
            console.log("languages", $scope.cities);
        }, function(err){});


        Procedure.getProcedures(function(res){
            $scope.procedures = res.result;
            console.log("procedures", $scope.procedures);
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


        //uiGmapGoogleMapApi.then(function (maps) {
        //
        //})
        //    .then(function () {
        //        return SmartMapStyle.getMapType('colorful')
        //    }).then(function () {
        //        $scope.setType('colorful')
        //    });


    });
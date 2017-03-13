(function (module) {
    module.controller('BookingController', function ($scope, $state, $filter, $auth, $rootScope, $location, Flash, SweetAlert, BookingAppointment, ConstUserType, AppointmentBookingAdd, Gender) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Booking");
            model.ConstUserType = ConstUserType;
            if (!$auth.isAuthenticated()) {
                Flash.set($filter("translate")('Login and Continue to Booking the doctor'), 'error', false);
                localStorage.bookingUrl = '/appointments/booking/' + $state.params.doctorid + '/' + $state.params.apt_date + '/' + $state.params.apt_time;
                $location.path('/users/login');
            }
            $scope.appt_time = $state.params.apt_time;
            $scope.appt_date = $state.params.apt_date;
            $scope.dobDateLimit = $filter('date')(new Date(), "yyyy-MM-dd");
        };
        model.init();
        BookingAppointment.get({doctorid: $state.params.doctorid, apt_date: $state.params.apt_date, apt_time: $state.params.apt_time}).$promise.then(function (response) {
            $scope.doctorProfile = response.doctor_profile.data;
            if ($state.current.name == 'AppointmentBooking') {
                model.diseasList = response.doctor_specialty_diseas;
                model.formFields = {
                    is_seen_before: 1
                };
            }
            if ($state.current.name == 'AppointmentBookingStep2') {
                Gender.genderList({}).$promise.then(function (genderResponse) {
                    model.genderList = genderResponse.data;
                });
                model.formValue = {
                    is_guest_appointment: 0,
                    first_name: $rootScope.auth.user_profile.first_name,
                    last_name: $rootScope.auth.user_profile.last_name,
                    postal_code: $rootScope.auth.user_profile.postal_code,
                    phone: $rootScope.auth.user_profile.phone
                };
            }
            if ($state.current.name == 'AppointmentBookingStep3') {
                model.formValue = {
                    phone: $rootScope.auth.user_profile.phone
                };
            }
            if ($state.current.name == 'AppointmentBookingStep4') {
                /* For Get all the Values and Covert to Objects */
                var step1Val = JSON.parse(window.atob(localStorage.bookingValueS1));
                var step2Val = JSON.parse(window.atob(localStorage.bookingValueS2));
                /* var step3Val = JSON.parse(window.atob(localStorage.bookingValueS3)); */
                if (step2Val.is_guest_appointment === 0) {
                    $scope.name = step2Val.first_name + ' ' + step2Val.last_name;
                    $scope.mobile = step2Val.phone;
                    $scope.email = $rootScope.auth.email;
                    $scope.dob = $rootScope.auth.user_profile.dob;
                    if (step2Val.gender_id === 1) {
                        $scope.gender = 'Male';
                    } else {
                        $scope.gender = 'Female';
                    }
                } else {
                    $scope.name = step2Val.guest_first_name + ' ' + step2Val.guest_last_name;
                    $scope.mobile = step2Val.phone;
                    $scope.email = step2Val.guest_email;
                    $scope.dob = step2Val.guest_dob;
                    if (step2Val.guest_gender_id === 1) {
                        $scope.gender = 'Male';
                    } else {
                        $scope.gender = 'Female';
                    }
                } 
                $scope.dob = ($scope.dob !== '0000-00-00')? $filter('date')(new Date($scope.dob), 'MMM dd, yyyy'):'--';
            }
        });
        model.step1 = function (isvalidate) {
            if(isvalidate){
                model.formFields.doctor_user_id = $state.params.doctorid;
                model.formFields.appointment_date = $state.params.apt_date;
                model.formFields.appointment_time = $state.params.apt_time;
                localStorage.bookingValueS1 = window.btoa(JSON.stringify(model.formFields));
                var reDirectPath = '/appointments/booking/' + $state.params.doctorid + '/' + $state.params.apt_date + '/' + $state.params.apt_time + '/step2';
                $location.path(reDirectPath);
            }
        };
        model.step2 = function (isvalidate) {
            if(isvalidate){
                /* For Add Required Fields */
                if (model.formValue.is_guest_appointment === 0) {
                    storedValues = {
                        first_name: model.formValue.first_name,
                        last_name: model.formValue.last_name,
                        gender_id: model.formValue.gender_id,
                        is_guest_appointment: model.formValue.is_guest_appointment,
                        postal_code: model.formValue.postal_code,
                        phone: model.formValue.phone,
                        notes: model.formValue.notes
                    };
                } else {
                    storedValues = {
                        guest_first_name: model.formValue.guest_first_name,
                        guest_last_name: model.formValue.guest_last_name,
                        guest_email: model.formValue.guest_email,
                        guest_gender_id: model.formValue.gender_id,
                        is_guest_appointment: model.formValue.is_guest_appointment,
                        guest_postal_code: model.formValue.postal_code,
                        guest_dob: model.formValue.guest_dob,
                        phone: model.formValue.phone,
                        notes: model.formValue.notes
                    };
                }
                localStorage.bookingValueS2 = window.btoa(JSON.stringify(storedValues));
                var reDirectPath = '/appointments/booking/' + $state.params.doctorid + '/' + $state.params.apt_date + '/' + $state.params.apt_time + '/final';
                $location.path(reDirectPath);
            }
        };
        model.step3 = function () {
            localStorage.bookingValueS3 = window.btoa(JSON.stringify(model.formValue));
            var reDirectPath = '/appointments/booking/' + $state.params.doctorid + '/' + $state.params.apt_date + '/' + $state.params.apt_time + '/final';
            $location.path(reDirectPath);
        };
        function ShowHide(shownDivModal) {
            shownDivModal = shownDivModal;
        }
        $scope.finalConfirm = function () {
            var postValue = {
                step1value: localStorage.bookingValueS1,
                step2value: localStorage.bookingValueS2
                /* step3value: localStorage.bookingValueS3 */
            };
            AppointmentBookingAdd.add(postValue).$promise.then(function (response) {
                if(response.Success) {
                    if(!localStorage.widgetUser) {
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        localStorage.removeItem('bookingValueS1');
                        localStorage.removeItem('bookingValueS2');
                        /* localStorage.removeItem('bookingValueS3'); */
                        $location.path('/appointments/all');
                    }else{
                        Flash.set($filter("translate")('Booked Successfully. Go to Main Web for Other Details'), 'success', true);
                        $rootScope.auth = {};
                        $auth.logout();
                        $location.path("/doctor/"+localStorage.widgetUser);
                    }
                }else{
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        };

        $scope.bookingCancel = function () {
            SweetAlert.swal({
                title: "Are you sure to Cancel the Booking?",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55", confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            },
            function (isConfirm) {
                if (isConfirm) {
                    localStorage.removeItem('bookingValueS1');
                    localStorage.removeItem('bookingValueS2');
                    /*localStorage.removeItem(bookingValueS3);*/
                    $location.path('/appointments/all');
                }
            });
        };
    });
}(angular.module("Abs.appointments")));

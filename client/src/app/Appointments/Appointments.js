(function (module) {
    module.controller('AppointmentsController', function ($scope, $state, $filter, $rootScope, $location, Flash, ConstUserType, ConstAppointmentStatus, SweetAlert, AppointmentFactory, appointmentView, changeStatus) {
        var model = this;
        $scope.maxSize = 5;
        var params = {};
        model.init = function () {
            model.ConstUserType = ConstUserType;
            model.ConstAppointmentStatus = ConstAppointmentStatus;
            $scope.currentPage = ($scope.currentPage !== undefined) ? parseInt($scope.currentPage) : 1;
            $state.params.type = ($state.params.type !== undefined) ? $state.params.type : 'all';
            if ($state.current.name == 'Appointments') {
                $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Appointments Details");
                $scope.getAppointmentList();
            } else if(($state.current.name == 'AppointmentDetail')) {
                $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Appointment Details");
                appointmentView.get({ id: $state.params.id }).$promise.then(function (response) {
                    $scope.todayDateTime = $filter('date')(new Date(), 'yyyy-MM-dd HH:mm');
                    $scope.appointmentDateTime = response.appointment_date + ' ' + response.appointment_time;
                    $scope.appointment = response;
                    $scope.appointment.doctor_note = (response.doctor_note === null)?'--':response.doctor_note;
                    $scope.appointment.patient_note = (response.patient_note === null)?'--':response.patient_note;
                    if ($rootScope.auth.role_id == ConstUserType.Doctor) {
                        $scope.appointmentUser = response.user;
                    } else { 
                        $scope.appointmentUser = response.user;
                        $scope.appointmentUser = response.doctor_user;
                        $scope.appointmentUser.user_profile.dr_title = ($scope.appointmentUser.user_profile.dr_title === null)?'':$scope.appointmentUser.user_profile.dr_title;
                    }
                });
            }
            $scope.changeappointstatus = function (status) {
                if (status == 'confirm') {
                    titleText = "Are you sure to Confirm this Appointment?";
                } else if (status == 'decline') {
                    titleText = "Are you sure to Decline this Appointment?";
                } else if(status == 'cancel'){
                    titleText = "Are you sure to Cancel this Appointment?";
                }
                SweetAlert.swal({
                    title: titleText,
                    text: "",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Confirm",
                    cancelButtonText: "No",
                    closeOnConfirm: true,
                    closeOnCancel: true
                },
                    function (isConfirm) {
                        if (isConfirm) {
                            changeStatus.get({ id: $state.params.id, apt_status: status }).$promise.then(function (response) {
                                Flash.set($filter("translate")(response.Success), 'success', true);
                                $location.path('/appointments/all');
                            });
                        }
                    });
            };
        };
        $scope.getAppointmentList = function () {
            param = { 'type': $state.params.type, 'page': $scope.currentPage };
            AppointmentFactory.get(param).$promise.then(function (response) {
                $scope.appointments = response.data;
                $scope._metadata = response.meta.pagination;
            });
        };
        /**
         * @ngdoc method
         * @name paginate
         * @methodOf appointments.controller:AppointmentsController
         * @description
         *
         * This method will be load pagination the pages.
         **/
        $scope.paginate = function (pageno) {
            $scope.currentPage = parseInt($scope.currentPage);
            $scope.getAppointmentList();
        };
        model.init();
    });
} (angular.module("Abs.appointments")));
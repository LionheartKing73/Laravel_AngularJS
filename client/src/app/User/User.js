(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:UserController
     * @description
     *
     * This is user controller having the methods setmMetaData, init, upload and user_profile.
     **/
    module.controller('UserController', function ($scope, $state, $rootScope, $filter, $location, $auth, Flash,$anchorScroll, ConstUserType, ConstMembershipPlan, UsersFactory, ConstSocialLogin, ProfileSearchList, AppointmentWeekList, UserReviews, UserAppointment, ReviewAdd, MyDocotors) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf user.controller:UserController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element function.
         *
         * It defines the angular elements
         **/
        model.setMetaData = function () {
            var pageTitle = $filter("translate")("User");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
         
        $scope.gotoAnchor = function(x) {
            $anchorScroll(x);
        };


        /**
         * @ngdoc method
         * @name init
         * @methodOf user.controller:UserController
         * @description
         * This method will initialze the page. It returns the page title.
         *
         **/
        model.init = function () {
            model.setMetaData();
            model.ConstSocialLogin = ConstSocialLogin;
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("User") + ":" + $state.params.username;
            $scope.maxSize = 5;
            $scope.currentPage = ($scope.currentPage !== undefined) ? parseInt($scope.currentPage) : 1;
        };
            UsersFactory.get({username: $state.params.username}).$promise.then(function (response) {
                model.user = response;
                model.user.user_profile.booking_instructions = (model.user.user_profile.booking_instructions === null)?$filter("translate")("No any booking instructions"):model.user.user_profile.booking_instructions;
                $scope.timeRating = parseInt(model.user.timing_avg_rating/model.user.timing_rating_count);
                $scope.bedRating = parseInt(model.user.bedside_avg_rating/model.user.bedside_rating_count);
                $scope.overAllRating = model.user.overall_avg_rating;
                $scope.practice = (response.user_profile.practice_name !=='null')?' | '+$filter("translate")("Practice by:")+response.user_profile.practice_name:'';
                model.user.user_profile.about_me = (response.user_profile.about_me !=='null')?response.user_profile.about_me:'';
                /* For Show More Concept */
                $scope.loadMore = function() {
                    /* for appointment enable */
                    appointmetHide = angular.element(document.getElementsByClassName('showmore'));
                    if(appointmetHide.hasClass('hide')){
                        appointmetHide.removeClass('hide');
                        appointmetHide.addClass('show');
                    }
                    /* For show less more button */
                    moreShow = angular.element(document.getElementsByClassName('showmore_btn'));
                    if(moreShow.hasClass('show')){
                        moreShow.removeClass('show');
                        moreShow.addClass('hide');
                    }
                    lessShow = angular.element(document.getElementsByClassName('showless_btn'));
                    if(lessShow.hasClass('hide')) {
                        lessShow.addClass('show');
                        lessShow.removeClass('hide');
                    }
                };

                $scope.showLess = function(){
                    /* for appointment enable */
                    appointmetHide = angular.element(document.getElementsByClassName('showmore'));
                    if(appointmetHide.hasClass('show')){
                        appointmetHide.removeClass('show');
                        appointmetHide.addClass('hide');
                    }
                    /* For show less more button */
                    moreShow = angular.element(document.getElementsByClassName('showmore_btn'));
                    if(moreShow.hasClass('hide')){
                        moreShow.removeClass('hide');
                        moreShow.addClass('show');
                    }
                    lessShow = angular.element(document.getElementsByClassName('showless_btn'));
                    if(lessShow.hasClass('show')) {
                        lessShow.addClass('hide');
                        lessShow.removeClass('show');
                    }
                };

                $scope.userId = model.user.id;
                $scope.ViewSlot = 1;
                ProfileSearchList.get({viewslot: $scope.ViewSlot, userids: $scope.userId}).$promise.then(function (searchResponse) {
                    $scope.searchLists = searchResponse.user_profiles[0];
                    $scope.ViewSlot = searchResponse.viewslot;
                    $scope.appointmentLoadMore = searchResponse.userLoadMore;
                });
                model.ConstUserType = ConstUserType;
                model.ConstMembershipPlan = ConstMembershipPlan;
                if ($rootScope.settings['site.enabled_plugins'].indexOf('UserReviews') > -1) {
                    /* For get all reviews */
                    $scope.getReviewsList();
                    /* For check the Auth User is a Patient & if Auth User is a patient is alreay added a reivew or Not */
                    if ($auth.isAuthenticated()) {
                        if ($rootScope.auth.role_id === ConstUserType.User) {
                            /* For Check the auth user is vist the doctor at once */
                            UserAppointment.get({
                                doctor_id: $scope.userId,
                                user_id: $rootScope.auth.id
                            }).$promise.then(function (Appointmentresponse) {
                                $scope.isAlreadyVisted = Appointmentresponse.data.is_visited;
                                if ($scope.isAlreadyVisted === true) {
                                    $scope.isvisited = true;
                                    UserReviews.get({
                                        doctor_id: $scope.userId,
                                        user_id: $rootScope.auth.id
                                    }).$promise.then(function (reviewResponse) {
                                        $scope.authUserAddedReview = reviewResponse.data;
                                        $scope.userReviewData = reviewResponse.status;
                                        if ($scope.userReviewData === true) {
                                            /* for template side block regard */
                                            $scope.reviewEnable = false;
                                            $scope.alreadyadded = true;
                                        } else {
                                            /* for template side block regard */
                                            $scope.reviewEnable = true;
                                            $scope.alreadyadded = false;
                                        }
                                    });
                                } else {
                                    $scope.reviewEnable = false;
                                    $scope.isvisited = false;
                                }
                            });
                        } else {
                            $scope.reviewEnable = false;
                            /* for template side block reg */
                        }
                    }
                }
            });
            $scope.dateAddFunction = function (days, multipleCount) {
                if (parseInt(multipleCount) > 1) {
                    $scope.addDays = (parseInt(multipleCount) - 1) * 7 + parseInt(days);
                } else {
                    $scope.addDays = parseInt(days);
                }
                if ((parseInt(days) === '0') && (parseInt(multipleCount) === '1')) {
                    dateValue = {
                        day: $filter('date')(new Date(), "EEE"),
                        date: $filter('date')(new Date(), "dd-MMM"),
						year: $filter('date')(new Date(), "yyyy"),
                    };
                    return dateValue;
                } else if ((parseInt(days) === '0') && (parseInt(multipleCount) > 1)) {
                    days = (parseInt(multipleCount) - 1) * 7;
                    dateValue = {
                        day: $filter('date')(addDays(new Date(), days), "EEE"),
                        date: $filter('date')(addDays(new Date(), days), "dd-MMM"),
						year: $filter('date')(addDays(new Date(), days), "yyyy"),
                    };
                    return dateValue;
                } else {
                    dateValue = {
                        day: $filter('date')(addDays(new Date(), $scope.addDays), "EEE"),
                        date: $filter('date')(addDays(new Date(), $scope.addDays), "dd-MMM"),
						year: $filter('date')(addDays(new Date(), $scope.addDays), "yyyy"),
                    };
                    return dateValue;
                }
            };
            daysAdd();
        model.init();
        function addDays(theDate, days) {
            return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
        }
        $scope.nextWeek = function () {
            $scope.ViewSlot = parseInt($scope.ViewSlot) + 1;
            AppointmentWeekList.get({viewslot: $scope.ViewSlot, userids: $scope.userId}).$promise.then(function (searchResponse) {
                $scope.searchLists = searchResponse.user_profiles[0];
                $scope.ViewSlot = searchResponse.viewslot;
            });
            daysAdd();
        };
        $scope.prevWeek = function () {
            if ($scope.ViewSlot == '1') {
                $scope.ViewSlot = 1;
            } else {
                $scope.ViewSlot = parseInt($scope.ViewSlot) - 1;
            }
            AppointmentWeekList.get({viewslot: $scope.ViewSlot, userids: $scope.userId}).$promise.then(function (searchResponse) {
                $scope.searchLists = searchResponse.user_profiles[0];
                $scope.ViewSlot = searchResponse.viewslot;
            });
            daysAdd();
        };
        function daysAdd(){
            $scope.today = $scope.dateAddFunction(0, $scope.ViewSlot);
            $scope.day2 = $scope.dateAddFunction(1, $scope.ViewSlot);
            $scope.day3 = $scope.dateAddFunction(2, $scope.ViewSlot);
            $scope.day4 = $scope.dateAddFunction(3, $scope.ViewSlot);
            $scope.day5 = $scope.dateAddFunction(4, $scope.ViewSlot);
            $scope.day6 = $scope.dateAddFunction(5, $scope.ViewSlot);
            $scope.day7 = $scope.dateAddFunction(6, $scope.ViewSlot);
        }
       
        model.isAuthenticated = function () {
            return $auth.isAuthenticated();
        };
        $scope.getReviewsList = function () {
            param = { 'doctor_id': $scope.userId, 'page': $scope.currentPage };
            UserReviews.get(param).$promise.then(function (response) {
                $scope.doctorReviews = response.data;
                $scope._metadata = response.meta.pagination;
                $scope.metadata = response.meta.pagination;
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
        $scope.paginate = function () {
            $scope.currentPage = parseInt($scope.currentPage);
            $scope.getReviewsList();
        };
    });
}(angular.module("Abs.user")));

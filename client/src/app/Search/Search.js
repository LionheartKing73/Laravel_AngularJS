/*
 * @author  :    mugundhan_352at15
 * @created :    19th April 2016
 * @time    :    03.00 PM
 */
(function (module) {
    module.controller('SearchController', function ($location, $scope, $window, $rootScope, $filter, $state, Languages, Cities, Specialties, SpecialtyDiseas, Gender, Insurances, SearchList, WeekList) {
        var model = this;

        model.setMetaData = function () {
            var pageTitle = $filter("translate")("Doctor Search");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        model.init = function () {
            model.pageRedirect = pageRedirect;
        };

        model.refinesearch = function () {
            var searchCredentials = {
                specialty_id: !isNaN(model.specialty_id)?model.specialty_id:undefined,
                city_id: !isNaN(model.city_id)?model.city_id:undefined,
                specialty_disease_id: !isNaN(model.specialty_disease_id)?model.specialty_disease_id:undefined,
                doctor: model.doctor,
                language_id: !isNaN(model.language_id)?model.language_id:undefined,
                gender_id: !isNaN(model.gender_id)?model.gender_id:undefined,
                insurance_id: !isNaN(model.insurance_id)?model.insurance_id:undefined
            };
            $location.path('search').search(searchCredentials);
        };
        function dateAdd(){
            $scope.today = $scope.dateAddFunction(0, $scope.ViewSlot);
            $scope.day2 = $scope.dateAddFunction(1, $scope.ViewSlot);
            $scope.day3 = $scope.dateAddFunction(2, $scope.ViewSlot);
            $scope.day4 = $scope.dateAddFunction(3, $scope.ViewSlot);
            $scope.day5 = $scope.dateAddFunction(4, $scope.ViewSlot);
            $scope.day6 = $scope.dateAddFunction(5, $scope.ViewSlot);
            $scope.day7 = $scope.dateAddFunction(6, $scope.ViewSlot);
        }
        $scope.init = function () {
            /* for loadmore function */
            $scope.loadMore = function(userId) {
                userAppointmentClass = 'showmore_'+userId;
                /* for appointment enable */
                appointmetHide = angular.element(document.getElementsByClassName(userAppointmentClass));
                if(appointmetHide.hasClass('hide')){
                    appointmetHide.removeClass('hide');
                    appointmetHide.addClass('show');
                }
                /* For show less more button */
                showMoreClass = 'showmore_btn_'+userId;
                showLessClass = 'showless_btn_'+userId;
                moreShow = angular.element(document.getElementsByClassName(showMoreClass));
                if(moreShow.hasClass('show')){
                    moreShow.removeClass('show');
                    moreShow.addClass('hide');
                }
                lessShow = angular.element(document.getElementsByClassName(showLessClass));
                if(lessShow.hasClass('hide')) {
                    lessShow.addClass('show');
                    lessShow.removeClass('hide');
                }
            };

            $scope.showLess = function(userId){
                userAppointmentClass = 'showmore_'+userId;
                /* for appointment enable */
                appointmetHide = angular.element(document.getElementsByClassName(userAppointmentClass));
                if(appointmetHide.hasClass('show')){
                    appointmetHide.removeClass('show');
                    appointmetHide.addClass('hide');
                }
                /* For show less more button */
                showMoreClass = 'showmore_btn_'+userId;
                showLessClass = 'showless_btn_'+userId;
                moreShow = angular.element(document.getElementsByClassName(showMoreClass));
                if(moreShow.hasClass('hide')){
                    moreShow.removeClass('hide');
                    moreShow.addClass('show');
                }
                lessShow = angular.element(document.getElementsByClassName(showLessClass));
                if(lessShow.hasClass('show')) {
                    lessShow.addClass('hide');
                    lessShow.removeClass('show');
                }
            };

            $scope.dateAddFunction = function(days, multipleCount){
            $scope.positions = [];
           /* $scope.dateAddFunction = function (days, multipleCount) {*/
                if (parseInt(multipleCount) > 1) {
                    $scope.addDays = (parseInt(multipleCount) - 1) * 7 + parseInt(days);
                } else {
                    $scope.addDays = parseInt(days);
                }
                if ((parseInt(days) === '0') && (parseInt(multipleCount) === '1')) {
                    dateValue = {
                        day: $filter('date')(new Date(), "EEE"),
                        date: $filter('date')(new Date(), "dd-MMM-yyyy"),
                    };
                    return dateValue;
                } else if ((parseInt(days) === '0') && (parseInt(multipleCount) > 1)) {
                    days = (parseInt(multipleCount) - 1) * 7;
                    dateValue = {
                        day: $filter('date')(addDays(new Date(), days), "EEE"),
                        date: $filter('date')(addDays(new Date(), days), "dd-MMM-yyyy"),
                    };
                    return dateValue;
                } else {
                    dateValue = {
                        day: $filter('date')(addDays(new Date(), $scope.addDays), "EEE"),
                        date: $filter('date')(addDays(new Date(), $scope.addDays), "dd-MMM-yyyy"),
                    };
                    return dateValue;
                }
            };
           dateAdd();
        };
        SearchList.searchList({
            is_online_booking: localStorage.ischeckboxchecked,
            city_id: $location.search().city_id,
            gender_id:$location.search().gender_id,
            specialty_disease_id:$location.search().specialty_disease_id,
            language_id:$location.search().language_id,
            insurance_id:$location.search().insurance_id,
            specialty_id:$location.search().specialty_id,
            page: $location.search().page,
            doctor: $location.search().doctor
        }).$promise.then(function (searchResponse) {
            $scope.searchLists = searchResponse.user_profiles[0];
            if($scope.searchLists !== undefined){
                var searchListsLength = Object.keys($scope.searchLists);
                $scope.searchRecordShow = (searchListsLength.length > 0)?true:false;
                $scope.PaginateValues = searchResponse.paginate_values;
                $scope.userIds = searchResponse.weekids;
                $scope.ViewSlot = searchResponse.viewslot;
                $scope.appointmentLoadMore = searchResponse.userLoadMore;
            }else{
                $scope.searchRecordShow = false;
            }
            Languages.languageList({
            }).$promise.then(function (response) {
                $scope.languagesLists = response.data;
            });
            Cities.citiesliList({
            }).$promise.then(function (cityResponse) {
                $scope.citiesliLists = cityResponse.data;
            });
            Specialties.specialtyliList({
            }).$promise.then(function (specialtyResponse) {
                $scope.specialtyliLists = specialtyResponse.specialties;
            });
            SpecialtyDiseas.specialtyDiseasliList({
            }).$promise.then(function (specialtyDiseasResponse) {
                $scope.specialtyDiseasliLists = specialtyDiseasResponse.data;
            });
            Gender.genderList({
            }).$promise.then(function (genderResponse) {
                $scope.genderLists = genderResponse.data;
            });
            Insurances.get().$promise.then(function (response) {
                $scope.insurances = response.insurance_companies;
            });
            
            /* for form fields filling selected values*/
            model.specialty_id = parseInt($location.search().specialty_id);
            model.insurance_id = $location.search().insurance_id;
            model.city_id = $location.search().city_id;
            model.specialty_disease_id = $location.search().specialty_disease_id;
            model.language_id = $location.search().language_id;
            model.gender_id = $location.search().gender_id;
            model.doctor = $location.search().doctor;

            /* for paginate dynamic link */
            currentUrl = $location.absUrl();
            paginateUrlSplited = currentUrl.split('#/');
            /* find the string page for remove the page string */
            if(paginateUrlSplited[1].indexOf('&page=') > 0 || paginateUrlSplited[1].indexOf('?page=') > 0){
                if(paginateUrlSplited[1].indexOf('&page=') > 0 ){
                    removePage = paginateUrlSplited[1].split('&page=');
                    $scope.paginateUrl = '#/'+removePage[0];
                }else{
                    removePage = paginateUrlSplited[1].split('?page=');
                    $scope.paginateUrl = '#/'+removePage[0]+'?';
                }
            }else{
                questRemove = paginateUrlSplited[1].split('?');
                if(questRemove.length > 1){
                    $scope.paginateUrl = '#/'+paginateUrlSplited[1];
                }
                else{
                    $scope.paginateUrl = '#/'+paginateUrlSplited[1]+'?';   
                }
            }

            if($scope.searchLists !== undefined){
                angular.forEach($scope.searchLists, function (value, key) {
					var addrfind2 = '';
					if(value.data.city.data.name !== undefined) {
						addrfind2 = value.data.postal_code +' '+ value.data.city.data.name +', '+ value.data.country.data.name;
					} 
                    $scope.positions.push({
                        id: key,
                        username:value.data.User.data.username,
                        doctor_name:value.data.first_name+' '+value.data.last_name,
                        avatar: value.data.User.data.attachmentable.data.thumb.medium,
                        address1:value.data.address,
                        address2:addrfind2,
                        rating: value.starRating,
                        lat: value.data.latitude,
                        lon: value.data.longitude
                    });
                });
            }  
                $scope.mappositions = $scope.positions;
        });
        function addDays(theDate, days) {
            return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
        }
        $scope.init();
        model.pageRedirect = function (linkvalue) {
            var fulUrl = $location.absUrl();
            var splitUrl = fulUrl.split('?');
            window.location.href = splitUrl[0] + "?" + linkvalue;
        };
        $scope.nextWeek = function () {
            statusBarShow();
            $scope.ViewSlot = parseInt($scope.ViewSlot) + 1;
            WeekList.get({viewslot: $scope.ViewSlot, userids: $scope.userIds}).$promise.then(function (searchResponse) {
                $scope.searchLists = searchResponse.user_profiles[0];
                $scope.ViewSlot = searchResponse.viewslot;
                statusBarHide();
            });
            dateAdd();
        };
        $scope.prevWeek = function () {
           statusBarShow();
            if ($scope.ViewSlot == '1') {
                $scope.ViewSlot = 1;
            } else {
                $scope.ViewSlot = parseInt($scope.ViewSlot) - 1;
            }
            WeekList.get({viewslot: $scope.ViewSlot, userids: $scope.userIds}).$promise.then(function (searchResponse) {
                $scope.searchLists = searchResponse.user_profiles[0];
                $scope.ViewSlot = searchResponse.viewslot;
                statusBarHide();
            });
           dateAdd();
        };

        $scope.showDetail = function (e, doctorInfo) {
            $scope.doctorInfo = doctorInfo;
            $scope.map.showInfoWindow('doctor-info', doctorInfo.id);
        };

        function statusBarShow(){
            $('#search-loading-div').attr('style','display:block');
            $('#loading').attr('style','display:block');
            $('#search-result-div').attr('style','display:none');
        }
        function statusBarHide(){
            $('#search-loading-div').attr('style','display:none');
            $('#loading').attr('style','display:none');
            $('#search-result-div').attr('style','display:block');
        }

    });
    /* For select when search */
    module.directive('convertToNumber', function() {
        return {
          require: 'ngModel',
          link: function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(val) {
              return val ? parseInt(val, 10) : null;
            });
            ngModel.$formatters.push(function(val) {
              return val ? '' + val : '';
            });
          }
        };
    });
}(angular.module("Abs.search")));

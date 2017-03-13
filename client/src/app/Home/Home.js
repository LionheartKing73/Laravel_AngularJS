(function (module) {
    /**
     * @ngdoc controller
     * @name home.controller:HomeController
     * @description
     *
     * This is Home Controller having the methods init(), setMetaData() and it defines the index page.
     **/
    module.controller('HomeController', function ($filter, $rootScope, $location, $scope, Cities, Specialties, SpecialtyDiseas, Insurances, BestRated) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf home.controller:HomeController
         * @description
         *
         * This method will set the meta data dynamically by using the method angular.element.
         **/
        model.setMetaData = function () {
            var pageTitle = $filter("translate")("Home");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        /**
         * @ngdoc method
         * @name init
         * @methodOf home.controller:HomeController
         * @description
         * This method will initialze the page and meta data.
         *
         **/
        model.init = function () {
            model.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Home");
        };
        model.init();
        model.citiesView = citiesView;
        model.specialtyView = specialtyView;
        model.specialtyDiseasView = specialtyDiseasView;
        model.form_specialties = null;
        model.form_city = null;
        model.form_insurances = null;

        model.homesearch = function () {
            if (model.form_specialties || model.form_city || model.form_insurances) {
                $location.path('/search').search({
                    is_online_booking: localStorage.ischeckboxchecked,
                    specialty_id: model.form_specialties,
                    city_id: model.form_city,
                    insurance_id: model.form_insurances
                });
            } else {
                $location.path('/search').search({
                    is_online_booking: localStorage.ischeckboxchecked,
                    specialty_id: 1,
                });
            }
        };

        /* To get language list in homepage */
        Cities.citiesliList().$promise.then(function (cityResponse) {
            $scope.citiesliLists = cityResponse.data;
        });
        Specialties.specialtyliList().$promise.then(function (specialtyResponse) {
            $scope.specialtyliLists = specialtyResponse.specialties;
        });
        SpecialtyDiseas.specialtyDiseasliList().$promise.then(function (specialtyDiseasResponse) {
            $scope.specialtyDiseasliLists = specialtyDiseasResponse.data;
        });
        Insurances.get().$promise.then(function (response) {
            $scope.insurances = response.insurance_companies;
        });
        BestRated.get().$promise.then(function (response) {
            $scope.bestRatedDoctors = response.data;
        });
        function citiesView(cityId) {
            $location.path('/search').search({
                is_online_booking: localStorage.ischeckboxchecked,
                city_id: cityId
            });
        }
        function specialtyDiseasView(splDisId) {
            $location.path('/search').search({
                is_online_booking: localStorage.ischeckboxchecked,
                specialty_disease_id: splDisId
            });
        }
        function specialtyView(splId) {
            $location.path('/search').search({
                is_online_booking: localStorage.ischeckboxchecked,
                specialty_id: splId
            });
        }
        /* For Checkbox Customization */
        if (localStorage.ischeckboxchecked === undefined) {
            localStorage.ischeckboxchecked = true;
        }
        model.ischeckboxchecked = localStorage.ischeckboxchecked;
        $scope.checkboxcheck = function () {
            if (model.ischeckboxchecked === true) {
                localStorage.ischeckboxchecked = true;
            } else {
                localStorage.ischeckboxchecked = false;
            }
        };
        model.pageRedirect = function(redirectLink){
            console.log(redirectLink);
             $location.path('/search').search(redirectLink);
        };
    });
}(angular.module("Abs.home")));
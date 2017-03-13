(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:InsuranceController
     * @description
     *
     * This is dashboard controller. It contains all the details about the user. It fetches the data of the user by using AuthFactory.
     **/
    module.controller('InsuranceController', function ($scope, $filter, $rootScope, $state, Flash, MyInsurances) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Insurances");
            MyInsurances.get({
            }).$promise.then(function (response) {
                $scope.insurances = response.insurances;
                var ids = response.user_insurance_id.split(',');
                for(var i=0; i<ids.length; i++) { ids[i] = parseInt(ids[i], 10); } 
                $scope.user = {
                    insurance_ids:  ids
                };
            });
        };
        model.init();
        $scope.check = function (value, checked) {
            var idx = $scope.user.insurance_ids.indexOf(value);
            if (idx >= 0 && !checked) {
                $scope.user.insurance_ids.splice(idx, 1);
            }
            if (idx < 0 && checked) {
                $scope.user.insurance_ids.push(value);
            }
        };
        model.myInsurance = function () {
            $scope.insurances = {
                insurance: $scope.user.insurance_ids
            };
            MyInsurances.update($scope.insurances)
                    .$promise
                    .then(function (response) {
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $state.reload('MyInsurances');
                    });
        };
    });

}(angular.module("Abs.user")));
(function (module) {
    module.factory('Home', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/languages', {
        }, {
            'get': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Cities', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/cities', {
        }, {
            'get': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Specialties', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/specialties', {
        }, {
            'get': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('SpecialtyDiseas', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/specialty_diseases', {
        }, {
            'get': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Insurances', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/insurances', {
        }, {
            'get': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('BestRated', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/users', {
        }, {
            'get': {
                method: 'GET'
            }
        }
        );
    });
})(angular.module("Abs.home"));
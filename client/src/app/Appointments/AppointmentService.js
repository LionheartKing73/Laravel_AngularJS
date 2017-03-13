(function(module) {
    module.factory('AppointmentFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/:type', {
             type: '@type'
        }, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('appointmentView', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointment/:id', {
                id: '@id'
            }
        );
    });
    module.factory('appointmentSetting', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/settings', {}, {
            update: {
                method: 'POST'
            },
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('appointmentModification', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/modifications', {}, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('appointmentModificationDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/modifications/delete/:id', {id:'@id'}, {
            delete: {
                method: 'delete'
            }
        });
    });
    module.factory('appointmentModificationAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/modifications/add', {}, {
            add: {
                method: 'POST'
            }
        });
    });
    module.factory('appointmentModificationEdit', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/modifications/edit/:id', { id: '@id' }, 
        {
            get: {
                method: 'GET'
            },
            update:{
                method: 'POST'
            }
        });
    });
    module.factory('BookingAppointment', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/booking/:doctorid/:apt_date/:apt_time', 
        {
            doctorid:'@doctorid', apt_date:'@apt_date', apt_time:'@apt_time'
        }, 
        {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('Gender', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/genders', {
        }, {
            'genderList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('AppointmentBookingAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/booking/add', {}, {
            add: {
                method: 'POST'
            }
        });
    });
    module.factory('changeStatus', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointment/:id/:apt_status', {
                id:'@id',
                apt_status:'@apt_status'
            }, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('splitedTimeSlot', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/search/timeslot', {}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('MyDocotors', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/favorite', {}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
})(angular.module("Abs.appointments"));

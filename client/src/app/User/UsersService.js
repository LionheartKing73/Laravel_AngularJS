(function (module) {
    /**
     * @ngdoc service
     * @name user.AuthFactory
     * @description
     * Authfactory is a factory service which is used to authenticate the user
     * @param {string} AuthFactory The name of the factory
     * @param {function()} function It uses get method, and defines the url
     */
    module.factory('AuthFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/users/auth', {}, {
            fetch: {
                method: 'GET'
            }
        });
    });
    /**
     * @ngdoc service
     * @name user.UserProfilesFactory
     * @description
     * UserProfilesFactory is a factory service which updates and displays the user profile.
     * @param {string} UserProfilesFactory The name of the factory
     * @param {function()} function It uses get method for get the user profile, uses post method for update the user
     profile and defines the url
     */
    module.factory('UserProfilesFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user_profiles', {}, {
            update: {
                method: 'POST'
            },
            get: {
                method: 'GET'
            }
        });
    });
    /**
     * @ngdoc service
     * @name user.UsersFactory
     * @description
     * UsersFactory is a factory servce which is used to get the users list.
     * @param {string} UsersFactory The name of the factory
     * @param {function()} function It uses get method, and defines the url
     */

   /* module.factory('UsersFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user', {}, {
            get: {
                method: 'GET'
            }
        });
    });*/
    /**
     * @ngdoc service
     * @name user.UsersFactory
     * @description
     * UsersFactory is a factory servce which is used to get the users list.
     * @param {string} UsersFactory The name of the factory
     * @param {function()} function It uses get method, and defines the url
     */
    module.factory('UsersFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/doctor/:username', {
             username: '@username'
        }, {
            get: {
                method: 'GET'
            }
        });
    });
    /**
     * @ngdoc service
     * @name user.UserActivateFactory
     * @description
     * UserActivateFactory is a factory service which is used for activating the user.
     * @param {string} UserActivateFactory The name of the factory
     * @param {function()} function It uses get method, and defines the url
     */

    module.factory('UserActivateFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/users/:id/activate/:hash', {
                id: '@id',
                hash: '@hash'
            }, {
                'activate': {
                    method: 'PUT'
                }
            }
        );
    });
    /**
     * @ngdoc service
     * @name user.ForgotPasswordFactory
     * @description
     * ForgotPasswordFactory is a factory service which will be used in resetting the password if the user forgot his password.
     * @param {string} ForgotPasswordFactory The name of the factory
     * @param {function()} function It uses get method, and defines the url
     */

    module.factory('ForgotPasswordFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/users/forgot_password', {}, {
            forgot_password: {
                method: 'PUT'
            }
        });
    });

    /**
     * @ngdoc service
     * @name user.ChangePWd
     * @description
     * ChangePWd is a factory service which is used to change password.
     * @param {string} ChangePWd The name of the factory
     * @param {function()} function It uses put method, and defines the url
     */

    module.factory('ChangePWd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/users/:id/change_password', {
                id: '@id'
            }, {
                'put': {
                    method: 'PUT'
                }
            }
        );
    });
     
    /**
     * @ngdoc service
     * @name user.UserAttachmentFactory
     * @description
     * UserAttachmentFactory is a factory service which is used for getting user upload image detail.
     * @param {string} UserAttachmentFactory The name of the factory
     * @param {function()} function It uses get method, and defines the url
     */

    module.factory('UserAttachmentFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/users/:id/attachment', {
                id: '@id'
            }, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
	module.factory('Specialties', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/specialties', {
        }, {
            'specialtyliList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Genders', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/genders', {
        }, {
            'genderList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Language', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/languages', {
        }, {
            'languageList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('City', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/cities', {
        }, {
            'cityList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('States', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/states', {
        }, {
            'stateList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Country', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/countries', {
        }, {
            'countryList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Specialties', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/specialties', {
        }, {
            'specialtyliList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('MySpecialties', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/specialties', {}, {
            update: {
                method: 'PUT'
            },
            get: {
                method: 'GET'
            }
        });
    });
     module.factory('MyInsurances', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/insurances', {}, {
            update: {
                method: 'PUT'
            },
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('MyLanguages', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/languages', {}, {
            update: {
                method: 'PUT'
            },
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('ProfileSearchList', function ($resource, GENERAL_CONFIG) {
       return $resource(GENERAL_CONFIG.api_url + '/search/getdoctorweeklist/:userids/:viewslot', {
            userids:'@userids',
            viewslot:'@viewslot'
        }, {
            get: {
                method: 'GET'
            }
        }
        );
    });
    module.factory('AppointmentWeekList', function ($resource, GENERAL_CONFIG) {
       return $resource(GENERAL_CONFIG.api_url + '/search/getdoctorweeklist/:userids/:viewslot', {
            userids:'@userids',
            viewslot:'@viewslot'
        }, {
            get: {
                method: 'GET'
            }
        }
        );
    });
    module.factory('calenderEvents', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/calender/events/:month', {
                param1:'@param1',
            }, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('UserReviews', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/reviews/:doctor_id/:user_id', {
                doctor_id:'@doctor_id',
                user_id:'@user_id',
            }, {
                get: {
                    method: 'GET'
                },
                add:{
                    method: 'POST',
                }
            }
        );
    });
    module.factory('UserAppointment', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/bookings/:doctor_id/:user_id', {
                doctor_id:'@doctor_id',
                user_id:'@user_id',
            }, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('ReviewAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/reviews/add', {}, {
                add: {
                    method: 'POST'
                }
            }
        );
    });


    /*module.factory('MyDocotors', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorites', {}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('FavoriteAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorite/add', {}, {
                post: {
                    method: 'POST'
                }
            }
        );
    });
    module.factory('FavoriteDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorite/delete/:id', {id:'@id'}, {
                delete: {
                    method: 'delete'
                }
            }
        );
    });*/
})(angular.module("Abs.user"));

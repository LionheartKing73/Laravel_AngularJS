(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:UserRegisterController
     * @description
     *
     * This is user register controller having the methods setmMetaData, init, and signup. It controls the register functionalities.
     **/
    module.controller('UserRegisterController', function ($auth, $state, Flash, $rootScope, $filter, AuthFactory, $location, vcRecaptchaService, Genders, Specialties, Language) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf user.controller:UserRegisterController
         * @description
         *
         * This method will set the meta data dynamically by using angular.element function
         **/
        model.setMetaData = function () {
            var pageTitle = $filter("translate")("Register");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        /**
         * @ngdoc method
         * @name init
         * @methodOf user.controller:UserRegisterController
         * @description
         * This method will initialze the page. It uses setMetaData() and captcha_site_key.
         *
         **/
        model.init = function () {
            model.setMetaData();
            model.captcha_site_key = $rootScope.settings['captcha.site_key'];
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Register");
        };
        model.init();
        model.user_type = $state.params.user_type;
        if (model.user_type == 'doctor') {
            Specialties.specialtyliList({
            }).$promise.then(function (response) {
                $rootScope.specialtyliLists = response.specialties;
            });
            Language.languageList({
            }).$promise.then(function (response) {
                $rootScope.languageLists = response.data;
            });
        }
        Genders.genderList({
        }).$promise.then(function (genderResponse) {
            $rootScope.genderLists = genderResponse.data;
        });
        /**
         * @ngdoc method
         * @name signup
         * @methodOf user.controller:UserRegisterController
         * @description
         * This method will validate the credentials and signup the user.
         *
         * @param {Boolean} isvalid Boolean flag to indicate whether the function call is valid or not
         **/
        model.signup = function (isvalid) {
            model.captchaErr = '';
            if (vcRecaptchaService.getResponse() === "") { //if string is empty
                model.captchaErr = $filter("translate")("Please resolve the captcha and submit");
            }
            if (isvalid && model.password == model.confirm_password) {
                var credentials = {
                    first_name: model.first_name,
                    last_name: model.last_name,
                    username: model.username,
                    email: model.email,
                    password: model.password,
                    confirm_password: model.confirm_password,
                    phone: model.phone,
                    gender_id: model.gender_id,
                    specialty_id: model.specialty_id,
                    postal_code: model.postal_code,
                    is_agree_terms_conditions: model.terms_conditions,
                    'g-recaptcha-response': vcRecaptchaService.getResponse()
                };
                /**
                 * @ngdoc service
                 * @name user.signup
                 * @kind function
                 * @description
                 * The auth service get the credentials from the user and validate it.
                 * @params {string} credentials login credentials provided by the user
                 **/
                $auth.signup(credentials).then(function (response) {
                    if (response.data.token) {
                        $auth.setToken(response.data.token);
                        AuthFactory.fetch().$promise.then(function (user) {
                            localStorage.auth = user;
                            $state.go('MyCalender');
                        });
                    } else {
                        $state.go('login');
                    }
                    Flash.set($filter("translate")(response.data.Success), 'success', true);

                }).catch(function (error) {
                    model.emailErr = '';
                    model.nameErr = '';
                    model.passwordErr = '';
                    model.confirmPasswordErr = '';
                    var errorResponse = error.data.errors;
                    if (errorResponse.email) {
                        model.emailErr = $filter("translate")(errorResponse.email[0]);
                    }
                    if (errorResponse.username) {
                        model.nameErr = $filter("translate")(errorResponse.username[0]);
                    }
                    if (errorResponse.password) {
                        model.passwordErr = $filter("translate")(errorResponse.password[0]);
                    }
                    if (errorResponse.confirm_password) {
                        model.confirmPasswordErr = $filter("translate")(errorResponse.confirm_password[0]);
                    }
                    Flash.set($filter("translate")(error.data.message), 'error', false);
                });
            }
        };
    });

}(angular.module("Abs.user")));
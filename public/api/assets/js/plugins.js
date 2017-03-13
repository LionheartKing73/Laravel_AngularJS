(function(module) {
    module.config(function($stateProvider, $analyticsProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function(ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('QuestionList', {
            url: '/questions',
            authenticate: true,
            views: {
                "main": {
                    controller: 'QuestionsController as model',
                    templateUrl: 'Plugins/QuestionAnswer/questions_list.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {
                pageTitle: 'Questions List'
            }
        }).state('AnswersList', {
            url: '/answers',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AnswersController as model',
                    templateUrl: 'Plugins/QuestionAnswer/answers_list.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {
                pageTitle: 'Answers List'
            }
        }).state('QuestionAdd', {
            url: '/questions/add',
            authenticate: true,
            views: {
                "main": {
                    controller: 'QuestionsController as model',
                    templateUrl: 'Plugins/QuestionAnswer/questions_add.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {
                pageTitle: 'Question Add'
            }
        }).state('QuestionEdit', {
            url: '/questions/edit/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'QuestionsController as model',
                    templateUrl: 'Plugins/QuestionAnswer/questions_edit.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {
                pageTitle: 'Question Edit'
            }
        }).state('QuestionView', {
            url: '/questions/view/{slug}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'QuestionsController as model',
                    templateUrl: 'Plugins/QuestionAnswer/question_with_answer_view.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {
                pageTitle: 'Question Edit'
            }
        }).state('AnswerQuestion', {
            url: '/answers/question',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AnswersController as model',
                    templateUrl: 'Plugins/QuestionAnswer/doctor_questions_list.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {
                pageTitle: 'Questions'
            }
        }).state('AnswerAdd', {
            url: '/answers/add/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AnswersController as model',
                    templateUrl: 'Plugins/QuestionAnswer/answer_add.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {
                pageTitle: 'Answer Add'
            }
        }).state('AnswerEdit', {
            url: '/answers/edit/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AnswersController as model',
                    templateUrl: 'Plugins/QuestionAnswer/answer_edit.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {
                pageTitle: 'Answer Edit'
            }
        })
    });
}(angular.module("Abs.QuestionAnswer", ['ui.router', 'ngResource', 'oitozero.ngSweetAlert', 'uiSwitch','slick'])));
(function(module) {
    module.controller('AnswersController', function($scope, $http, $filter, $state, $rootScope, $location, Flash, SweetAlert, AnswerQuestion, AnswerAdd, AnswersList, AnswerEdit) {
        var model = this;
        model.setMetaData = function(title) {
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + title);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        model.init = function() {
            model.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Answers");
        };
        if ($state.current.name == 'AnswersList') {
            AnswersList.get().$promise.then(function(response) {
                $scope.answers = response.data;
                $scope.paginates = response.meta.pagination;
            });
        }
        if ($state.current.name == 'AnswerQuestion') {
            AnswerQuestion.get().$promise.then(function(response) {
                $scope.questions = response.data;
                $scope.paginates = response.meta.pagination;
            });
        }
        if ($state.current.name == 'AnswerAdd') {
            AnswerAdd.get({
                id: $state.params.id
            }).$promise.then(function(response) {
                $scope.questions = response;
            });
        }
        if ($state.current.name == 'AnswerEdit') {
            AnswerEdit.get({
                id: $state.params.id
            }).$promise.then(function(response) {
                model.formValue = response;
            });
        }
        model.answerAdd = function() {
            AnswerAdd.post({
                id: $state.params.id
            }, model.formValue).$promise.then(function(response) {
                if (response.Success) {
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.go('AnswersList');
                } else {
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        };
        model.answerUpdate = function() {
            AnswerEdit.put(model.formValue).$promise.then(function(response) {
                if (response.Success) {
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.go('AnswersList');
                } else {
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        };
    });
}(angular.module("Abs.QuestionAnswer")));
(function(module) {
    module.factory('QuestionList', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions', {}, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('AnswerList', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers', {}, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('QuestionAdd', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions/add', {}, {
            post: {
                method: 'POST'
            }
        });
    });
    module.factory('AnswerAdd', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers/add/:id', {
            id: '@id'
        }, {
            get: {
                method: 'GET'
            },
            post: {
                method: 'POST'
            }
        });
    });
    module.factory('QuestionEdit', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions/edit/:id', {
            id: '@id'
        }, {
            get: {
                method: 'GET'
            },
            put: {
                method: 'PUT'
            }
        });
    });
    module.factory('AnswerEdit', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers/edit/:id', {
            id: '@id'
        }, {
            get: {
                method: 'GET'
            },
            put: {
                method: 'PUT'
            }
        });
    });
    module.factory('QuestionDelete', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions/:id', {
            id: '@id'
        }, {
            delete: {
                method: 'DELETE'
            }
        });
    });
    module.factory('AnswerDelete', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers/:id', {
            id: '@id'
        }, {
            delete: {
                method: 'DELETE'
            }
        });
    });
    module.factory('SpecialtyList', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/specialties', {}, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('QuestionView', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions/view/:slug', {
            slug: '@slug'
        }, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('QuestionSlug', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/question/:slug', {
            slug: '@slug'
        }, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('AnswerQuestion', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers/question', {}, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('AnswersList', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers', {}, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('AnswersList', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers', {}, {
            get: {
                method: 'GET'
            }
        });
    });
})(angular.module("Abs.QuestionAnswer"));
(function(module) {
    module.controller('QuestionsController', function($scope, $http, $filter, $state, $rootScope, $location, ConstUserType, Flash, QuestionList, QuestionAdd, QuestionEdit, SpecialtyList, QuestionView, QuestionSlug) {
        var model = this;
        model.setMetaData = function(title) {
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + title);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        $scope.userRole = ConstUserType;
        console.log($scope.userRole);
        if ($state.current.name == 'QuestionList') {
            QuestionList.get().$promise.then(function(response) {
                $scope.questions = response.data;
                $scope.paginates = response.meta.pagination;
            });
        }
        if ($state.current.name == 'QuestionAdd') {
            SpecialtyList.get().$promise.then(function(response) {
                $scope.specialties = response.specialties;
            });
        }
        if ($state.current.name == 'QuestionEdit') {
            QuestionEdit.get({
                id: $state.params.id
            }).$promise.then(function(response) {
                model.formValue = response;
                model.formValue.specialty_id = parseInt(response.specialty_id);
                SpecialtyList.get().$promise.then(function(response) {
                    $scope.specialties = response.specialties;
                });
            });
        }
        if ($state.current.name == 'QuestionView') {
            QuestionSlug.get({
                slug: $state.params.slug
            }).$promise.then(function(response) {
                $scope.questionR = response;
                QuestionView.get({
                    slug: $state.params.slug
                }).$promise.then(function(response) {
                    $scope.answers = response.data;
                    $scope.paginates = response;
                });
            });
        }
        model.questionAdd = function($valid) {
            if ($valid) {
                QuestionAdd.post(model.formValue).$promise.then(function(response) {
                    if (response.Success) {
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $state.go('QuestionList');
                    } else {
                        Flash.set($filter("translate")(response.Failed), 'error', false);
                    }
                });
            }
        }
        model.questionUpdate = function($valid) {
            QuestionEdit.put(model.formValue).$promise.then(function(response) {
                if (response.Success) {
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.go('QuestionList');
                } else {
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        }
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
    });
}(angular.module("Abs.QuestionAnswer")));
angular.module('Abs').requires.push('Abs.QuestionAnswer');
(function(module) {
    module.config(function($stateProvider, $analyticsProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function(ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('pages', {
            url: '/page/{slug}',
            authenticate: false,
            views: {
                "main": {
                    controller: 'PagesController as model',
                    templateUrl: 'Plugins/Pages/pages.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {
                pageTitle: 'Pages'
            }
        });
    });
}(angular.module("Abs.Pages", ['ui.router', 'ngResource', 'angulartics', 'angulartics.google.analytics', 'angulartics.facebook.pixel'])));
(function(module) {
    module.directive('footerLinks', function() {
        var linker = function(scope, element, attrs) {};
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'Plugins/Pages/page_links.tpl.html',
            link: linker,
            controller: 'PagesController as model',
            bindToController: true
        };
    });
    module.controller('PagesController', function($scope, $http, $filter, $state, $rootScope, $location, PageFactory, $translate, $translateLocalStorage) {
        var model = this;
        model.setMetaData = function(title) {
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + title);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        model.init = function() {
            var currentLocale = $translate.preferredLanguage();
            if ($translate.use() !== undefined) {
                currentLocale = $translate.use();
            } else if ($translateLocalStorage.get('NG_TRANSLATE_LANG_KEY') !== undefined || $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY') !== null) {
                currentLocale = $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY');
            }
            if ($state.params.slug !== undefined && $state.params.slug !== null) {
                PageFactory.get({
                    slug: $state.params.slug,
                    iso2: currentLocale
                }).$promise.then(function(response) {
                    $scope.page = response;
                    model.setMetaData(response.title);
                    $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + response.title;
                });
            }
        };
        model.init();
    });
}(angular.module("Abs.Pages")));
(function(module) {
    module.factory('PageFactory', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/page/:slug/:iso2', {
            slug: '@slug',
            iso2: '@iso2'
        }, {
            'get': {
                method: 'GET'
            }
        });
    });
})(angular.module("Abs.Pages"));
angular.module('Abs').requires.push('Abs.Pages');
(function(module) {
    module.config(function($stateProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function(ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('UserEducations', {
            url: '/user/education',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserEducationsController as model',
                    templateUrl: 'Plugins/UserEducations/userEducations.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('UserEducationAdd', {
            url: '/user/education/add',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserEducationsController as model',
                    templateUrl: 'Plugins/UserEducations/userEducationAdd.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('UserEducationEdit', {
            url: '/user/education/{id}/edit',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserEducationsController as model',
                    templateUrl: 'Plugins/UserEducations/userEducationEdit.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });
}(angular.module("Abs.UserEducations", ['ui.router', 'ngResource', 'mgcrea.ngStrap.datepicker', 'oitozero.ngSweetAlert'])));
(function(module) {
    module.factory('EducationList', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/education', {}, {
            'get': {
                method: 'GET'
            }
        });
    });
    module.factory('EducationAdd', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/education/add', {}, {
            'post': {
                method: 'POST'
            }
        });
    });
    module.factory('EducationEdit', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/education/:id', {}, {
            'get': {
                method: 'GET'
            },
            'put': {
                method: 'PUT'
            }
        });
    });
    module.factory('EducationDelete', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/education/:id', {
            id: '@id'
        }, {
            'delete': {
                method: 'DELETE'
            }
        });
    });
})(angular.module('Abs.UserEducations'));
(function(moduel) {
    moduel.controller('UserEducationsController', function($state, $scope, Flash, $filter, $rootScope, $location, SweetAlert, EducationList, EducationAdd, EducationEdit, EducationDelete) {
        $scope.pageTitle = 'Doctor Education';
        var model = this;
        model.setMetaData = function() {
            var pageTitle = $filter("translate")($scope.pageTitle);
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter: title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        model.init = function() {
            model.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Photos");
        };
        model.init();
        if ($state.current.name === 'UserEducations') {
            $scope.pageTitle = 'Doctor Education';
            EducationList.get().$promise.then(function(response) {
                $scope.userEducations = response.user_educations;
                $scope.noEducationDiv = ($scope.userEducations.length > 0) ? false : true;
            });
        } else if ($state.current.name === 'UserEducationAdd') {
            $scope.pageTitle = 'Add Doctor Education';
        } else if ($state.current.name === 'UserEducationEdit') {
            $scope.pageTitle = 'Edit Doctor Education';
            EducationEdit.get({
                id: $state.params.id
            }).$promise.then(function(response) {
                model.user_education = response;
            });
        }
        $scope.userEducation = function() {
            EducationAdd.post(model.user_education).$promise.then(function(response) {
                Flash.set($filter("translate")("Education Added"), 'success', true);
                $state.go('UserEducations', {});
            });
        };
        model.userEducationEdit = function($valid) {
            if ($valid) {
                EducationEdit.put({
                    id: $state.params.id
                }, model.user_education).$promise.then(function(response) {
                    Flash.set($filter("translate")("Education updated"), 'success', true);
                    $state.go('UserEducations');
                });
            }
        };
        $scope.UserEducationDelete = function(id) {
            SweetAlert.swal({
                title: "Are you sure to Delete?",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            }, function(isConfirm) {
                if (isConfirm) {
                    EducationDelete.delete({
                        id: id
                    }).$promise.then(function(response) {
                        Flash.set($filter("translate")("User Education deleted successfully"), 'success', true);
                        $state.reload();
                    }, function(error) {
                        Flash.set($filter("translate")("User Education could not be deleted"), 'error', false);
                    });
                }
            });
        };
    });
}(angular.module("Abs.UserEducations")));
angular.module('Abs').requires.push('Abs.UserEducations');
(function(module) {}(angular.module('Abs.Translations', ['ngResource', 'pascalprecht.translate', 'tmh.dynamicLocale', 'ngSanitize', 'ngCookies'])));
(function(module) {
    module.config(function(tmhDynamicLocaleProvider) {
        tmhDynamicLocaleProvider.localeLocationPattern('assets/js/angular-i18n/angular-locale_{{locale}}.js');
    });
    module.service('LanguageList', function($sce, $rootScope, $q, GENERAL_CONFIG) {
        promise = $.get(GENERAL_CONFIG.api_url + '/languages?filter=active&sort=name&sortby=asc', function(response) {});
        return {
            promise: promise
        };
    });
    module.service('LocaleService', function($translate, $rootScope, tmhDynamicLocale, GENERAL_CONFIG, LanguageList, ResolveService, $translateLocalStorage) {
        'use strict';
        var localesObj;
        var loadedlocalesObj = {};
        var _LOCALES_DISPLAY_NAMES = [];
        var _LOCALES;
        var promiseLanguages = LanguageList.promise;
        promiseLanguages.then(function(response) {
            $.each(response.data, function(i, data) {
                loadedlocalesObj[data.iso2] = data.name;
            });
            localesObj = loadedlocalesObj;
            _LOCALES = Object.keys(localesObj);
            if (!_LOCALES || _LOCALES.length === 0) {
                console.error('There are no _LOCALES provided');
            }
            _LOCALES.forEach(function(locale) {
                _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
            });
        });
        var currentLocale = $translate.preferredLanguage();
        if ($translate.use() !== undefined) {
            currentLocale = $translate.use();
        } else if ($translateLocalStorage.get('NG_TRANSLATE_LANG_KEY') !== undefined && $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY') !== null) {
            currentLocale = $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY');
        }
        var checkLocaleIsValid = function(locale) {
            return _LOCALES.indexOf(locale) !== -1;
        };
        var setLocale = function(locale) {
            if (!checkLocaleIsValid(locale)) {
                console.error('Locale name "' + locale + '" is invalid');
                return;
            }
            currentLocale = locale;
            $translate.use(locale);
        };
        $rootScope.$on('$translateChangeSuccess', function(event, data) {
            document.documentElement.setAttribute('lang', data.language);
            tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
        });
        return {
            getLocaleDisplayName: function() {
                return localesObj[currentLocale];
            },
            setLocaleByDisplayName: function(localeDisplayName) {
                setLocale(_LOCALES[_LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName)]);
            },
            getLocalesDisplayNames: function() {
                return _LOCALES_DISPLAY_NAMES;
            }
        };
    });
    module.directive('ngTranslateLanguageSelect', function(LocaleService, LanguageList) {
        'use strict';
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'Plugins/Translations/language_translate.tpl.html',
            controller: function($scope, $rootScope, $timeout, LanguageList) {
                var promiseSettings = LanguageList.promise;
                promiseSettings.then(function(response) {
                    $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
                    $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
                    $scope.visible = $scope.localesDisplayNames && $scope.localesDisplayNames.length > 1;
                });
                $scope.changeLanguage = function(locale) {
                    LocaleService.setLocaleByDisplayName(locale);
                };
            }
        };
    });
}(angular.module("Abs.Translations")));
angular.module('Abs').requires.push('Abs.Translations');
(function(module) {
    module.config(function($stateProvider, $analyticsProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function(ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('contact', {
            url: '/contactus',
            authenticate: false,
            views: {
                'main': {
                    controller: 'ContactUsController as model',
                    templateUrl: 'Plugins/Contacts/contacts.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });
}(angular.module('Abs.Contacts', ['ui.router', 'ngResource', 'angulartics', 'angulartics.google.analytics', 'angulartics.facebook.pixel', 'vcRecaptcha'])));
(function(module) {
    module.directive('contactLinks', function() {
        var linker = function(scope, element, attrs) {};
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'Plugins/Contacts/contact_links.tpl.html',
            link: linker,
            controller: 'ContactUsController as model',
            bindToController: true
        };
    });
    module.controller('ContactUsController', function($scope, $rootScope, ContactsFactory, $filter, Flash, $state, $location, vcRecaptchaService) {
        model = this;
        model.setMetaData = function() {
            var pageTitle = $filter("translate")("Contact Us");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        model.init = function() {
            model.setMetaData();
            model.captcha_site_key = $rootScope.settings['captcha.site_key'];
            if ($location.path() == '/contactus') {
                $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Contact Us");
            }
        };
        $scope.setRecaptchaId = function(widgetId) {
            $scope.widgetId = widgetId;
        };
        model.init();
        model.contactFormSubmit = function($valid) {
            model.emailErr = '';
            model.captchaErr = '';
            var response = vcRecaptchaService.getResponse($scope.widgetId);
            if (response.length === 0) {
                model.captchaErr = $filter("translate")("Please resolve the captcha and submit");
            } else {
                model.captchaErr = '';
            }
            if ($valid) {
                model.contactForm.recaptcha_response = response;
                ContactsFactory.save(model.contactForm).$promise.then(function(response) {
                    Flash.set($filter("translate")("Thank you, we received your message and will get back to you as soon as possible."), 'success', true);
                    $state.reload('contact');
                }, function(error) {
                    var errMsg = error.data.errors;
                    if (errMsg.email) {
                        model.emailErr = $filter("translate")(errMsg.email[0]);
                    }
                    Flash.set($filter("translate")("Contact message could not be sent. Please, try again."), 'error', false);
                });
            }
        };
    });
}(angular.module("Abs.Contacts")));
(function(module) {
    module.factory('ContactsFactory', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/contacts', {}, {
            'save': {
                method: 'POST'
            }
        });
    });
})(angular.module("Abs.Contacts"));
angular.module('Abs').requires.push('Abs.Contacts');
(function(module) {
    module.config(function($stateProvider, $analyticsProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function(ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('MyDocotors', {
            url: '/user/favorite',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserFavoriteController as model',
                    templateUrl: 'Plugins/UserFavorites/user_favorites.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {
                pageTitle: 'My Doctors'
            }
        });
    });
}(angular.module("Abs.UserFavorites", ['ui.router', 'ngResource', 'oitozero.ngSweetAlert'])));
(function(module) {
    module.directive('favoriteAdd', function() {
        var linker = function(scope, element, attrs) {};
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'Plugins/UserFavorites/favorite_add.tpl.html',
            link: linker,
            controller: 'UserFavoriteController as model',
            bindToController: true
        };
    });
    module.controller('UserFavoriteController', function($scope, $http, $filter, $state, $rootScope, $location, Flash, SweetAlert, MyDocotors, FavoriteAdd, FavoriteDelete) {
        var model = this;
        model.setMetaData = function(title) {
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + title);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        model.init = function() {
            model.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Doctors");
            MyDocotors.get().$promise.then(function(response) {
                $scope.doctorDetails = response.data;
                $scope._metadata = response.meta.pagination;
            });
            $scope.add_favorite = function() {
                var splitedUrl = $location.url().split('/');
                FavoriteAdd.post({
                    'username': splitedUrl[2]
                }).$promise.then(function(response) {
                    if (response.Success) {
                        Flash.set($filter("translate")(response.Success), 'success', true);
                    } else {
                        Flash.set($filter("translate")(response.Failed), 'error', false);
                    }
                });
            };
        };
        $scope.remove_favorite = function(favoriteId) {
            SweetAlert.swal({
                title: "Are you sure to remove this doctor in your favorite?",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            }, function(isConfirm) {
                if (isConfirm) {
                    FavoriteDelete.delete({
                        'id': favoriteId
                    }).$promise.then(function(response) {
                        if (response.Success) {
                            Flash.set($filter("translate")(response.Success), 'success', true);
                        } else {
                            Flash.set($filter("translate")(response.Failed), 'error', false);
                        }
                        MyDocotors.get().$promise.then(function(response) {
                            $scope.doctorDetails = response.data;
                            $scope._metadata = response.meta.pagination;
                        });
                    });
                }
            });
        };
        model.init();
    });
}(angular.module("Abs.UserFavorites")));
(function(module) {
    module.factory('MyDocotors', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorites', {}, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('FavoriteAdd', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorite/add', {}, {
            post: {
                method: 'POST'
            }
        });
    });
    module.factory('FavoriteDelete', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorite/delete/:id', {
            id: '@id'
        }, {
            delete: {
                method: 'delete'
            }
        });
    });
})(angular.module("Abs.UserFavorites"));
angular.module('Abs').requires.push('Abs.UserFavorites');
(function(module) {
    module.config(function($stateProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function(ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('UserPhotos', {
            url: '/photos',
            authenticate: true,
            views: {
                "main": {
                    controller: 'PhotosController as model',
                    templateUrl: 'Plugins/Photos/photo_index.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('UserPhotosAdd', {
            url: '/photos/add',
            authenticate: true,
            views: {
                "main": {
                    controller: 'PhotosController as model',
                    templateUrl: 'Plugins/Photos/photoAdd.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });
}(angular.module("Abs.Photos", ['ui.router', 'ngResource', 'ngFileUpload', 'oitozero.ngSweetAlert', 'jkuri.gallery'])));
(function(module) {
    module.factory('PhotosFactory', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/photos/:username', {
            username: '@username'
        }, {
            'get': {
                method: 'GET'
            }
        });
    });
    module.factory('PhotosAddFactory', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/photos', {}, {
            'save': {
                method: 'POST'
            }
        });
    });
    module.factory('PhotoDeleteFactory', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/photos/:id', {
            id: '@id'
        }, {
            'delete': {
                method: 'DELETE'
            }
        });
    });
})(angular.module("Abs.Photos"));
(function(module) {
    module.directive('clinicPhotos', function() {
        var linker = function(scope, element, attrs) {};
        return {
            restrict: 'E',
            templateUrl: 'Plugins/Photos/clinic_photos.tpl.html',
            link: linker,
            controller: 'PhotosController as model',
            bindToController: true
        };
    });
    module.controller('PhotosController', function($state, $scope, Flash, $filter, $rootScope, $location, Upload, GENERAL_CONFIG, PhotosFactory, PhotoDeleteFactory, SweetAlert) {
        var model = this;
        model.setMetaData = function() {
            var pageTitle = $filter("translate")("My Photos");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter: title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        model.init = function() {
            model.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Photos");
        };
        model.init();
        if ($state.current.name !== 'UserPhotosAdd') {
            var splitedUrl = $location.url().split('/');
            $scope.images = [];
            PhotosFactory.get({
                'username': splitedUrl[2]
            }).$promise.then(function(response) {
                $scope.photos = response.data;
                $scope.isShown = ($scope.photos.length > 0) ? false : true;
                angular.forEach($scope.photos, function(value, key) {
                    $scope.images.push({
                        thumb: value.attachmentable.data.thumb.small,
                        img: value.attachmentable.data.thumb.medium,
                        description: 'Clinic Photo'
                    });
                });
                $scope.hospitalphotos = $scope.images;
            });
        }
        $scope.uploadFiles = function(files) {
            $scope.files = files;
            if (files && files.length) {
                Upload.upload({
                    url: GENERAL_CONFIG.api_url + '/photos',
                    data: {
                        files: files
                    }
                }).then(function(response) {
                    Flash.set($filter("translate")("Clinic Photos has been added"), 'success', true);
                    $state.go('UserPhotos');
                }, function(response) {
                    console.log(response);
                    Flash.set($filter("translate")("Clinic Photos could not be added. Please, try again."), 'error', false);
                }, function(evt) {
                    $scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
            }
        };
        $scope.photoDelete = function(id) {
            SweetAlert.swal({
                title: "Are you sure to remove this clinic photo?",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            }, function(isConfirm) {
                if (isConfirm) {
                    PhotoDeleteFactory.delete({
                        id: id
                    }).$promise.then(function(response) {
                        if (response.Success) {
                            Flash.set($filter("translate")(response.Success), 'success', true);
                        } else {
                            Flash.set($filter("translate")(response.Failed), 'error', false);
                        }
                        PhotosFactory.get().$promise.then(function(response) {
                            $scope.photos = response.data;
                            $scope.isShown = ($scope.photos.length > 0) ? false : true;
                        });
                    });
                }
            });
        };
        $scope.allPhotos = function() {
            $scope.showPhoto = true;
        };
    });
}(angular.module("Abs.Photos")));
angular.module('Abs').requires.push('Abs.Photos');
(function(module) {
    module.config(function() {});
}(angular.module('Abs.Analytics', ['ui.router', 'ngResource', ])));
(function(module) {
    module.directive('facebookPixel', function() {
        var linker = function(scope, element, attrs) {};
        return {
            restrict: 'AE',
            link: linker,
            controller: function($rootScope, ResolveService) {
                var promise = ResolveService.promise;
                var promiseSettings = ResolveService.promiseSettings;
                promiseSettings.then(function(data) {
                    if ($rootScope.settings) {
                        ! function(f, b, e, v, n, t, s) {
                            if (f.fbq) return;
                            n = f.fbq = function() {
                                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                            };
                            if (!f._fbq) f._fbq = n;
                            n.push = n;
                            n.loaded = !0;
                            n.version = '2.0';
                            n.queue = [];
                            t = b.createElement(e);
                            t.async = !0;
                            t.src = v;
                            s = b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t, s)
                        }(window, document, 'script', '//connect.facebook.net/en_US/fbevents.js');
                        fbq('init', $rootScope.settings['analytics.facebook_analytics.pixel']);
                    }
                });
            },
            scope: {}
        };
    });
})(angular.module('Abs.Analytics'));
(function(module) {
    module.directive('googleAnalytics', function() {
        var linker = function(scope, element, attrs) {};
        return {
            restrict: 'AE',
            link: linker,
            controller: function($rootScope, ResolveService) {
                var promise = ResolveService.promise;
                var promiseSettings = ResolveService.promiseSettings;
                promiseSettings.then(function(data) {
                    if ($rootScope.settings) {
                        (function(i, s, o, g, r, a, m) {
                            i['GoogleAnalyticsObject'] = r;
                            i[r] = i[r] || function() {
                                    (i[r].q = i[r].q || []).push(arguments)
                                }, i[r].l = 1 * new Date();
                            a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                            a.async = 1;
                            a.src = g;
                            m.parentNode.insertBefore(a, m)
                        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
                        ga('create', $rootScope.settings['analytics.google_analytics.profile_id'], 'auto');
                    }
                });
            },
            scope: {}
        };
    });
})(angular.module('Abs.Analytics'));
angular.module('Abs').requires.push('Abs.Analytics');
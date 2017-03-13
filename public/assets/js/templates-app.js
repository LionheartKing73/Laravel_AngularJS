angular.module('templates-app', ['Common/404.tpl.html', 'Common/footer.tpl.html', 'Common/header.tpl.html', 'User/change_password.tpl.html', 'User/dashboard_settings.tpl.html', 'User/dashboard.tpl.html', 'User/forgot_password.tpl.html', 'User/login_user.tpl.html', 'User/login.tpl.html', 'User/my_calender.tpl.html', 'User/my_insurances.tpl.html', 'User/my_languages.tpl.html', 'User/my_specialties.tpl.html', 'User/register.tpl.html', 'User/updateDiseaseForm.tpl.html', 'User/user_profile.tpl.html', 'User/user_view.tpl.html', 'Home/home.tpl.html', 'Appointments/appointment_booking_appt_info.tpl.html', 'Appointments/appointment_booking_confirm.tpl.html', 'Appointments/appointment_booking_details.tpl.html', 'Appointments/appointment_booking_patient_info.tpl.html', 'Appointments/appointment_index.tpl.html', 'Appointments/appointment_modifications_add.tpl.html', 'Appointments/appointment_modifications_edit.tpl.html', 'Appointments/appointment_modifications.tpl.html', 'Appointments/appointment_setting.tpl.html', 'Appointments/appointment_view.tpl.html', 'Appointments/appointments.tpl.html', 'Search/search.tpl.html']);

angular.module("Common/404.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Common/404.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"tex-center\">	\n" +
    "		<h3>404 Page Not Found</h3>\n" +
    "	</div>		\n" +
    "</div>\n" +
    "");
}]);

angular.module("Common/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Common/footer.tpl.html",
    "<!--footer section start-->\n" +
    "<footer id=\"js-footer-hide-section\">\n" +
    "    <div class=\"footer\">\n" +
    "        <div class=\"container\">\n" +
    "       		<!-- bottom Banner start-->\n" +
    "            <div banner position=\"bottomBanner\"></div>\n" +
    "            <!-- bottom Banner end-->\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-4 get-app\">\n" +
    "                     <img src='assets/img/logo.png' alt='' class='img-logo'/>" +
    "                    <ul class=\"list-inline\">\n" +
    "                        <li><a href=\"javascript:void(0);\"><img src=\"assets/img/app-store.png\" alt=\"app-store\" /></a></li>\n" +
    "                        <li><a href=\"javascript:void(0);\"><img src=\"assets/img/google-store.png\" alt=\"google-store\" /></a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <div class=\"col-sm-7\">\n" +
    "                        <h3>Company</h3>\n" +
    "                        <div footer-links></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-5\">\n" +
    "                        <h3>Search By</h3>\n" +
    "                        <ul class=\"list-unstyled row footer-menu\">\n" +
    "                            <li class=\"col-sm-10\">\n" +
    "                                <ul class=\"list-unstyled\">\n" +
    "                                    <li><a href=\"#/search?is_online_booking=true&specialty_id=1\">Doctor Name</a></li>\n" +
    "                                    <li><a href=\"#/search?is_online_booking=true&specialty_id=1\">Practice Name</a></li>\n" +
    "                                    <li><a href=\"#/search?is_online_booking=true&specialty_id=1\">Specialty</a></li>\n" +
    "                                    <li><a href=\"#/search?is_online_booking=true&specialty_id=1\">Procedure</a></li>\n" +
    "                                </ul>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +

    "                <div class=\"col-md-2\">\n" +
    "                    <h3>Follow Us</h3>\n" +
    "                    <ul class=\"list-inline social-link\">\n" +
    "                        <li class=\"facebook\">\n" +
    "                            <a href=\"{{$root.settings['follow.facebook_url']}}\" target=\"_blank\" title=\"{{'Follow me on facebook'| translate}}\" class=\"btn-social btn-fb\"><i class=\"fa fa-fw fa-facebook\"></i> Facebook</a>\n" +
    "                        </li>\n" +
    "                        <li class=\"twitter\">\n" +
    "                            <a href=\"{{$root.settings['follow.twitter_url']}}\" target=\"_blank\" title=\"{{'Follow me on twitter'| translate}}\" class=\"btn-social btn-twitter\"><i class=\"fa fa-fw fa-twitter\"></i> Twitter</a>\n" +
    "                        </li>\n" +
    "                        <li class=\"google-plus\">\n" +
    "                            <a href=\"{{$root.settings['follow.google_plus_url']}}\" target=\"_blank\" title=\"{{'Follow me on google plus'| translate}}\" class=\"btn-social btn-gp\"><i class=\"fa fa-fw fa-google-plus\"></i> Google+</a>\n" +
    "                        </li>\n" +
    "                        <li class=\"linkedin\">\n" +
    "                            <a href=\"{{$root.settings['follow.linkedin_url']}}\" target=\"_blank\" title=\"{{'Follow me on linkedin'| translate}}\" class=\"btn-social btn-linkedin\"><i class=\"fa fa-fw fa-linkedin\"></i> Linkedin</a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <!--<div class=\"pull-left footer-link\">\n" +
    "                    <ul class=\"list-inline terms-menu\">\n" +
    "                        <li>\n" +
    "                            Copyright &copy; {{model.date | date:'yyyy'}}\n" +
    "                            {{$root.settings['site.name']}}.\n" +
    "                            {{'All rights reserved' | translate}}.\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                            <div footer-links></div>\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                            <a href=\"#/contactus\" title=\"{{'Contact Us' | translate}}\" class=\"whitec\">\n" +
    "                                {{'Contact Us' | translate}}\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>-->\n" +
    "                <!--<div class=\"social-icons\">\n" +
    "                    <ul class=\"social-link\">\n" +
    "                        <li ng-show=\"$root.settings['follow.facebook_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.facebook_url']}}\" target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{'Follow me on facebook'| translate}}\" class=\"btn-social btn-fb\"><i class=\"fa fa-fw fa-facebook\"></i> Facebook</a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.google_plus_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.google_plus_url']}}\" target=\"_blank\" title=\"{{'Follow me on google plus'| translate}}\" class=\"btn-social btn-gp\"><i class=\"fa fa-fw fa-google-plus\"></i> Google+</a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.linkedin_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.linkedin_url']}}\" target=\"_blank\" title=\"{{'Follow me on linkedin'| translate}}\" class=\"btn-social btn-linkedin\"><i class=\"fa fa-fw fa-linkedin\"></i> Linkedin</a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.foursquare_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.foursquare_url']}}\" target=\"_blank\" title=\"{{'Follow me on foursquare'| translate}}\" class=\"btn-social btn-foursquare\"><i class=\"fa fa-fw fa-foursquare\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.pinterest_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.pinterest_url']}}\" target=\"_blank\" title=\"{{'Follow me on pinterest'| translate}}\" class=\"btn-social btn-pinterest\"><i class=\"fa fa-fw fa-pinterest\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.flickr_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.flickr_url']}}\" target=\"_blank\" title=\"{{'Follow me on flickr'| translate}}\" class=\"btn-social btn-flickr\"><i class=\"fa fa-fw fa-flickr\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.instagram_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.instagram_url']}}\" target=\"_blank\" title=\"{{'Follow me on instagram'| translate}}\" class=\"btn-social btn-instagram\"><i class=\"fa fa-fw fa-instagram\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.tumblr_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.tumblr_url']}}\" target=\"_blank\" title=\"{{'Follow me on tumblr'| translate}}\" class=\"btn-social btn-tumblr\"><i class=\"fa fa-fw fa-tumblr\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.youtube_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.youtube_url']}}\" target=\"_blank\" title=\"{{'Follow me on youtube'| translate}}\" class=\"btn-social btn-youtube\"><i class=\"fa fa-fw fa-youtube-play\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.vimeo_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.vimeo_url']}}\" target=\"_blank\" title=\"{{'Follow me on vimeo'| translate}}\" class=\"btn-social btn-vimeo\"><i class=\"fa fa-fw fa-vimeo\"></i></a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"$root.settings['follow.twitter_url']\">\n" +
    "                            <a href=\"{{$root.settings['follow.twitter_url']}}\" target=\"_blank\" title=\"{{'Follow me on twitter'| translate}}\" class=\"btn-social btn-twitter\"><i class=\"fa fa-fw fa-twitter\"></i> Twitter</a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>-->\n" +
    "                <div class=\"footer-below text-center col-md-12\">\n" +
    "                    <p>&copy; 2016 ABS -  All Rights Reserved  @ <a href=\"http://noosyntech.com\">NOOSYN TECH</a> <span class='privacy'>Terms of Service  /  Privacy Policy</span></p>\n" +
    "                </div>\n" +
    "         	</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>\n" +
    "<!--footer section end-->\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("Common/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Common/header.tpl.html",
    "<!-- Navigation -->\n" +
    "<nav class=\"navbar header navbar-fixed-top\">\n" +
    "    <div class=\"container\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header page-scroll\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" id=\"js-header-hide-section-btn\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#!/\">\n" +
    "                <img src=\"assets/img/logo.png\" alt=\"logo\"/>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "            <ul class=\"nav navbar-nav navbar-right\" id=\"js-header-hide-section\">\n" +
    "                <li class='link-white'><a href='#'>List Your Clinic</a></li>" +
    "                <li class='link-white'><a href='#'>download app</a></li>" +
    "                <li class='margin-0' ui-sref-active=\"active\" ng-show=\"!model.isAuthenticated()\"><a class=\"login\" ui-sref=\"login\" title=\"{{'Sign In' | translate}}\">{{'Sign In' | translate}} <span>/</span></a></li>\n" +
    "                <li class='margin-0' ui-sref-active=\"active\" ng-show=\"!model.isAuthenticated()\"><a class=\"signup\" ui-sref=\"login_user\" title=\"{{'Join Now' | translate}}\"> {{'Join Now' | translate}}</a></li>\n" +
    "                <li ng-translate-language-select></li>\n" +
    "                <li class=\"dropdown\" ng-show=\"model.isAuthenticated()\">\n" +
    "                	<dashboard-settings></dashboard-settings>\n" +
    "                	<!--<a href=\"\" class=\" dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                        <img ng-src=\"{{$root.auth.attachmentable.thumb.small}}\" alt=\"{{$root.auth.username}}\" />\n" +
    "                        <span class=\"fa fa-angle-down\"></span>\n" +
    "                    </a>\n" +
    "                   	<ul class=\"dropdown-menu\">\n" +
    "                    	<li><a href=\"#/appointments\" title=\"View Appointments\"><i class=\"fa fa-eye fa-fw\"></i>{{ 'View Appointments' | translate }}</a></li>\n" +
    "                        <li><a href=\"#/users/user_profile\" title=\"Edit Profile\"><i class=\"fa fa-pencil-square-o fa-fw\"></i>{{ 'Edit Profile' | translate }}</a></li>\n" +
    "                        <li><a href=\"#\" ng-click=\"model.logout()\"><i class=\"fa fa-power-off fa-fw\"></i>{{ 'Sign out' | translate }}</a></li>\n" +
    "                    </ul>-->\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <!-- /.navbar-collapse -->\n" +
    "    </div>\n" +
    "    <!-- /.container-fluid -->\n" +
    "</nav>\n" +
    "<!--<div subscription-alert ></div>-->\n" +
    "");
}]);

angular.module("User/change_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/change_password.tpl.html",
    "<section class=\"pad-63 change-password\">\n" +
    "    <div class=\"container\">\n" +
    "		<div class=\"form-content col-md-5 col-md-offset-3 border\">\n" +
    "        	<div class=\"page-head\">\n" +
    "                <h1>{{'Reset Password' | translate}}</h1>\n" +
    "            </div>\n" +
    "        	<form method=\"post\" name=\"changePasswordForm\" ng-submit=\"change_password(changePasswordForm.$valid, user)\" novalidate>\n" +
    "                <div class=\"form-body\">\n" +
    "                    <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : (changePasswordForm.$submitted || changePasswordForm.old_password.$touched) && (changePasswordForm.old_password.$pristine || changePasswordForm.old_password.$invalid) }\">\n" +
    "                        <input class=\"form-control\" type=\"password\" name=\"old_password\" ng-model=\"user.old_password\" placeholder=\"{{'Current Password' | translate}}\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                        <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.old_password.$touched) && (changePasswordForm.old_password.$pristine || changePasswordForm.old_password.$invalid) && (changePasswordForm.old_password.$error.required)\">{{'Enter Current Password' | translate}}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.old_password.$touched) && (changePasswordForm.old_password.$pristine || changePasswordForm.old_password.$invalid) && (changePasswordForm.old_password.$error.minlength)\">{{'Minimum length is' | translate}} 6</span>\n" +
    "                        <span class=\"error\" ng-show=\"user.oldPassErr\">{{user.oldPassErr}}</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group has-feedback\"\n" +
    "                 ng-class=\"{ 'has-error' : (changePasswordForm.$submitted || changePasswordForm.new_password.$touched) && (changePasswordForm.new_password.$pristine || changePasswordForm.new_password.$invalid) }\">\n" +
    "                        <input class=\"form-control\" type=\"password\" name=\"new_password\" ng-model=\"user.password\" placeholder=\"{{'New Password' | translate}}\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                        <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.new_password.$touched) && (changePasswordForm.new_password.$pristine || changePasswordForm.new_password.$invalid) && (changePasswordForm.new_password.$error.required)\">{{'Enter New Password' | translate}}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.new_password.$touched) && (changePasswordForm.new_password.$pristine || changePasswordForm.new_password.$invalid) && (changePasswordForm.new_password.$error.minlength)\">{{'Minimum length is' | translate}} 6</span>\n" +
    "                        <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.new_password.$touched) && (changePasswordForm.new_password.$pristine || changePasswordForm.new_password.$invalid) && (changePasswordForm.new_password.$error.maxlength)\">{{'Maximum length is' | translate}} 40</span>\n" +
    "                    </div>\n" +
    "                   <div class=\"form-group has-feedback\"\n" +
    "                 ng-class=\"{ 'has-error' : (changePasswordForm.$submitted || changePasswordForm.confirm_new_password.$touched) && (changePasswordForm.confirm_new_password.$pristine || changePasswordForm.confirm_new_password.$invalid) }\">\n" +
    "                        <input class=\"form-control\" type=\"password\" name=\"confirm_new_password\" ng-model=\"user.confirm_password\" data-match=\"user.password\" placeholder=\"{{'Re-type New Password' | translate}}\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                        <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.confirm_new_password.$touched) && (changePasswordForm.confirm_new_password.$pristine || changePasswordForm.confirm_new_password.$invalid) && (changePasswordForm.confirm_new_password.$error.required)\">{{'Re-type New Password' | translate}}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.confirm_new_password.$touched) && (changePasswordForm.confirm_new_password.$pristine || changePasswordForm.confirm_new_password.$invalid) && (changePasswordForm.confirm_new_password.$error.minlength)\">{{'Minimum length is' | translate}} 6</span>\n" +
    "                        <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.confirm_new_password.$touched) && (changePasswordForm.confirm_new_password.$pristine || changePasswordForm.confirm_new_password.$invalid) && (changePasswordForm.confirm_new_password.$error.maxlength)\">{{'Maximum length is' | translate}} 40</span>\n" +
    "                        <span class=\"error\" ng-show=\"(changePasswordForm.$submitted || changePasswordForm.confirm_new_password.$touched) && (changePasswordForm.new_password.$dirty && changePasswordForm.confirm_new_password.$dirty) && (user.confirm_new_password != user.new_password)\">{{'Password Mismatch' | translate}}</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-footer\">\n" +
    "                    <button class=\"btn btn-green btn-animate btn-block\" type=\"submit\">{{'Save' | translate}}</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("User/dashboard_settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/dashboard_settings.tpl.html",
    "<li class=\"dropdown arrow-icon\">\n" +
    "	<a href=\"javascript:void(0);\" title=\"{{$root.auth.username}}\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "        <img ng-src=\"{{$root.auth.attachmentable.thumb.small}}\" alt=\"{{$root.auth.username}}\" />\n" +
    "        <span class=\"fa fa-angle-down\"></span>\n" +
    "	</a>\n" +
    "    <ul class=\"dropdown-menu arrow arrow-right\">\n" +
    "    	<li class=\"container\">\n" +
    "        	<ul class=\"list-unstyled row\">\n" +
    "            	<li class=\"col-md-3 col-sm-4\">\n" +
    "                    <h2>{{'Profile Details' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                    	<li><a href=\"#/users/user_profile\" title=\"{{'Edit Profile' | translate}}\"><i class=\"fa fa-pencil-square-o fa-fw\"></i>{{'Edit Profile' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/doctor/{{$root.auth.username}}\" title=\"{{'View Profile' | translate}}\"><i class=\"fa fa-desktop fa-fw\"></i>{{'View Profile' | translate}}</a></li>\n" +
    "                        <li><a href=\"#/users/change_password\" title=\"{{'Change Password' | translate}}\"><i class=\"fa fa-lock fa-fw\"></i>{{'Change Password' | translate}}</a></li>\n" +
    "                        \n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.settings['site.enabled_plugins'].indexOf('UserEducations') > -1\"><a href=\"#/user/education\" title=\"{{'My Educations' | translate}}\"><i class=\"fa fa-book fa-fw\"></i>{{'My Educations' | translate}}</a></li>\n" +
    "                    </ul>\n" +
    "               	</li>\n" +
    "            	<li class=\"col-md-3 col-sm-4\">\n" +
    "                    <h2>{{'Appointment Details' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                    	<li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/calendar\" title=\"{{'My Calendar' | translate}}\"><i class=\"fa fa-calendar fa-fw\"></i>{{'My Calendar' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/appointments/modifications\" title=\"{{'Appointment Modifications' | translate}}\"><i class=\"fa fa-edit fa-fw\"></i>{{'Appointment Modifications' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/appointments/settings\" title=\"{{'Appointment Settings' | translate}}\"><i class=\"fa fa-gear fa-fw\"></i>{{'Appointment Settings' | translate}}</a></li>\n" +
    "                        <li><a href=\"#/appointments/all\" title=\"{{'My Appointments' | translate}}\"><i class=\"fa fa-envelope-o fa-fw\"></i>{{'My Appointments' | translate}}</a></li>\n" +
    "                    </ul>\n" +
    "              	</li>\n" +
    "            	<li class=\"col-md-3 col-sm-4\">\n" +
    "                    <h2>{{'Facilities' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.auth.is_trial == 1 && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1 || $root.auth.role_id == model.ConstUserType.Doctor && $root.auth.is_paypal_cancel == 1 &&  $root.auth.subscription_end < currentDate && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"><a href=\"#/subscribe/plans\" title=\"{{'Subscription Plans' | translate}}\"><i class=\"fa fa-clone fa-fw\"></i>{{'Subscription Plans' | translate}}</a></li>    \n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.auth.is_trial == 0 && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"><a href=\"#/subscribe/list\" title=\"{{'Subscribe Details' | translate}}\"><i class=\"fa fa-clone fa-fw\"></i>{{'My Subscription' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/specialties\" title=\"{{'My Specialties' | translate}}\"><i class=\"fa fa-user-md fa-fw\"></i>{{'My Specialties' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/insurances\" title=\"{{'My Insurances' | translate}}\"><i class=\"fa fa-retweet fa-fw\"></i>{{'My Insurances' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/user/languages\" title=\"{{'My Languages' | translate}}\"><i class=\"fa fa-language fa-fw\"></i>{{'My Languages' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\"><a href=\"#/photos\" title=\"{{'My Clinic Photos' | translate}}\"><i class=\"fa fa-hospital-o fa-fw\"></i>{{'My Clinic Photos' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.settings['site.enabled_plugins'].indexOf('IcalCalendar') > -1\"><a href=\"#/ical/list\" title=\"{{'Ical List' | translate}}\"><i class=\"fa fa-link fa-fw\"></i>{{'Ical' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.User\"><a href=\"#/\" title=\"{{'Book a new appointment' | translate}}\"><i class=\"fa fa-plus fa-fw\"></i>{{'Book a new appointment' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.User && $root.settings['site.enabled_plugins'].indexOf('UserFavorites') > -1\"><a href=\"#/user/favorite\" title=\"{{'My Doctors' | translate}}\"><i class=\"fa fa-user-md fa-fw\"></i>{{'My Doctors' | translate}}</a></li>\n" +
    "                        <li><a href=\"#/questions\" ng-if=\"$root.auth.role_id == model.ConstUserType.User && $root.settings['site.enabled_plugins'].indexOf('QuestionAnswer') > -1\" title=\"{{'Questions' | translate}}\"><i class=\"fa fa-book fa-fw\"></i>{{'Questions' | translate}}</a></li>\n" +
    "                        <li><a href=\"#/answers\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor && $root.settings['site.enabled_plugins'].indexOf('QuestionAnswer') > -1\" title=\"{{'Answers' | translate}}\"><i class=\"fa fa-book fa-fw\"></i>{{'Answers' | translate}}</a></li>\n" +
    "                        <li ng-if=\"$root.auth.role_id == model.ConstUserType.Admin\"><a href=\"ag-admin/#/dashboard\" title=\"{{'Admin Dashboard' | translate}}\"><i class=\"fa fa-clone fa-fw\"></i>{{'Admin Dashboard' | translate}}</a></li>\n" +
    "                    </ul>\n" +
    "              	</li>\n" +
    "            	<li class=\"col-md-3 col-sm-4\">\n" +
    "                    <h2>{{'Exit' | translate}}</h2>\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                    	<li><a href=\"#\" ng-click=\"model.logout()\"><i class=\"fa fa-power-off fa-fw\"></i>{{ 'Sign out' | translate }}</a></li>\n" +
    "                    </ul>\n" +
    "              	</li>\n" +
    "       		</ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</li>");
}]);

angular.module("User/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/dashboard.tpl.html",
    "<div class=\"page-head\">\n" +
    "    <div class=\"container\">\n" +
    "        <h1>{{'Dashboard' | translate}}</h1>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"dashboard-list\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-2 text-center\">\n" +
    "                <a href=\"#/doctor/{{user.username}}\" title=\"{{user.username}}\" class=\"thumbnail\">\n" +
    "                    <img ng-if=\"user.user_avatar_source_id != model.ConstSocialLogin.Twitter && user.user_avatar_source_id != model.ConstSocialLogin.Github\" ng-src=\"{{user.attachmentable.thumb.medium}}\" title=\"{{user.username}}\" class=\"\" alt=\"{{user.username}}\">\n" +
    "                    <img ng-if=\"user.user_avatar_source_id == model.ConstSocialLogin.Twitter || user.user_avatar_source_id == model.ConstSocialLogin.Github\" ng-src=\"{{user.attachmentable.thumb.medium}}\" title=\"{{user.username}}\" class=\"\" alt=\"{{user.username}}\" height=\"{{model.thumb.medium.height}}\" width=\"{{model.thumb.medium.width}}\">\n" +
    "                </a>\n" +
    "               	<a href=\"#/wallets\" title=\"{{'Add Amount to Wallet' | translate}}\" class=\"btn btn-blue btn-animate\">\n" +
    "                        {{'Add Amount to Wallet' | translate}}\n" +
    "              	</a>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-10\">\n" +
    "                <div class=\"doctor-profile-details\">\n" +
    "                    <a href=\"#/doctor/{{user.username}}\" title=\"{{user.username}}\">\n" +
    "                        {{user.username}}\n" +
    "                    </a>\n" +
    "                <p>{{user.user_profile.about_me}}</p>\n" +
    "                <dl class=\"dl-horizontal\">\n" +
    "                    	<dt>{{'Balance' | translate}}</dt>\n" +
    "                        <dd><span>:</span>{{user.available_wallet_amount}}</dd>\n" +
    "                    </dl>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("User/forgot_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/forgot_password.tpl.html",
    "<section class=\"clearfix pad-63\">\n" +
    "    <div class=\"container\">\n" +
    "    	<div class=\"form-content col-md-5 col-md-offset-3 border\">\n" +
    "        	<div class=\"page-head\">\n" +
    "                <h1>{{'Forgot your password?' | translate}}</h1>\n" +
    "            </div>\n" +
    "            <form class=\"\" method=\"post\" name=\"forgotPassword\" ng-submit=\"forgot_password(forgotPassword.$valid, user);forgotPassword.$setPristine()\">\n" +
    "            	<div class=\"form-body\">\n" +
    "                	<div class=\"alert alert-info\">\n" +
    "                        {{'Please provide the email address. We\\'ll send you an email with new password.' | translate}}\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group clearfix mt15\" ng-class=\"{ 'has-error' : (forgotPassword.$submitted || forgotPassword.email.$touched) && (forgotPassword.email.$pristine || forgotPassword.email.$invalid) }\">\n" +
    "                        <input class=\"form-control\" type=\"email\" name=\"email\" ng-model=\"user.email\" placeholder=\"{{'Enter your email' | translate}}\"  ng-pattern=\"/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$/\" ng-required=\"true\" autofocus>\n" +
    "                        <div class=\"help-block\" ng-if=\"forgotPassword.email.$dirty\" ng-messages=\"forgotPassword.email.$error\">\n" +
    "                            <!--<div class=\"error\" ng-message=\"required\">{{'Please Enter Email' | translate}}.</div>\n" +
    "                            <div class=\"clearfix\"></div>  \n" +
    "                            <div class=\"error\" ng-message=\"email\">{{'Your email address is invalid'|translate}}.</div>-->\n" +
    "                            <div class=\"error\">\n" +
    "                                <span class=\"error\" ng-show=\"(forgotPassword.$submitted || forgotPassword.email.$touched) && (forgotPassword.email.$pristine || forgotPassword.email.$invalid) && (forgotPassword.email.$error.required)\">{{'Please Enter Email'| translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(forgotPassword.$submitted || forgotPassword.email.$touched) && (forgotPassword.email.$pristine || forgotPassword.email.$invalid) && (forgotPassword.email.$error.pattern)\">{{'Enter valid email'| translate }}</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-footer\">\n" +
    "                    <button type=\"submit\" ng-disabled=\"forgotPassword.$invalid || disableButton\" class=\"btn btn-green btn-animate btn-block\" value=\"{{'Send' | translate}}\">\n" +
    "                        {{'Send' | translate}}\n" +
    "                        <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "         	</form>\n" +
    "            <p class=\"text-center account-type\">{{'Don\\'t have an account yet?'|translate}}<a ng-href=\"#/users/login_user\">&nbsp;{{'Sign up'|translate}}</a></p>\n" +
    "      	</div>\n" +
    "   	</div>\n" +
    "</section>");
}]);

angular.module("User/login_user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/login_user.tpl.html",
    "<div class=\"login-page\">\n" +
    "	<div class=\"user-login container\">\n" +
    "    	<div class=\"login-page-height login-user\">\n" +
    "            <div class=\"choose-register\">\n" +
    "                <div class=\"patient-block col-sm-6\">\n" +
    "                    <div class=\"choose-vendor media\">\n" +
    "                        <div class=\"media-left\">\n" +
    "                            <img src=\"assets/img/look-doctor-login.png\" alt=\"doctor\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">\n" +
    "                            <h3>{{'I am looking for a doctor'|translate}}</h3>\n" +
    "                            <p>Looking to make an appointment with one of ABS doc's Doctors or Dentists in your area</p>\n" +
    "                            <div class=\"button\">\n" +
    "                                <a href=\"#/users/register/patient{{widgetLink}}\" class=\"btn btn-animate\" >{{'JOIN US'|translate}}</a> \n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"doctor-block col-sm-6\">\n" +
    "                    <div class=\"choose-vendor media\">\n" +
    "                        <div class=\"media-left\">\n" +
    "                            <img src=\"assets/img/doctor-login.png\" alt=\"doctor\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">\n" +
    "                            <h3>{{'I am doctor'|translate}}</h3>\n" +
    "                            <p>Looking to become a member of ABS doc's network of practioners? Sign up to start taking appointments.</p>\n" +
    "                            <div class=\"button\">\n" +
    "                                <a href=\"#/users/register/doctor{{widgetLink}}\" class=\"btn btn-animate\">{{'JOIN US'|translate}}</a> \n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div> \n" +
    "            </div>\n" +
    "      	</div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/login.tpl.html",
    "<div class=\"login-page\">\n" +
    "    <div class=\"user-login container\">\n" +
    "    	<div class=\"login-page-height\">\n" +
    "            <div class=\"login-section\">\n" +
    "                <form class=\"form-login form-horizontal col-md-4\" name=\"loginForm\" ng-submit=\"model.login(loginForm.$valid)\" novalidate>\n" +
    "                   	<div class=\"clearfix\">\n" +
    "                        <h2 class=\"form-login-heading\"><span>Sign in to your account</span></h2>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group email\" ng-class=\"{ 'has-error' : (loginForm.$submitted || loginForm.email.$touched) && (loginForm.email.$pristine || loginForm.email.$invalid)}\">\n" +
    "			     		<input type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" ng-model=\"model.email\" ng-required=\"true\">\n" +
    "                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.email.$touched) && (loginForm.email.$pristine || loginForm.email.$invalid) && (loginForm.email.$error.required)\">{{'Enter Email'| translate }}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.email.$touched) && (loginForm.email.$pristine || loginForm.email.$invalid) && (loginForm.email.$error.email)\">{{ 'Enter your email' | translate }}</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group password\" ng-class=\"{ 'has-error' : (loginForm.$submitted || loginForm.password.$touched) && (loginForm.password.$pristine || loginForm.password.$invalid)}\">\n" +
    "                  		<input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" ng-model=\"model.password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.password.$touched) && (loginForm.password.$pristine || loginForm.password.$invalid) && (loginForm.password.$error.required)\">{{'Enter Password'| translate }}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.password.$touched) && (loginForm.password.$pristine || loginForm.password.$invalid) && (loginForm.password.$error.minlength)\">{{'Minimum length is 6'| translate}}</span>\n" +
    "                        <span class=\"error\" ng-show=\"(loginForm.$submitted || loginForm.password.$touched) && (loginForm.password.$pristine || loginForm.password.$invalid) && (loginForm.password.$error.maxlength)\">{{'Maximum length is 40'| translate }}</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                    	<div class=\"checkbox pull-left\">\n" +
    "                        	<label>\n" +
    "                                <input type=\"checkbox\" class=\"hide\" />keep me signed in\n" +
    "                                <span></span>\n" +
    "                        	</label>\n" +
    "                        </div>\n" +
    "                    	<button class=\"btn btn-white pull-right\" type=\"submit\">{{'Login'|translate}}</button>\n" +
    "                    </div>\n" +
    "                    <p class=\"forgot-password text-center\"><a href=\"#/users/forgot_password\" class=\"text-muted\">Forgot Password?</a></p>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"choose-register\">\n" +
    "            	<div class=\"row\">\n" +
    "                    <div class=\"patient-block col-sm-6\">\n" +
    "                        <div class=\"choose-vendor media\">\n" +
    "                        	<div class=\"media-left\">\n" +
    "                            	<img src=\"assets/img/look-doctor-login.png\" alt=\"doctor\" />\n" +
    "                            </div>\n" +
    "                            <div class=\"media-body\">\n" +
    "                            	<h3>{{'I am looking for a doctor'|translate}}</h3>\n" +
    "                            	<p>Looking to make an appointment with one of ABS doc's Doctors or Dentists in your area</p>\n" +
    "                                <div class=\"button\">\n" +
    "                                    <a href=\"#/users/register/patient{{widgetLink}}\" class=\"btn btn-animate\" >{{'JOIN US'|translate}}</a> \n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"doctor-block col-sm-6\">\n" +
    "                        <div class=\"choose-vendor media\">\n" +
    "                        	<div class=\"media-left\">\n" +
    "                                <img src=\"assets/img/doctor-login.png\" alt=\"doctor\" />\n" +
    "                            </div>\n" +
    "                            <div class=\"media-body\">\n" +
    "                            	<h3>{{'I am doctor'|translate}}</h3>\n" +
    "                            	<p>Looking to become a member of ABS doc's network of practioners? Sign up to start taking appointments.</p>\n" +
    "                                <div class=\"button\">\n" +
    "                                    <a href=\"#/users/register/doctor{{widgetLink}}\" class=\"btn btn-animate\">{{'JOIN US'|translate}}</a> \n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div> \n" +
    "               	</div>\n" +
    "            </div>\n" +
    "      	</div>\n" +
    "    </div>     \n" +
    "</div>");
}]);

angular.module("User/my_calender.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/my_calender.tpl.html",
    "<section class=\"pad-63\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">\n" +
    "            <h1>{{'My Calendar'|translate}}</h1>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12 calendar-block\">\n" +
    "            <div class=\"calendar-header text-center\">\n" +
    "                <h2 class=\"text-center\">{{ model.calendarTitle }}</h2>\n" +
    "                <div class=\"pull-left\">\n" +
    "                    <div class=\"btn-group\">\n" +
    "                        <button class=\"btn btn-lgreen\" mwl-date-modifier date=\"model.viewDate\"  decrement=\"model.calendarView\" ng-click=\"prev()\">\n" +
    "                            Previous\n" +
    "                        </button>\n" +
    "                        <button class=\"btn btn-default\" mwl-date-modifier date=\"model.viewDate\"  set-to-today ng-click=\"today()\">\n" +
    "                            Today\n" +
    "                        </button>\n" +
    "                        <button class=\"btn btn-lgreen\"  mwl-date-modifier  date=\"model.viewDate\" increment=\"model.calendarView\" ng-click=\"next()\">\n" +
    "                            Next\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"pull-right\">\n" +
    "                    <div class=\"btn-group\">\n" +
    "                        <!--<label class=\"btn btn-lgreen\" ng-model=\"model.calendarView\" uib-btn-radio=\"'year'\">Year</label>-->\n" +
    "                        <label class=\"btn btn-lgreen\" ng-model=\"model.calendarView\" uib-btn-radio=\"'month'\">Month</label>\n" +
    "                        <label class=\"btn btn-lgreen\" ng-model=\"model.calendarView\" uib-btn-radio=\"'week'\">Week</label>\n" +
    "                        <label class=\"btn btn-lgreen\" ng-model=\"model.calendarView\" uib-btn-radio=\"'day'\">Day</label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            \n" +
    "            <div class=\"calendar-body\">\n" +
    "                <mwl-calendar\n" +
    "                        events=\"model.events\"\n" +
    "                        view=\"model.calendarView\"\n" +
    "                        view-title=\"model.calendarTitle\"\n" +
    "                        view-date=\"model.viewDate\"\n" +
    "                        on-event-click=\"model.eventClicked(calendarEvent)\"\n" +
    "                        on-event-times-changed=\"model.eventTimesChanged(calendarEvent); calendarEvent.startsAt = calendarNewEventStart; calendarEvent.endsAt = calendarNewEventEnd\"\n" +
    "                        edit-event-html=\"'<i class=\\'glyphicon glyphicon-pencil\\'></i>'\"\n" +
    "                        delete-event-html=\"'<i class=\\'glyphicon glyphicon-remove\\'></i>'\"\n" +
    "                        on-edit-event-click=\"model.eventEdited(calendarEvent)\"\n" +
    "                        on-delete-event-click=\"model.eventDeleted(calendarEvent)\"\n" +
    "                        cell-is-open=\"model.isCellOpen\"\n" +
    "                        day-view-start=\"00:00\"\n" +
    "                        day-view-end=\"23:00\"\n" +
    "                        day-view-split=\"30\"\n" +
    "                        cell-modifier=\"model.modifyCell(calendarCell)\">\n" +
    "                </mwl-calendar>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("User/my_insurances.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/my_insurances.tpl.html",
    "<section class=\"clearfix pad-63 checklist-content\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">    \n" +
    "            <h1>{{'My Insurances'| translate}}</h1>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container remove-width\">\n" +
    "        <div class=\"form-content\">\n" +
    "            <form name=\"insuranceUpdate\" ng-submit=\"model.myInsurance(insuranceUpdate)\" novalidate>\n" +
    "                <div class=\"form-heading\">\n" +
    "                    <h2><span>{{'Select Your Insurances'| translate}}</span></h2>\n" +
    "                </div>\n" +
    "                <div class=\"form-body clearfix\">\n" +
    "                    <div class=\"form-group col-md-4\" ng-repeat=\"insurance in insurances\">\n" +
    "                        <label class=\"checkbox-field\">\n" +
    "                            <input class=\"hide\" type=\"checkbox\" checklist-model=\"user.insurance_ids\" checklist-value=\"insurance.id\" ng-change=\"check(insurance.id, checked)\" id=\"{{insurance.name}}\">\n" +
    "                            <span class=\"custom-check check-green\"></span>\n" +
    "                            <span><label for=\"{{insurance.name}}\">{{insurance.name}}</label></span>\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-footer\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"text-center\">\n" +
    "                            <button class=\"btn btn-green btn-animate\" type=\"submit\">{{'Update'| translate }}</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "<div oc-lazy-load='loadSeo'>\n" +
    "    <user-profile-seo></user-profile-seo>\n" +
    "</div>");
}]);

angular.module("User/my_languages.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/my_languages.tpl.html",
    "<section class=\"clearfix pad-63 checklist-content\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">    \n" +
    "            <h1>{{'My Languages'| translate}}</h1>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container remove-width\">\n" +
    "        <div class=\"form-content\">\n" +
    "        	<form name=\"languageUpdate\" ng-submit=\"model.myLanguage(languageUpdate)\" novalidate>\n" +
    "                <div class=\"form-heading\">\n" +
    "                    <h2><span>{{'Select Your Languages'| translate}}</span></h2>\n" +
    "                </div>\n" +
    "                <div class=\"form-body clearfix\">\n" +
    "                	<div class=\"form-group col-md-4\" ng-repeat=\"language in languages\">\n" +
    "                        <label class=\"checkbox-field\">\n" +
    "                            <input class=\"hide\" type=\"checkbox\" checklist-model=\"user.language_ids\" checklist-value=\"language.id\" ng-change=\"check(language.id, checked)\" id=\"{{language.name}}\">\n" +
    "                            <span class=\"custom-check check-green\"></span>\n" +
    "                            <span><label for=\"{{language.name}}\">{{language.name}}</label></span>\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-footer\">\n" +
    "                	<div class=\"row\">\n" +
    "                    	<div class=\"text-center\">\n" +
    "                			<button class=\"btn btn-green btn-animate\" type=\"submit\">{{'Update'| translate }}</button>\n" +
    "                		</div>\n" +
    "                  	</div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "   	</div>\n" +
    "</section>");
}]);

angular.module("User/my_specialties.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/my_specialties.tpl.html",
    "<section class=\"clearfix pad-63 checklist-content\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">    \n" +
    "            <h1>{{'My Specialties'| translate}}</h1>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container remove-width\">\n" +
    "        <div class=\"form-content\">\n" +
    "            <form name=\"specialityUpdate\" ng-submit=\"model.mySpeciality(specialityUpdate)\" novalidate>\n" +
    "                <div class=\"form-heading\">\n" +
    "                    <h2>{{'Select Your Specialties'| translate}}</h2>\n" +
    "                </div>\n" +
    "                <div class=\"form-body clearfix\">\n" +
    "                    <div class=\"form-group col-md-4\" ng-repeat=\"specialty in specialties\">\n" +
    "                        <label class=\"checkbox-field\">\n" +
    "                            <input class=\"hide\" type=\"checkbox\" checklist-model=\"user.specialty_ids\" checklist-value=\"specialty.id\" ng-change=\"check(specialty.id, checked)\"id=\"{{specialty.name}}\">\n" +
    "                            <span class=\"custom-check check-green\"></span>\n" +
    "                            <span><label for=\"{{specialty.name}}\">{{specialty.name}}</label></span>\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-footer\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"text-center\">\n" +
    "                            <button class=\"btn btn-green btn-animate\" type=\"submit\">{{'Update'| translate }}</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "<div oc-lazy-load='loadSeo'>\n" +
    "    <user-profile-seo></user-profile-seo>\n" +
    "</div>");
}]);

angular.module("User/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/register.tpl.html",
    "<div class=\"register\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"user-login col-sm-8 col-sm-offset-2 row\">\n" +
    "            <div class=\"user-signup\">\n" +
    "                <div class=\"form-heading\">\n" +
    "                    <h2 class=\"form-login-heading\">Create a new account\n" +
    "                        <a href=\"#/users/register/doctor\" ng-show=\"model.user_type == 'patient'\" title=\"{{'Not a Patient? Click here'|translate}}\" class=\"btn btn-white pull-right\">{{'Not a Patient? Click here'|translate}}</a>\n" +
    "                        <a href=\"#/users/register/patient\" ng-show=\"model.user_type == 'doctor'\" title=\"{{'Not a Doctor? Click here'|translate}}\" class=\"btn btn-white pull-right\">{{'Not a Doctor? Click here'|translate}}</a>\n" +
    "                    </h2>\n" +
    "                </div>\n" +
    "                <form class=\"form-login form-horizontal\" name=\"signupForm\" ng-submit=\"model.signup(signupForm.$valid)\" novalidate>\n" +
    "                    <div class=\"form-body\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label class=\"col-sm-12 form-name\">Name</label>\n" +
    "                            <div class=\"col-sm-6\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid)}\">\n" +
    "                                <input type=\"text\" class=\"form-control\" placeholder=\"Please enter your first name\" name=\"first_name\" ng-model=\"model.first_name\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-z A-Z]*$/\">\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.required)\">{{'Please enter your first name'| translate }} </span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.first_name.$touched) && (signupForm.first_name.$pristine || signupForm.first_name.$invalid) && (signupForm.first_name.$error.pattern)\">{{ 'Enter Valid name without number' | translate }}</span>\n" +
    "                                 \n" +
    "                            </div>\n" +
    "                                <div class=\"col-sm-6\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid)}\">\n" +
    "                                <input type=\"text\" class=\"form-control\" placeholder=\"Please enter your last name\" name=\"last_name\" ng-model=\"model.last_name\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-z A-Z]*$/\">\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.required)\">{{'Please enter your last name'| translate }} </span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.last_name.$touched) && (signupForm.last_name.$pristine || signupForm.last_name.$invalid) && (signupForm.last_name.$error.pattern)\">{{ 'Enter valid name without number' | translate }}</span>\n" +
    "\n" +
    "                                 \n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.gender_id.$touched) && (signupForm.gender_id.$pristine || signupForm.gender_id.$invalid)}\">\n" +
    "                            <div class=\"col-sm-6\">\n" +
    "                                <label class=\"col-sm-12\">Gender</label>\n" +
    "                                <select ng-model=\"model.gender_id\" ng-required=\"true\" name=\"gender_id\" class=\"form-control\">\n" +
    "                                    <option value=\"\">Select from list</option>\n" +
    "                                    <option ng-repeat=\"genderList in genderLists\" value=\"{{genderList.id}}\">{{genderList.name}}</option>\n" +
    "                                </select>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.gender_id.$touched) && (signupForm.gender_id.$pristine || signupForm.gender_id.$invalid) && (signupForm.gender_id.$error.required)\">{{'Select Gender'| translate }} </span>\n" +
    "                                <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.gender_id.$touched) && (signupForm.gender_id.$pristine || signupForm.gender_id.$invalid) && (signupForm.gender_id.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                 \n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"model.user_type == 'patient'\">\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.username.$touched) && (signupForm.username.$pristine || signupForm.username.$invalid)}\">\n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">Username</label>\n" +
    "                                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\" ng-model=\"model.username\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-z0-9]*$/\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.username.$touched) && (signupForm.username.$pristine || signupForm.username.$invalid) && (signupForm.username.$error.required)\">{{'Please enter your Username'| translate }} </span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.username.$touched) && (signupForm.username.$pristine || signupForm.username.$invalid) && (signupForm.username.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.username.$touched) && (signupForm.username.$pristine || signupForm.username.$invalid) && (signupForm.username.$error.pattern)\">{{ 'Enter valid username without space and caps' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-if=\"model.nameErr\">{{model.nameErr}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid)}\">\n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">Email</label>\n" +
    "                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"email\" ng-model=\"model.email\" ng-required=\"true\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.required)\">{{'Please enter your mail id'| translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.email)\">{{'Enter valid email'| translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"model.emailErr\">{{model.emailErr}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid)}\">\n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">Create a Password</label>\n" +
    "                                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" ng-model=\"model.password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.required)\">{{ 'Enter Password' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.minlength)\">{{ 'Minimum length is 6' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.maxlength)\">{{ 'Maximum length is 20' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"model.passwordErr\">{{model.passwordErr}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid)}\">\n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">Confirm a Password</label>\n" +
    "                                    <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" name=\"confirmPassword\" ng-model=\"model.confirm_password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.required)\">{{'Enter Confirm Password'| translate}}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.minlength)\">{{'Minimum length is 6'| translate}}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.maxlength)\">{{'Maximum length is 20'| translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.password.$dirty && signupForm.confirmPassword.$dirty) && (model.password != model.confirm_password)\">{{'Password Mismatch'| translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"model.confirmPasswordErr\">{{model.confirmPasswordErr}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"model.user_type == 'doctor'\">\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.username.$touched) && (signupForm.username.$pristine || signupForm.username.$invalid)}\">\n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">Username</label>\n" +
    "                                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\" ng-model=\"model.username\" ng-required=\"true\" ng-minlength=\"3\" ng-pattern=\"/^[a-z0-9]*$/\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.username.$touched) && (signupForm.username.$pristine || signupForm.username.$invalid) && (signupForm.username.$error.required)\">{{'Please enter your Username'| translate }} </span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.username.$touched) && (signupForm.username.$pristine || signupForm.username.$invalid) && (signupForm.username.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.username.$touched) && (signupForm.username.$pristine || signupForm.username.$invalid) && (signupForm.username.$error.pattern)\">{{ 'Enter valid username without space and caps' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-if=\"model.nameErr\">{{model.nameErr}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid)}\">\n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">Email</label>\n" +
    "                                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" ng-model=\"model.email\"  ng-required=\"true\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.required)\">{{'Please enter your mail id'| translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.email.$touched) && (signupForm.email.$pristine || signupForm.email.$invalid) && (signupForm.email.$error.email)\">{{'Enter valid email'| translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"model.emailErr\">{{model.emailErr}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid)}\">\n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">Create a Password</label>\n" +
    "                                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" ng-model=\"model.password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.required)\">{{ 'Please enter password' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.minlength)\">{{ 'Minimum length is 6' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.password.$touched) && (signupForm.password.$pristine || signupForm.password.$invalid) && (signupForm.password.$error.maxlength)\">{{ 'Maximum length is 20' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"model.passwordErr\">{{model.passwordErr}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid)}\">\n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">Confirm a Password</label>\n" +
    "                                    <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" name=\"confirmPassword\" ng-model=\"model.confirm_password\" ng-required=\"true\" ng-minlength=\"6\" ng-maxlength=\"40\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.required)\">{{'Please enter confirm password'| translate}}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.minlength)\">{{'Minimum length is 6'| translate}}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.confirmPassword.$pristine || signupForm.confirmPassword.$invalid) && (signupForm.confirmPassword.$error.maxlength)\">{{'Maximum length is 20'| translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.confirmPassword.$touched) && (signupForm.password.$dirty && signupForm.confirmPassword.$dirty) && (model.password != model.confirm_password)\">{{'Password Mismatch'| translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"model.confirmPasswordErr\">{{model.confirmPasswordErr}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid)}\">\n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">Phone</label>\n" +
    "                                    <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" name=\"phone\" ng-model=\"model.phone\" ng-required=\"true\" ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\">\n" +
    "                                     <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.required)\">{{'Enter Phone Number'| translate }} </span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.maxlength)\">{{ 'Maximum length is 12' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.minlength)\">{{ 'Minimum length is 8' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.phone.$touched) && (signupForm.phone.$pristine || signupForm.phone.$invalid) && (signupForm.phone.$error.pattern)\">{{'Enter Valid Mobile Number Without Character'| translate }} </span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.postal_code.$touched) && (signupForm.postal_code.$pristine || signupForm.postal_code.$invalid)}\">\n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">Postal Code</label>\n" +
    "                                    <input type=\"text\" class=\"form-control\" placeholder=\"Postal Code\" name=\"postal_code\" ng-model=\"model.postal_code\"  ng-required=\"true\" ng-minlength=\"3\" ng-maxlength=\"10\">\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.postal_code.$touched) && (signupForm.postal_code.$pristine || signupForm.postal_code.$invalid) && (signupForm.postal_code.$error.required)\">{{'Enter Postal Code'| translate }} </span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.postal_code.$touched) && (signupForm.postal_code.$pristine || signupForm.postal_code.$invalid) && (signupForm.postal_code.$error.minlength)\">{{ 'Minimum length is 3' | translate }}</span>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.postal_code.$touched) && (signupForm.postal_code.$pristine || signupForm.postal_code.$invalid) && (signupForm.postal_code.$error.maxlength)\">{{ 'Maximum length is 10' | translate }}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.specialty_id.$touched) && (signupForm.specialty_id.$pristine || signupForm.specialty_id.$invalid)}\">\n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">Specialty</label>\n" +
    "                                    <select ng-model=\"model.specialty_id\" ng-required=\"true\" name=\"specialty_id\" class=\"form-control\">\n" +
    "                                        <option value=\"\">Please enter specialty</option>\n" +
    "                                        <option ng-repeat=\"specialtyliList in specialtyliLists\" value=\"{{specialtyliList.id}}\">{{specialtyliList.name}}</option>\n" +
    "                                    </select>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.specialty_id.$touched) && (signupForm.specialty_id.$pristine || signupForm.specialty_id.$invalid) && (signupForm.specialty_id.$error.required)\">{{'Please select specialty'| translate }} </span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.language_id.$touched) && (signupForm.language_id.$pristine || signupForm.language_id.$invalid)}\">\n" +
    "                            	<div class=\"col-sm-6\">\n" +
    "                                    <label class=\"col-sm-12\">Language</label>\n" +
    "                                    <select ng-model=\"model.language_id\" ng-required=\"true\" name=\"language_id\" class=\"form-control\">\n" +
    "                                        <option value=\"\">Please enter language</option>\n" +
    "                                        <option ng-repeat=\"languageList in languageLists\" value=\"{{languageList.id}}\">{{languageList.name}}</option>\n" +
    "                                    </select>\n" +
    "                                    <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.language_id.$touched) && (signupForm.language_id.$pristine || signupForm.language_id.$invalid) && (signupForm.language_id.$error.required)\">{{'Please select language'| translate }} </span>                                    \n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "    \n" +
    "                        <div class=\"form-group\">\n" +
    "                        	<div class=\"col-sm-12\">\n" +
    "                                <div class=\"g-recaptcha\" vc-recaptcha key=\"model.captcha_site_key\" ng-class=\"{ 'has-error' : model.captchaErr}\"></div>\n" +
    "                                <span class=\"error\" ng-show=\"model.captchaErr\">{{model.captchaErr}}</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div class=\"form-group progress-reg\">\n" +
    "                        	<div class=\"col-sm-12\">\n" +
    "                                <p><span></span></p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "    \n" +
    "                        <div class=\"form-group checkbox-field\" ng-class=\"{ 'has-error' : (signupForm.$submitted || signupForm.termCondition.$touched) && (signupForm.termCondition.$pristine || signupForm.termCondition.$invalid)}\">\n" +
    "                            <div class=\"checkbox col-sm-12\">\n" +
    "                                <label>\n" +
    "                                    <input id=\"terms_cond\" class=\"hide\" type=\"checkbox\" name=\"termCondition\" ng-model=\"model.terms_conditions\" ng-required=\"true\">\n" +
    "                                    {{'I have read and accept ABS Terms of Use.'| translate }}\n" +
    "                                    <span></span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <span class=\"error\" ng-show=\"(signupForm.$submitted || signupForm.termCondition.$touched) && (signupForm.termCondition.$pristine || signupForm.termCondition.$invalid) && (signupForm.termCondition.$error.required)\">{{'Required'| translate }}</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-footer clearfix\">\n" +
    "                        <input type=\"hidden\" name=\"user_type\"  ng-value=\"model.user_type\"/>\n" +
    "                        <div ng-if=\"widgetLink == ''\">\n" +
    "                            <button class=\"btn btn-green btn-animate\" type=\"submit\">{{'Join Now' | translate }}</button>\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"widgetLink !== ''\" class=\"col-sm-9 col-sm-offset-2\">\n" +
    "                            <div class=\"pull-left\">\n" +
    "                                <a href=\"#/users/login\" class=\"btn btn-white btn-animate\">Back to Login</a>\n" +
    "                            </div>\n" +
    "                            <div class=\"pull-left\">\n" +
    "                                <button class=\"btn btn-green btn-animate\" type=\"submit\">{{'Join Now' | translate }}</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("User/updateDiseaseForm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/updateDiseaseForm.tpl.html",
    "<section>\n" +
    "    <div class=\"container\">\n" +
    "    	<div class=\"form-content\">\n" +
    "            <h2><span>{{'Specialty Diseases' | translate}}</span></h2>\n" +
    "      	</div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("User/user_profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/user_profile.tpl.html",
    "<section class=\"edit-profile pad-63\">\n" +
    "    <div class=\"container\">\n" +
    "    	<div class=\"page-head clearfix\">\n" +
    "            <h1 class=\"pull-left\">{{'Edit Profile'| translate}}</h1>\n" +
    "            <a href=\"#/doctor/{{$root.auth.username}}\" title=\"{{'View Profile' | translate}}\" class=\"btn btn-green pull-right\" ng-if=\"model.user_profile.user_type == 'doctor'\">{{'View Profile' | translate}}</a>\n" +
    "        </div>\n" +
    "        <div class=\"form-content\">\n" +
    "        	<form enctype=\"multipart/form-data\" name=\"userprofileEdit\" ng-submit=\"model.userProfile(userprofileEdit.$valid)\" novalidate>\n" +
    "           		<div class=\"form-body\">\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <div class=\"form-group text-center\">\n" +
    "                            <h3>{{'Upload your picture to help your medical team'| translate}}</h3>\n" +
    "                            <div class=\"form-group\">\n" +
    "                            	<a href=\"#/user/{{user.username}}\" title=\"{{user.username}}\" class=\"thumbnail center-block\">\n" +
    "                                    <span>\n" +
    "                                        <img ng-if=\"user.user_avatar_source_id != model.ConstSocialLogin.Twitter && user.user_avatar_source_id != model.ConstSocialLogin.Github\" ng-src=\"{{user.attachmentable.thumb.medium}}\" title=\"{{user.username}}\" class=\"\" alt=\"{{user.username}}\">\n" +
    "                                        <img ng-if=\"user.user_avatar_source_id == model.ConstSocialLogin.Twitter || user.user_avatar_source_id == model.ConstSocialLogin.Github\" ng-src=\"{{user.attachmentable.thumb.medium}}\" title=\"{{user.username}}\" class=\"\" alt=\"{{user.username}}\" height=\"{{model.thumb.medium.height}}\" width=\"{{model.thumb.medium.width}}\">\n" +
    "                                    </span>\n" +
    "                                </a>\n" +
    "                                <input class=\"input-file hide\" type=\"file\" ngf-select ng-model=\"file\" name=\"file\" ngf-pattern=\"'image/*'\" ngf-accept=\"'image/*'\" ngf-max-size=\"2MB\" id=\"inputFile\">\n" +
    "                                <label for=\"inputFile\">\n" +
    "                                    <span class=\"center-block\"><i class=\"fa fa-cloud-upload\"></i>Change picture...</span>\n" +
    "                                </label>\n" +
    "                                <span class=\"error\" ng-show=\"userprofileEdit.file.$error.required\" class=\"text-danger help-block\">{{'Allowed extensions: jpg, jpeg, gif, png'|translate}}</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                   	</div>\n" +
    "                    <div class=\"col-md-9 row\">\n" +
    "                        <div class=\"col-md-12 personal-info row\">\n" +
    "                            <h3>{{'General Info'| translate}}</h3>\n" +
    "                            <div class=\"row\">\n" +
    "                            	<div class=\"clearfix\">\n" +
    "                                	<div class=\"form-group col-md-6\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.first_name.$touched) && (userprofileEdit.first_name.$pristine || userprofileEdit.first_name.$invalid) && (userprofileEdit.first_name.$error.required)}\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" name=\"first_name\" id=\"first_name\" placeholder=\"{{'First Name'| translate}}\" ng-model=\"model.user_profile.first_name\" ng-required=\"true\" ng-minlength=\"3\" ng-maxlength=\"25\" ng-pattern=\"/^[a-z A-Z]*$/\"/>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.first_name.$touched) && (userprofileEdit.first_name.$pristine || userprofileEdit.first_name.$invalid) && (userprofileEdit.first_name.$error.required)\">{{'Enter First Name'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.first_name.$touched) && (userprofileEdit.first_name.$pristine || userprofileEdit.first_name.$invalid) && (userprofileEdit.first_name.$error.minlength)\">{{'Minimum length is 3'| translate}}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.first_name.$touched) && (userprofileEdit.first_name.$pristine || userprofileEdit.first_name.$invalid) && (userprofileEdit.first_name.$error.maxlength)\">{{'Maximum length is 25'| translate}}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.first_name.$touched) && (userprofileEdit.first_name.$pristine || userprofileEdit.first_name.$invalid) && (userprofileEdit.first_name.$error.pattern)\">{{'Enter valid name without number'| translate}}</span>\n" +
    "                                    </div>\n" +
    "                                	<div class=\"form-group col-md-6\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.last_name.$touched) && (userprofileEdit.last_name.$pristine || userprofileEdit.last_name.$invalid) && (userprofileEdit.last_name.$error.required)}\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" name=\"last_name\" id=\"last_name\" placeholder=\"{{'Last Name'| translate}}\" ng-model=\"model.user_profile.last_name\" ng-required=\"true\" ng-minlength=\"1\" ng-maxlength=\"20\" ng-pattern=\"/^[a-z A-Z]*$/\"/>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.last_name.$touched) && (userprofileEdit.last_name.$pristine || userprofileEdit.last_name.$invalid) && (userprofileEdit.last_name.$error.required)\">{{'Enter Last Name'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.last_name.$touched) && (userprofileEdit.last_name.$pristine || userprofileEdit.last_name.$invalid) && (userprofileEdit.last_name.$error.minlength)\">{{'Minimum length is 1'| translate}}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.last_name.$touched) && (userprofileEdit.last_name.$pristine || userprofileEdit.last_name.$invalid) && (userprofileEdit.last_name.$error.maxlength)\">{{'Maximum length is 20'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.last_name.$touched) && (userprofileEdit.last_name.$pristine || userprofileEdit.last_name.$invalid) && (userprofileEdit.last_name.$error.pattern)\">{{'Enter valid name without number'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"clearfix\">\n" +
    "                                	<div class=\"form-group col-md-6\" ng-show=\"model.user_profile.user_type == 'doctor'\" >\n" +
    "                                        <input type=\"text\" class=\"form-control\" name=\"dr_title\" id=\"dr_title\" placeholder=\"{{'Title'| translate}}\" ng-model=\"model.user_profile.dr_title\" ng-required=\"false\"/>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\" ng-show=\"model.user_profile.user_type == 'doctor'\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" name=\"practice_name\" id=\"practice_name\" placeholder=\"{{'Practice Name'| translate}}\" ng-model=\"model.user_profile.practice_name\"/>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.practice_name.$touched) && (userprofileEdit.practice_name.$pristine || userprofileEdit.practice_name.$invalid) && (userprofileEdit.practice_name.$error.url)\">{{'Enter Practice Name'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.practice_name.$touched) && (userprofileEdit.practice_name.$pristine || userprofileEdit.practice_name.$invalid) && (userprofileEdit.practice_name.$error.minlength)\">{{'Minimum length is 1'| translate}}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"clearfix\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <div class=\"input-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.dob.$touched) && (userprofileEdit.dob.$pristine || userprofileEdit.dob.$invalid) && (userprofileEdit.dob.$error.required)}\">\n" +
    "                                            <span class=\"input-group-addon\"><i class=\"fa fa-calendar fa-fw\"></i></span>\n" +
    "                                            <input class=\"form-control\" ng-model=\"model.user_profile.dob\" data-date-format=\"yyyy-MM-dd\" data-start-date=\"{{date|date:'yyyy-MM-dd'}}\" data-max-date=\"{{dateBlockeBefore}}\"  data-autoclose=\"1\" name=\"dob\" bs-datepicker type=\"appoint_date\" required=\"true\" placeholder=\"Date\">\n" +
    "                                        </div>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.dob.$touched) && (userprofileEdit.dob.$pristine || userprofileEdit.dob.$invalid) && (userprofileEdit.dob.$error.required)\">{{'Choose DOB'| translate }} </span>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"form-group col-md-6\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.gender_id.$touched) && (userprofileEdit.gender_id.$pristine || userprofileEdit.gender_id.$invalid) && (userprofileEdit.gender_id.$error.required)}\">\n" +
    "                                        <select class=\"form-control\" name=\"gender_id\" id=\"gender_id\" ng-model=\"model.user_profile.gender_id\" ng-required=\"true\" convert-to-number>  \n" +
    "                                            <option value=\"\">{{'Select Gender'| translate}}</option>\n" +
    "                                            <option ng-repeat=\"gender in genderArray\" value=\"{{gender.id}}\" ng-selected=\"model.user_profile.gender_id == gender.id\">{{gender.name}}</option>	 </select>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.gender_id.$touched) && (userprofileEdit.gender_id.$pristine || userprofileEdit.gender_id.$invalid) && (userprofileEdit.gender_id.$error.url)\">{{'Choose Gender'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                    \n" +
    "                                    <div class=\"form-group col-md-6\" ng-show=\"model.user_profile.user_type == 'doctor'\">\n" +
    "                                        <select class=\"form-control\" name=\"notification_type_id\" ng-model=\"model.user_profile.notification_type_id\">  \n" +
    "                                            <option ng-repeat=\"notification_type in notificationArray\" value=\"{{notification_type.id}}\" ng-selected=\"model.user_profile.notification_type_id == notification_type.id\">{{notification_type.name}}</option>	                         \n" +
    "                                        </select>\n" +
    "                                    </div>  \n" +
    "                                    \n" +
    "                                    <div class=\"form-group col-md-6\" ng-show=\"model.user_profile.user_type == 'doctor'\">\n" +
    "                                        <label class=\"checkbox-field\">\n" +
    "                                            <input class=\"hide\" id=\"is_newpatient_accepted\" type=\"checkbox\" name=\"is_newpatient_accepted\" ng-model=\"model.user_profile.is_newpatient_accepted\" ng-checked=\"model.user_profile.is_newpatient_accepted == true\">\n" +
    "                                            <span class=\"custom-check\"></span>\n" +
    "                                            <span>\n" +
    "                                                    <label for=\"is_newpatient_accepted\">{{'Approval Needed for patient booking appointments'| translate }}</label>\n" +
    "                                            </span>\n" +
    "                                        </label>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-12 location-info row\">\n" +
    "                            <h3>{{'Location Info'| translate}}</h3> \n" +
    "                            <div class=\"row\">\n" +
    "                            	<div class=\"col-md-6\">\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.required)}\">\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <span class=\"input-group-addon\"><i class=\"fa fa-phone fa-fw\"></i></span>\n" +
    "                                            <input type=\"text\" class=\"form-control\" name=\"phone\" id=\"phone\" placeholder=\"{{'Mobile'| translate}}\" ng-model=\"model.user_profile.phone\" ng-required=\"true\" ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\"/>\n" +
    "                                        </div>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.required)\">{{'Enter Mobile Number'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.pattern)\">{{'Enter Valid Mobile Number Without Character'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.minlength)\">{{'Minimum Length is 8'| translate }} </span>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.phone.$touched) && (userprofileEdit.phone.$pristine || userprofileEdit.phone.$invalid) && (userprofileEdit.phone.$error.maxlength)\">{{'Maximum Length is 12'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.address.$touched) && (userprofileEdit.address.$pristine || userprofileEdit.address.$invalid) && (userprofileEdit.address.$error.required)}\">\n" +
    "                                   		<textarea class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"{{'Address'| translate}}\" ng-model=\"model.user_profile.address\" required></textarea>\n" +
    "                  						<span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.address.$touched) && (userprofileEdit.address.$pristine || userprofileEdit.address.$invalid) && (userprofileEdit.address.$error.required)\">{{'Enter Address'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                          		</div>\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.city_id.$touched) && (userprofileEdit.city_id.$pristine || userprofileEdit.city_id.$invalid) && (userprofileEdit.city_id.$error.required)}\">\n" +
    "                                        <select class=\"form-control\" name=\"city_id\" id=\"city_id\" ng-model=\"model.user_profile.city_id\" convert-to-number>  \n" +
    "                                            <option value=\"\">{{'City'| translate}}</option>                    \n" +
    "                                            <option ng-repeat=\"city in cityArray\" value=\"{{city.id}}\" ng-selected=\"model.user_profile.city_id == city.id\">{{city.name}}</option>   \n" +
    "                                        </select>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.city_id.$touched) && (userprofileEdit.city_id.$pristine || userprofileEdit.city_id.$invalid) && (userprofileEdit.city_id.$error.required)\">{{'Choose City'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.country_id.$touched) && (userprofileEdit.country_id.$pristine || userprofileEdit.country_id.$invalid) && (userprofileEdit.country_id.$error.required)}\">\n" +
    "                                        <select class=\"form-control\" name=\"country_id\" id=\"country_id\" ng-model=\"model.user_profile.country_id\" convert-to-number>  \n" +
    "                                            <option value=\"\">{{'Country'| translate}}</option>                    \n" +
    "                                            <option ng-repeat=\"country in countryArray\" value=\"{{country.id}}\" ng-selected=\"model.user_profile.country_id == country.id\">{{country.name}}</option>	  \n" +
    "                                        </select>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.country_id.$touched) && (userprofileEdit.country_id.$pristine || userprofileEdit.country_id.$invalid) && (userprofileEdit.country_id.$error.required)\">{{'Enter Country'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group\" ng-class=\"{ 'has-error' : (userprofileEdit.$submitted || userprofileEdit.postal_code.$touched) && (userprofileEdit.postal_code.$pristine || userprofileEdit.postal_code.$invalid) && (userprofileEdit.postal_code.$error.required)}\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" name=\"postal_code\" id=\"postal_code\" placeholder=\"{{'Postal Code'| translate}}\" ng-model=\"model.user_profile.postal_code\" ng-required=\"true\" ng-minlength=\"3\"/>\n" +
    "                                        <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.postal_code.$touched) && (userprofileEdit.postal_code.$pristine || userprofileEdit.postal_code.$invalid) && (userprofileEdit.postal_code.$error.required)\">{{'Enter Postal Code'| translate }} </span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                        	</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-12 professional-info row\">\n" +
    "                            <div ng-show=\"model.user_profile.user_type == 'doctor'\">  \n" +
    "                                <h3>{{'Professional Info:'| translate}}</h3>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <textarea class=\"form-control\" id=\"booking_instructions\" name=\"booking_instructions\" placeholder=\"{{'Booking Instructions'| translate}}\" ng-model=\"model.user_profile.booking_instructions\"></textarea>\n" +
    "                             	</div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <textarea class=\"form-control\" id=\"about_me\" name=\"about_me\" placeholder=\"{{'About me'| translate}}\" ng-model=\"model.user_profile.about_me\"></textarea>\n" +
    "                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.about_me.$touched) && (userprofileEdit.about_me.$pristine || userprofileEdit.about_me.$invalid) && (userprofileEdit.about_me.$error.required)\">{{'Enter Professional Statement'| translate }} </span>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <textarea class=\"form-control\" id=\"board_certifications\" name=\"board_certifications\" placeholder=\"{{'Board Certifications'| translate}}\" ng-model=\"model.user_profile.board_certifications\"></textarea>\n" +
    "                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.board_certifications.$touched) && (userprofileEdit.board_certifications.$pristine || userprofileEdit.board_certifications.$invalid) && (userprofileEdit.board_certifications.$error.required)\">{{'Enter Board Certifications'| translate }} </span>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <textarea class=\"form-control\" id=\"memberships\" name=\"memberships\" placeholder=\"{{'Professional Memberships'| translate}}\" ng-model=\"model.user_profile.memberships\"></textarea>\n" +
    "                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.memberships.$touched) && (userprofileEdit.memberships.$pristine || userprofileEdit.memberships.$invalid) && (userprofileEdit.memberships.$error.required)\">{{'Enter Professional Memberships'| translate }} </span>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <textarea class=\"form-control\" id=\"awards\" name=\"awards\" placeholder=\"{{'Awards'| translate}}\" ng-model=\"model.user_profile.awards\"></textarea>\n" +
    "                                    <span class=\"error\" ng-show=\"(userprofileEdit.$submitted || userprofileEdit.awards.$touched) && (userprofileEdit.awards.$pristine || userprofileEdit.awards.$invalid) && (userprofileEdit.awards.$error.required)\">{{'Enter Awards and Publications'| translate }} </span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-footer\">\n" +
    "                    <div class=\"col-md-offset-3\">\n" +
    "                        <button class=\"btn btn-green btn-animate\" type=\"submit\">{{'Update'| translate }}</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("User/user_view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("User/user_view.tpl.html",
    "<div class=\"user-view clearfix\">\n" +
    "    \n" +
    "    <div class=\"user-profile\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"media\">\n" +
    "                <div class=\"media-left\">\n" +
    "                    <a href=\"#/doctor/{{model.user.username}}\" title=\"{{model.user.username}}\" class=\"thumbnail\">\n" +
    "                        <img ng-if=\"model.user.user_avatar_source_id != model.ConstSocialLogin.Twitter && model.user.user_avatar_source_id != model.ConstSocialLogin.Github\" ng-src=\"{{model.user.attachmentable.thumb.medium}}\" title=\"{{model.user.username}}\" class=\"\" alt=\"{{model.user.username}}\">\n" +
    "                        <img ng-if=\"model.user.user_avatar_source_id == model.ConstSocialLogin.Twitter || model.user.user_avatar_source_id == model.ConstSocialLogin.Github\" ng-src=\"{{model.user.attachmentable.thumb.medium}}\" title=\"{{model.user.username}}\" class=\"\" alt=\"{{model.user.username}}\" height=\"{{model.thumb.medium.height}}\" width=\"{{model.thumb.medium.width}}\">\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div class=\"media-body\">\n" +
    "                    <h3>{{'Dr.'| translate }}{{model.user.user_profile.first_name}} {{model.user.user_profile.last_name}}</h3>\n" +
    "                    <p>{{model.user.user_profile.specialties[0]['name']}} {{practice}}</p>\n" +
    "                    <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"overAllRating\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserReviews') > -1\"></input-stars>\n" +
    "                    <ul class=\"list-inline bottom-list\">\n" +
    "                        <li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Photos') > -1\">\n" +
    "                            <clinic-photos></clinic-photos>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserReviews') > -1\">\n" +
    "                            <a class=\"btn\" href=\"javascript:void(0)\" ng-click=\"gotoAnchor('VerifiedPatientReviews')\" title=\"{{'Verified Patient Reviews'| translate}}\">{{'Read patient reviews'| translate}}</a>\n" +
    "                        </li>\n" +
    "                        \n" +
    "                        <li>\n" +
    "                            <p ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserFavorites') > -1 && $root.auth.role_id == model.ConstUserType.User && model.isAuthenticated()\">\n" +
    "                                <span favorite-add></span>\n" +
    "                            </p>\n" +
    "                        </li>\n" +
    "                        \n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"user-map-location\">\n" +
    "        <div map-lazy-load=\"https://maps.google.com/maps/api/js\">\n" +
    "            <ng-map class=\"map-height\" default-style=\"true\" center=\"[{{model.user.user_profile.latitude}}, {{model.user.user_profile.longitude}}]\" zoom=\"12\">\n" +
    "                <marker id=\"myloc\" position=\"{{model.user.user_profile.latitude}}, {{model.user.user_profile.longitude}}\" on-click=\"map.showInfoWindow('user-location')\" icon=\"assets/img/hospital-marker.png\">\n" +
    "                </marker>\n" +
    "                <info-window id=\"user-location\" visible-on-marker=\"myloc\">\n" +
    "                    <div ng-non-bindable>\n" +
    "                        <div id=\"bodyContent\">\n" +
    "                            <h4> {{'Dr.'| translate }}{{model.user.user_profile.first_name}} {{model.user.user_profile.last_name}}</h4>\n" +
    "                            <p>{{model.user.user_profile.address}},</p>\n" +
    "                            <p>{{model.user.user_profile.postal_code}} {{model.user.user_profile.city.name}}, {{model.user.user_profile.country.name}}</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </info-window>\n" +
    "            </ng-map>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"container appmt-details\">\n" +
    "        <div class=\"col-md-8 col-lg-7 pull-right\">\n" +
    "            <h2 class=\"text-center\">Book Appointment - <span>{{today.year}}</span></h2>\n" +
    "			<div class=\"search-responsive\">\n" +
    "                <div class=\"search-result\">\n" +
    "                    <div class=\"week-hender\">\n" +
    "                        <ul class=\"search-week-ul list-inline text-center\">\n" +
    "                            <li class=\"search-left-arrow\"><a href=\"javascript:void(0)\" ng-click=\"prevWeek()\"> <i class=\"fa fa-angle-left fa-2x\"></i></a></li>\n" +
    "                            <li>\n" +
    "                                <ul class=\"list-unstyled\">\n" +
    "                                    <li>{{today.day}}</li>\n" +
    "                                    <li>{{today.date}}</li>\n" +
    "                                </ul>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <ul class=\"list-unstyled\">\n" +
    "                                    <li>{{day2.day}}</li>\n" +
    "                                    <li>{{day2.date}}</li>\n" +
    "                                </ul>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <ul class=\"list-unstyled\">\n" +
    "                                    <li>{{day3.day}}</li>\n" +
    "                                    <li>{{day3.date}}</li>\n" +
    "                                </ul>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <ul class=\"list-unstyled\">\n" +
    "                                    <li>{{day4.day}}</li>\n" +
    "                                    <li>{{day4.date}}</li>\n" +
    "                                </ul>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <ul class=\"list-unstyled\">\n" +
    "                                    <li>{{day5.day}}</li>\n" +
    "                                    <li>{{day5.date}}</li>\n" +
    "                                </ul>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <ul class=\"list-unstyled\">\n" +
    "                                    <li>{{day6.day}}</li>\n" +
    "                                    <li>{{day6.date}}</li>\n" +
    "                                </ul>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <ul class=\"list-unstyled\">\n" +
    "                                    <li>{{day7.day}}</li>\n" +
    "                                    <li>{{day7.date}}</li>\n" +
    "                                </ul>\n" +
    "                            </li>\n" +
    "                            <li class=\"search-right-arrow\"><a href=\"javascript:void(0)\" ng-click=\"nextWeek()\"> <i class=\"fa fa-angle-right fa-2x\"></i></a></li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <div class=\"doctor-list clearfix\">\n" +
    "                        <div class=\"doctor-booking-details\">\n" +
    "                            <ul class=\"search-week-ul list-inline text-center\">\n" +
    "                                <li>\n" +
    "                                    <ul class=\"list-unstyled\" ui-if=\"!!searchLists[today.day].length\">\n" +
    "                                        <li ng-repeat=\"todaySlot in searchLists[today.day] track by $index\">\n" +
    "                                            <span ng-show=\"todaySlot != '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{today.date}}/{{todaySlot}}\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{today.date}}/{{todaySlot}}\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                            <span ng-show=\"todaySlot == '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                        </li>\n" +
    "                                    </ul>\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    <ul class=\"list-unstyled\" ui-if=\"!!searchLists[day2.day].length\">\n" +
    "                                        <li ng-repeat=\"Day2 in searchLists[day2.day] track by $index\">\n" +
    "                                            <span ng-show=\"Day2 != '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{day2.date}}/{{Day2}}\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{day2.date}}/{{Day2}}\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                            <span ng-show=\"Day2 == '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                        </li>\n" +
    "                                    </ul>\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    <ul class=\"list-unstyled\" ui-if=\"!!searchLists[day3.day].length\">\n" +
    "                                        <li ng-repeat=\"Day3 in searchLists[day3.day] track by $index\">\n" +
    "                                            <span ng-show=\"Day3 != '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{day3.date}}/{{Day3}}\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{day3.date}}/{{Day3}}\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                            <span ng-show=\"Day3 == '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                        </li>\n" +
    "                                    </ul>\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    <ul class=\"list-unstyled\" ui-if=\"!!searchLists[day4.day].length\">\n" +
    "                                        <li ng-repeat=\"Day4 in searchLists[day4.day] track by $index\">\n" +
    "                                            <span ng-show=\"Day4 != '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{day4.date}}/{{Day4}}\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{day4.date}}/{{Day4}}\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                            <span ng-show=\"Day4 == '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                        </li>\n" +
    "                                    </ul>\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    <ul class=\"list-unstyled\" ui-if=\"!!searchLists[day5.day].length\">\n" +
    "                                        <li ng-repeat=\"Day5 in searchLists[day5.day] track by $index\">\n" +
    "                                            <span ng-show=\"Day5 != '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{day5.date}}/{{Day5}}\" class=\"btn\">{{Day5}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{day5.date}}/{{Day5}}\" class=\"btn\">{{Day5}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                            <span ng-show=\"Day5 == '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{Day5}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{Day5}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                        </li>\n" +
    "                                    </ul>\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    <ul class=\"list-unstyled\" ui-if=\"!!searchLists[day6.day].length\">\n" +
    "                                        <li ng-repeat=\"Day6 in searchLists[day6.day] track by $index\">\n" +
    "                                            <span ng-show=\"Day6 != '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{day6.date}}/{{Day6}}\" class=\"btn\">{{Day6}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{day6.date}}/{{Day6}}\" class=\"btn\">{{Day6}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                            <span ng-show=\"Day6 == '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{Day6}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{Day6}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                        </li>\n" +
    "                                    </ul>\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    <ul class=\"list-unstyled\" ui-if=\"!!searchLists[day7.day].length\">\n" +
    "                                        <li ng-repeat=\"Day7 in searchLists[day7.day] track by $index\">\n" +
    "                                            <span ng-show=\"Day7 != '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{day7.date}}/{{Day7}}\" class=\"btn\">{{Day7}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"#/appointments/booking/{{model.user.id}}/{{day7.date}}/{{Day7}}\" class=\"btn\">{{Day7}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                             <span ng-show=\"Day7 == '--'\">\n" +
    "                                                <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{Day7}}</a>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore\">\n" +
    "                                                    <a href=\"javascript:void(0)\" class=\"btn\">{{Day7}}</a>\n" +
    "                                                </span>\n" +
    "                                            </span>\n" +
    "                                        </li>\n" +
    "                                    </ul>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                            <div class=\"showlessmore\" ng-if=\"searchLists[today.day].length > appointmentLoadMore || searchLists[day1.day].length > appointmentLoadMore || searchLists[day2.day].length > appointmentLoadMore || searchLists[day3.day].length > appointmentLoadMore || searchLists[day4.day].length > appointmentLoadMore || searchLists[day5.day].length > appointmentLoadMore || searchLists[day6.day].length > appointmentLoadMore || searchLists[day7.day].length > appointmentLoadMore\">\n" +
    "                                <span class=\"showmore_btn show\">\n" +
    "                                    <button ng-click=\"loadMore()\" class=\"btn btn-dk-blue\">More&nbsp;<i class=\"fa fa-angle-down\"></i></button>\n" +
    "                                </span>\n" +
    "                                <span class=\"showless_btn hide\">\n" +
    "                                    <button ng-click=\"showLess()\" class=\"btn btn-red\">Less&nbsp;<i class=\"fa fa-angle-up\"></i></button>\n" +
    "                                </span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"col-md-4 col-lg-5\">\n" +
    "            <div class=\"qualify-exp\">\n" +
    "                <!--<h3>{{'Qualifications and Experience'| translate}}</h3>-->\n" +
    "                <div class=\"form-group clearfix specialty\">\n" +
    "                    <label>{{'Specialties'| translate}}</label>\n" +
    "                    <ul class=\"list-unstyled field-data\">\n" +
    "                        <li class=\"sg-para3 sg-navy specialty\" ng-repeat=\"specialty in model.user.user_profile.specialties\">\n" +
    "                            {{specialty.name}}\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group clearfix language\">\n" +
    "                    <label>{{'Languages Spoken'| translate}}</label>\n" +
    "                    <ul class=\"list-unstyled field-data\">\n" +
    "                        <li class=\"sg-para3 sg-navy language\" ng-repeat=\"language in model.user.user_profile.languages\">\n" +
    "                            {{language.name}} \n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"form-group clearfix education\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserEducations') > -1\">\n" +
    "                    <label>{{'Education'| translate}}</label>\n" +
    "                    <ul class=\"list-unstyled field-data\">\n" +
    "                        <li class=\"sg-para3 sg-navy\" ng-repeat=\"education in model.user.user_profile.educations\">\n" +
    "                            {{education.education}} - {{education.location}} - {{education.organization}}  \n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"form-group clearfix certificate\">\n" +
    "                    <label>{{'Board Certifications'| translate}}</label>\n" +
    "                    <div class=\"field-data\" hm-read-more\n" +
    "                            hm-text=\"{{model.user.user_profile.board_certifications}}\" \n" +
    "                            hm-limit=\"500\" \n" +
    "                            hm-more-text=\"read more\" \n" +
    "                            hm-less-text=\"read less\"\n" +
    "                            hm-dots-class=\"dots\"\n" +
    "                            hm-link-class=\"links\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group clearfix statement\">\n" +
    "                    <label>{{'Professional Statement'| translate}}</label>\n" +
    "                    <div class=\"field-data\" hm-read-more\n" +
    "                            hm-text=\"{{model.user.user_profile.about_me}}\" \n" +
    "                            hm-limit=\"500\" \n" +
    "                            hm-more-text=\"read more\" \n" +
    "                            hm-less-text=\"read less\"\n" +
    "                            hm-dots-class=\"dots\"\n" +
    "                            hm-link-class=\"links\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group clearfix membership\">\n" +
    "                    <label>{{'Memberships'| translate}}</label>\n" +
    "                    <div class=\"field-data\">\n" +
    "                        {{model.user.user_profile.memberships}} \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group clearfix awards\">\n" +
    "                    <label>{{'Awards'| translate}}</label>\n" +
    "                    <div class=\"field-data\">\n" +
    "                        {{model.user.user_profile.awards}} \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "            <div class=\"col-md-12 book-instruction\">\n" +
    "            <h3>{{'Booking Instructions'| translate}}</h3>\n" +
    "            <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-body\">\n" +
    "                    {{model.user.user_profile.booking_instructions}} \n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12 patient-reviews\">\n" +
    "            <div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserReviews') > - 1\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <div class=\"\" id=\"VerifiedPatientReviews\">\n" +
    "                        <h3 class=\"pull-left\">{{'Verified Patient Reviews'| translate}}</h3>\n" +
    "                        <!--<div class=\"add-review pull-right\" ng-show=\"model.isAuthenticated()\">\n" +
    "                            <a href=\"#/user/review/add/{{model.user.id}}\" class=\"btn btn-green btn-animate\"><i class=\"fa fa-plus-circle fa-fw\"></i>{{'Add Review'|translate}}</a>\n" +
    "                        </div>-->\n" +
    "                        <div class=\"clearfix\"></div>\n" +
    "                        <!-- Add Review if the login user is patient -->\n" +
    "                        <div ng-if=\"isvisited\">\n" +
    "                            <div ng-if=\"reviewEnable\">\n" +
    "                                <div class=\"col-md-12\">\n" +
    "                                    <rating-stars></rating-stars>\n" +
    "                                </div>        \n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div ng-if=\"!reviewEnable\">\n" +
    "                            <div class=\"no-review\">\n" +
    "                                <div ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\" class=\"alert alert-danger\">\n" +
    "                                    Doctor not able to add review\n" +
    "                                </div>\n" +
    "                                <div ng-if=\"$root.auth.role_id == model.ConstUserType.User\" class=\"alert alert-danger\">\n" +
    "                                    <div ng-if=\"alreadyadded\">\n" +
    "                                        You are not able to add more than one review for a doctor\n" +
    "                                    </div>\n" +
    "                                    <div ng-if=\"!isvisited\">\n" +
    "                                        You are not able to add the review. Need to visit the doctor atleast once.\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"profile-review row\" ng-repeat=\"review in doctorReviews\" ng-if=\"doctorReviews.length > 0\">\n" +
    "                            <div class=\"col-md-5 col-lg-6 profile-review-author\">\n" +
    "                                <h4>{{ review.created_at | dateFormat }}</h4>\n" +
    "                                <span>{{'by '| translate}} {{review.pet_name}}</span>\n" +
    "                                <span>{{'(Verified Patient)' | translate}}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-7 col-lg-6\">\n" +
    "                                <div class=\"row separate-reviews\">\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                        <p>{{'Overall Rating'| translate}}</p>\n" +
    "                                        <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star-o\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"review.bedside_rate\"></input-stars>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                        <p>{{'Bedside Manner'| translate}}</p>\n" +
    "                                        <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star-o\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"review.bedside_rate\"></input-stars></rating-stars>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                        <p>{{'Wait Time'| translate}}</p>\n" +
    "                                        <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star-o\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"review.waittime_rate\"></input-stars></rating-stars>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"clearfix review-msg\">\n" +
    "                                    <p>{{review.review}}</p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"alert alert-info\" ng-show=\"metadata.total === 0\">{{'Not yet reviewed'|translate}}</div>\n" +
    "                       <div class=\"paging clearfix text-center\" ng-show=\"meta.pagination.total > 0\">\n" +
    "                            <uib-pagination previous-text=\"&#xf104\" next-text=\"&#xf105\" total-items=\"_metadata.total\" num-pages=\"meta.pagination.total_pages\" ng-model=\"currentPage\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-link-numbers=\"true\" rotate=\"false\" items-per-page=\"meta.pagination.per_page\" ng-change=\"paginate()\"></uib-pagination>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    " 	</div>\n" +
    "    \n" +
    "    <!-- Start: Contact -->\n" +
    "    <div class=\"contact-block text-center\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-md-7 footer-logo\">\n" +
    "                <img src=\"assets/img/footer-logo.png\" alt=\"logo\" />\n" +
    "                <p>{{'Need help booking online? (1234) 123-1234' | translate }}</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-5 text-right\">\n" +
    "                <a class=\"btn btn-red\" href=\"javascript:void(0);\">SERVICE@ABS.COM</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: Contact -->\n" +
    "    \n" +
    "</div>");
}]);

angular.module("Home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Home/home.tpl.html",
     "<div class='home-wrapper'>"+
     "  <div class='home-banner'>" +
     "    <div class='container'>" +
     "      <h1>Find a Great Dentist. <br>For Free.</h1>" +
     "      <div class='search-banner col-md-8 col-md-offset-2'>" +
     "        <div class='form-group'>"+
     "          <div class='input-group'>"+
     "            <div class='input-group-addon'>" +

     "               <ui-select ng-model='HomeController' theme='bootstrap'> "+
     "                 <ui-select-match placeholder='Location'>"+
     "                  <span ng-bind='$select.selected.cityname'></span>"+
     "                 </ui-select-match>"+
     "                <ui-select-choices repeat='item in (mainData | filter: $select.search)'>"+
     "                  <span ng-bind='item.cityname'></span>"+
     "                </ui-select-choices>"+
     "              </ui-select>"+
     "            </div>"+
     "               <ui-select class='main-search' ng-model='HomeController' theme='bootstrap'> "+
     "                 <ui-select-match placeholder=''>"+
     "                  <span ng-bind='$select.selected.clinicname'></span>"+
     "                 </ui-select-match>"+
     "                <ui-select-choices repeat='item in (mainData | filter: $select.search)'>"+
     "                  <span ng-bind='item.clinicname'></span>"+
     "                </ui-select-choices>"+
     "              </ui-select>"+
     "            <div class='input-group-addon'><button class='btn btn-search'></button></div>"+
     "          </div>"+
     "        </div>"+
     "      </div>"+
     "      <a href='#' class='btn btn-success btn-border'>FIND DENTAL CLINIC NEAR ME NOW</a>"+
     "    </div>" +
     "    <div class='mouse-bottom'>" +
     "    LEARN MORE" +
     "      <img src='assets/img/mouse-icon.png' alt='' class='mouse-icon'/>" +
     "    </div>"+
     "  </div>" +
     "  <div class='section-2 how-it-work'>" +
     "    <div class='container'>" +
     "      <h2>Find a Great Dentist. For Free.</h2>" +
     "      <span class='col-md-6 col-md-offset-3 text-align-center'>Click on the icons to launch a search based on procedures. Du texte lisible et contenant du sens est source de distractions</span>" +
     "      <div class='row'>" +
     "          <div class='col-md-4 section-2-item'>" +
     "            <div class='col-md-8'>" +
     "                <img src='assets/img/section-2-img-1.png' alt=''>" +
     "               <h4>SEARCH</h4>" +
     "              <p>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a</p>" +
     "            </div>" +
     "          </div>" +
     "          <div class='col-md-4 section-2-item'>" +
     "            <div class='col-md-8 col-md-offset-2'>" +
     "                <img src='assets/img/section-2-img-2.png' alt=''>" +
     "               <h4>COMPARE AND SELECT</h4>" +
     "              <p>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a</p>" +
     "            </div>" +
     "          </div>" +
     "          <div class='col-md-4 section-2-item'>" +
     "            <div class='col-md-8 col-md-offset-4'>" +
     "                <img src='assets/img/section-2-img-3.png' alt=''>" +
     "               <h4>Book Appointment</h4>" +
     "              <p>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a</p>" +
     "            </div>" +
     "          </div>" +
     "      </div>" +
     "    </div>" +
     "  </div>"+
     "  <div class='section-3 procedures'>" +
     "     <div class='container'>" +
     "        <h2>Find a Great Dentist. For Free.</h2>" +
     "        <p  class='col-md-6 col-md-offset-3 text-align-center'>Click on the icons to launch a search based on procedures. Du texte lisible et contenant du sens est source de distractions</p>" +
     "        <slick class='procedures-carusel col-xs-12' infinite=true slides-to-show=6 slides-to-scroll=1 responsive='[{breakpoint: 900,settings: {slidesToShow: 3}},{breakpoint: 600,settings: {slidesToShow: 2}}]'> " +
     "              <div>" +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-1.png' alt='' />" +
     "                      <p>WHITENING</p>" +
     "                  </div>  " +
     "                  <div class='procedures-item'>" +
    "                      <img src='assets/img/carusel/procedures-item-2.png' alt='' />" +
    "                      <p>braces</p>" +
    "                  </div>  " +
     "              </div>" +
     "              <div>" +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-3.png' alt='' />" +
     "                      <p>Crowning</p>" +
     "                  </div>  " +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-4.png' alt='' />" +
     "                      <p>Cleaning</p>" +
     "                  </div>  " +
     "              </div>" +
     "              <div>" +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-5.png' alt='' />" +
     "                      <p>Implants</p>" +
     "                  </div>  " +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-6.png' alt='' />" +
     "                      <p>GUM SURGERY</p>" +
     "                  </div>  " +
     "              </div>" +
     "              <div>" +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-7.png' alt='' />" +
     "                      <p>Fillings</p>" +
     "                  </div>  " +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-8.png' alt='' />" +
     "                      <p>Veneers</p>" +
     "                  </div>  " +
     "              </div>" +
     "              <div>" +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-9.png' alt='' />" +
     "                      <p>Extraction</p>" +
     "                  </div>  " +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-10.png' alt='' />" +
     "                      <p>Dentures</p>" +
     "                  </div>  " +
     "              </div>" +
     "              <div>" +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-11.png' alt='' />" +
     "                      <p>Root canal</p>" +
     "                  </div>  " +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-12.png' alt='' />" +
     "                      <p>Oral Cancer <br>Examination</p>" +
     "                  </div>  " +
     "              </div>" +
     "              <div>" +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-9.png' alt='' />" +
     "                      <p>WHITENING</p>" +
     "                  </div>  " +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-11.png' alt='' />" +
     "                      <p>braces</p>" +
     "                  </div>  " +
     "              </div>" +
     "              <div>" +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-12.png' alt='' />" +
     "                      <p>WHITENING</p>" +
     "                  </div>  " +
     "                  <div class='procedures-item'>" +
     "                      <img src='assets/img/carusel/procedures-item-10.png' alt='' />" +
     "                      <p>braces</p>" +
     "                  </div>  " +
     "              </div>" +
     "        </slick>" +
     "     </div>" +
     "    <div class='mouse-bottom'>" +
     "      <img src='assets/img/mouse-icon.png' alt='' class='mouse-icon'/>" +
     "    </div>"+
     "  </div>" +
     "  <div class='section-4 google-map'>" +
     "            <div class=\"map-block\">\n" +
     "                <div class='search-bar'>" +
     "                  <p>Clinics that offers emergency procedures</p>" +
     "                  <p>Regular clinics</p>" +
     "                </div>" +
     "                <div map-lazy-load=\"https://maps.google.com/maps/api/js?key=AIzaSyAR1VR0cEgs-YuJOQzwVLNfPmwdAu2xBHE\">\n" +
     "                    <ng-map zoom=\"10\" center=\"[33.862100, -84.687900]\" class=\"map-height\" scrollwheel='false' pan-control=\"true\""+
     "                      pan-control-options=\"{position:'TOP_RIGHT'}\""+
     "                      map-type-control=\"false\""+
     "                      zoom-control=\"true\""+
     "                     zoom-control-options=\"{style:'SMALL', position:'LEFT_CENTER'}\""+
     "                     scale-control=\"false\""+
     "                     street-view-control=\"true\""+
     "                     street-view-control-options=\"{position:'LEFT_CENTER'}\">\n" +
     "                        <marker id='1' position=\"33.862100, -84.687900\" on-click=\"map.showInfoWindow(event, 'doctor-info')\" icon=\"assets/img/hospital-marker-blue.png\"></marker>\n" +
     "                        <marker id='2' position=\"33.92100, -84.97900\" on-click=\"map.showInfoWindow(event, 'doctor-info')\" icon=\"assets/img/hospital-marker-red.png\"></marker>\n" +
     "                        <info-window id=\"doctor-info\">\n" +
     "                            <div ng-non-bindable=\"\">\n" +
     "                                <div class=\"dr-avatar\"> <img class=\"img-responsive\" ng-src=\"assets/img/dentist.jpg\"/> </div>\n" +
     "                                <div class=\"dr-heading\">\n" +
     "                                	<h4>Dr John Smith</h4>\n" +
     "                                        <div class=\"address1\">3867 Sherman Street Troy Kansas, 66087</div>\n" +
     "                                        <div class=\"phone\">785-985-7297</div>\n" +
     "                                          <a href=\"#/doctor/{{doctorInfo.username}}\" class=\"\">View Profile</a>\n" +
     "                                    </div>\n" +
     "                                </div>\n" +
     "                            </div>\n" +
     "                        </info-window>\n" +
     "                    </ng-map>\n" +
     "                </div>\n" +
     "           <div class=\"container container-absolute\"> " +
     "                  <div class='col-md-8 col-md-offset-2 col-sm-12'>" +
     "                      <h2>Lookup on over <span>70, 000</span> clinic listings</h2>" +
     "                      <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions</p>" +
     "                      <div>" +
     "                          <div class='col-md-5'> " +
     "                              <div class='search-banner subscribe-wrapper'>" +
     "                              <ui-select class='map-select' ng-model='selected.value' theme='bootstrap' search-enabled='false'> "+
     "                                  <ui-select-match placeholder='Filter by Procedures Offered'>"+
     "                                      <span ng-bind='$select.selected.name'></span>"+
     "                                  </ui-select-match>"+
     "                                   <ui-select-choices repeat='item in (itemArray | filter: $select.search) track by item.id'>"+
     "                                      <span ng-bind='item.name'></span>"+
     "                                  </ui-select-choices>"+
     "                              </ui-select>"+
     "                          </div>" +
     "                          </div>" +
     "                          <div class='col-md-7'> " +
     "                              <div class='search-banner subscribe-wrapper'>" +
    "                                   <div class='form-group'>"+
    "                                       <div class='input-group'>"+
    "                                           <input type='text' class='form-control' id='subscribe' placeholder='Type City/State or Zipcode to change location'>"+
    "                                           <div class='input-group-addon'><button class='btn btn-search'></button></div>"+
    "                                       </div>"+
    "                                   </div>"+
    "                               </div>"+
     "                          </div>" +
     "                      </div>" +
     "                  </div>" +
     "          </div>" +
     "  </div>" +
     "  <div class='section-5 patient-donwload'>" +
     "      <div class='container'>" +
     "        <div class='row'>" +
     "          <div class='col-md-6'>" +
     "              <h2>We made it easy and convenient <br>for you.</h2>" +
     "                <div class='col-xs-12 section-5-item'>" +
     "                    <img src='assets/img/section-5-img-1.png' alt=''>" +
     "                    <span>See Clinics That Offers Emergency Procedures</span>" +
     "                    <p>We know how important Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a</p>" +
     "                </div>" +
     "                <div class='col-xs-12 section-5-item'>" +
     "                    <img src='assets/img/section-5-img-2.png' alt=''>" +
     "                    <span>Avoid Missed Appointments, Get Reminders!</span>" +
     "                    <p>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a</p>" +
     "                </div>" +
     "                <div class='col-xs-12 section-5-item'>" +
     "                    <img src='assets/img/section-5-img-3.png' alt=''>" +
     "                    <span>Your in good hands</span>" +
     "                    <p>We guaranty, only registered Dentists rem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a</p>" +
     "                </div>" +
     "              <div class=\"btn-bottom-wrapper\">" +
     "                <a href='#' class='btn btn-primary'>register now</a>" +
     "                <a href='#' class='btn btn-link'>get the FREE app</a>" +
     "              </div>" +
     "          </div>" +
     "          <div class='col-md-6'><img src='assets/img/section-5-female.png' alt=''></div>" +
     "        </div>" +
     "      </div>" +
     "  </div>" +
     "  <div class='section-6 partners'>" +
     "      <div class='container'>" +
     "        <h2>What Clients Say</h2>" +
     "        <p  class='col-md-6 col-md-offset-3 text-align-center'>Click on the icons to launch a search based on procedures. Du texte lisible et contenant du sens est source de distractions</p>" +
     "        <slick class='main-partners col-xs-12' dots='true' infinite=true slides-to-show=2 slides-to-scroll=1 responsive='[{breakpoint: 900,settings: {slidesToShow: 2}},{breakpoint: 600,settings: {slidesToShow: 1,arrows: false}}]'> " +
     "          <div>" +
     "              <div class='main-comment'>" +
       "              <div class='comment-wrapper'>" +
       "                <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.</p>" +
       "                  <span>Ron Navalta <span>NY, USA</span></span>" +
       "              </div>" +
       "              <span class='img-circle-wrapper'><img  src='assets/img/man-1.png' alt=''></span>" +
     "              </div>" +
     "          </div>" +
     "          <div>" +
     "              <div class='main-comment'>" +
     "              <div class='comment-wrapper'>" +
     "                <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.</p>" +
     "                  <span>Ron Navalta <span>NY, USA</span></span>" +
     "              </div>" +
     "              <span class='img-circle-wrapper'><img  src='assets/img/man-1.png' alt=''></span>" +
     "              </div>" +
     "          </div>" +
     "          <div>" +
     "              <div class='main-comment'>" +
     "              <div class='comment-wrapper'>" +
     "                <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.</p>" +
     "                  <span>Ron Navalta <span>NY, USA</span></span>" +
     "              </div>" +
     "              <span class='img-circle-wrapper'><img  src='assets/img/man-1.png' alt=''></span>" +
     "              </div>" +
     "          </div>" +
     "        </slick>" +
     "        <h2>Our partners</h2>" +
     "        <slick class='our-partners col-xs-12' infinite=true slides-to-show=4 slides-to-scroll=1 responsive='[{breakpoint: 900,settings: {slidesToShow: 2}},{breakpoint: 600,settings: {slidesToShow: 1}}]'> " +
     "          <div><img  src='assets/img/our-partners-img-1.png' alt=''></div>" +
     "          <div><img  src='assets/img/our-partners-img-2.png' alt=''></div>" +
     "          <div><img  src='assets/img/our-partners-img-3.png' alt=''></div>" +
     "          <div><img  src='assets/img/our-partners-img-4.png' alt=''></div>" +
     "          <div><img  src='assets/img/our-partners-img-2.png' alt=''></div>" +
     "          <div><img  src='assets/img/our-partners-img-4.png' alt=''></div>" +
     "        </slick>" +
     "      </div>" +

     "  </div>"+
     "  <div class='section-7 testimonials'>" +
     "    <div class='container'>" +
     "      <div class='row'>" +
     "        <div class='col-md-6'><img src='assets/img/phone-section-7.png' alt='' class='section-7-img' /></div>" +
     "        <div class='col-md-6'>" +
     "                <span>You have a clinic? You’re a dentist?</span>" +
     "                <h2>GET LISTED. ATTRACT MORE PATIENTS. <br>Absolutely FREE!</h2>" +
     "                <div class='col-xs-12 section-5-item'>" +
     "                    <img src='assets/img/section-7-img-1.png' alt=''>" +
     "                    <span>Avoid Missed Appointments, Get Reminders!</span>" +
     "                    <p>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a</p>" +
     "                </div>" +
     "                <div class='col-xs-12 section-5-item'>" +
     "                    <img src='assets/img/section-7-img-2.png' alt=''>" +
     "                    <span>Avoid Missed Appointments, Get Reminders!</span>" +
     "                    <p>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a</p>" +
     "                </div>" +
     "                <div class='col-xs-12 section-5-item'>" +
     "                    <img src='assets/img/section-7-img-3.png' alt=''>" +
     "                    <span>Avoid Missed Appointments, Get Reminders!</span>" +
     "                    <p>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a</p>" +
     "                </div>" +
     "              <div class=\"btn-bottom-wrapper\">" +
     "                <a href='#' class='btn btn-whites'>LIST YOUR CLINIC</a>" +
     "                <a href='#' class='btn btn-link'>LEARN MORE</a>" +
     "              </div>" +
     "        </div>" +
     "      </div>" +
     "    </div>" +
     "    <div class='mouse-bottom'>" +
     "      <img src='assets/img/mouse-icon.png' alt='' class='mouse-icon'/>" +
     "    </div>"+
     "  </div>"+
     "  <div class='section-8 blog'>" +
     "    <div class='container'>" +
     "      <h2>MyDentist News / Blog</h2>" +
     "      <p class='col-md-6 col-md-offset-3 text-align-center'>Click on the icons to launch a search based on procedures. Du texte lisible et contenant du sens est source de distractions</p>" +
     "      <div class='row news-wrapper'>" +
     "        <div class='col-md-4'>" +
     "          <div class='col-md-12 news-item'>" +
     "            <img src='assets/img/default-news.png' alt='' class='news-img' />" +
     "            <span>January 28, 2017</span>" +
     "            <h4>Article Title Goes Here</h4>" +
     "            <p>On sait depuis longtemps que trava iller avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même</p>" +
     "             <a href='#'>READ MORE</a>" +
     "           </div>" +
     "        </div>" +
     "        <div class='col-md-4'>" +
     "          <div class='col-md-12 news-item'>" +
     "            <img src='assets/img/default-news.png' alt='' class='news-img' />" +
     "            <span>January 28, 2017</span>" +
     "            <h4>Article Title Goes Here</h4>" +
     "            <p>On sait depuis longtemps que trava iller avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même</p>" +
     "             <a href='#'>READ MORE</a>" +
     "          </div>" +
     "        </div>" +
     "        <div class='col-md-4'>" +
     "          <div class='col-md-12 news-item'>" +
     "            <img src='assets/img/default-news.png' alt=''class='news-img' />" +
     "            <span>January 28, 2017</span>" +
     "            <h4>Article Title Goes Here</h4>" +
     "            <p>On sait depuis longtemps que trava iller avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même</p>" +
     "             <a href='#'>READ MORE</a>" +
     "           </div>" +
     "        </div>" +
     "      </div>" +
     "    </div>" +
     "  </div>"+
     "    <div class='section-9 news-letter'>" +
     "      <div class='container'>" +
     "        <h2>Subscribe To OUR Newsletter</h2>" +
     "        <p class='col-md-8 col-md-offset-2 text-align-center'>Click on the icons to launch a search based on procedures. Du texte lisible et contenant du sens est source de distractions</p>" +
     "      <div class='search-banner subscribe-wrapper col-md-8 col-md-offset-2'>" +
     "        <div class='form-group'>"+
     "          <div class='input-group'>"+
     "            <input type='text' class='form-control' id='subscribe' placeholder='Email Address'>"+
     "            <div class='input-group-addon'><button class='btn btn-subscribe'>Subscribe</button></div>"+
     "          </div>"+
     "        </div>"+
     "      </div>"+
     "      </div>" +
     "    </div>" +
     "</div>");
}]);

angular.module("Appointments/appointment_booking_appt_info.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Appointments/appointment_booking_appt_info.tpl.html",
    "<section class=\"pad-63 book-appmt-block\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">\n" +
    "            <h1>{{'Book Your Appointment'| translate}}</h1>\n" +
    "        </div>\n" +
    "        <div class=\"appmt-steps col-md-12\">\n" +
    "            <ul class=\"list-inline row\">\n" +
    "                <li class=\"current-step col-md-4\">\n" +
    "                    <span>Step 1</span> \n" +
    "                    <p class=\"tab-title\">{{'Appointment Info'| translate}}</p>\n" +
    "                </li>\n" +
    "                <li class=\"col-md-4\">\n" +
    "                    <span>Step 2</span> \n" +
    "                    <p class=\"tab-title\">{{'Patient Info'| translate}}</p>\n" +
    "                </li>\n" +
    "                <li class=\"col-md-4\">\n" +
    "                    <span>Step 3</span> \n" +
    "                    <p class=\"tab-title\">{{'Complete'| translate}}</p>\n" +
    "                </li>\n" +
    "                <!--<li class=\"col-md-3\">\n" +
    "                    <span>4</span> \n" +
    "                    <p class=\"tab-title\">{{'Finished'| translate}}</p>\n" +
    "                </li>-->\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12 book-doctor-details\">\n" +
    "            <div class=\"col-md-5\">\n" +
    "            	<div class=\"media\">\n" +
    "                	<div class=\"media-left\">\n" +
    "                    	<img class=\"doctor-image\" ng-src=\"{{doctorProfile.User.data.attachmentable.data.thumb.medium}}\" alt=\"{{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}\">\n" +
    "                    </div>\n" +
    "                    <div class=\"media-body\">\n" +
    "                    	<h3>{{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}</h3>\n" +
    "                        <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctorProfile.start_rating\"></input-stars>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <address class=\"text-blue\"> {{doctorProfile.address}} </address>\n" +
    "            </div>\n" +
    "            <div class=\"js-time col-md-4\"> \n" +
    "                <ul class=\"list-unstyled\">\n" +
    "                    <li>{{'Appt Date:'| translate }} <span>{{appt_date}}</span></li>\n" +
    "                    <li>{{'Appt Time:'| translate }} <span>{{appt_time}}</span></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-7 col-md-8 doctor-visit row\">\n" +
    "            <div ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                <form class=\"form-content row col-md-12\" name=\"stepone\" ng-submit=\"model.step1(stepone.$valid)\" novalidate>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <h4>Have you visited this doctor before?</h4>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"radio col-md-4\">\n" +
    "                                <label>\n" +
    "                                    <input class=\"hide\" type=\"radio\" ng-model=\"model.formFields.is_seen_before\" name=\"is_seen_before\" value=\"1\">\n" +
    "                                    <span></span>I am a new patient.\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <div class=\"radio col-md-8 col-lg-6\">\n" +
    "                                <label>\n" +
    "                                    <input class=\"hide\" type=\"radio\" ng-model=\"model.formFields.is_seen_before\" name=\"is_seen_before\" value=\"0\">\n" +
    "                                    <span></span>I am an existing patient of this practice.\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-8\">\n" +
    "                            <!--<h4 class=\"text-sblue\">What's the reason for your visit?</h4>\n" +
    "                            <label class=\"text-grey\">Select your reason</label>-->\n" +
    "                            <select ng-model=\"model.formFields.specialty_disease_id\" class=\"form-control\" name=\"specialty_disease_id\" ng-required=\"true\" required=\"required\">\n" +
    "                                <option value=\"\">Select your reason</option>\n" +
    "                                <option ng-repeat=\"diseas in model.diseasList\" value=\"{{diseas.id}}\">{{diseas.name}}</option>\n" +
    "                            </select> \n" +
    "                            <span class=\"error\" ng-show=\"(stepone.$submitted || stepone.specialty_disease_id.$touched) && (stepone.specialty_disease_id.$pristine || logisteponenForm.specialty_disease_id.$invalid) && (stepone.specialty_disease_id.$error.required)\">{{'Select a Reason'| translate }}</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3 book-free\">\n" +
    "                            <button class=\"btn btn-block btn-green\" type=\"submit\">{{'Book for Free'| translate }}</button>\n" +
    "                        </div>\n" +
    "                 	</div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                <div class=\"alert alert-danger\">\n" +
    "                    <strong><i class='fa fa-ban'></i> {{$root.auth.user_profile.dr_title}} {{$root.auth.user_profile.first_name}}</strong> Doctor will not able to schedule an appointment.\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_booking_confirm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Appointments/appointment_booking_confirm.tpl.html",
    "<section class=\"pad-63 book-appmt-block\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">\n" +
    "            <h1>{{'Book Your Appointment'| translate}}</h1>\n" +
    "        </div>\n" +
    "        <div class=\"appmt-steps col-md-12\">\n" +
    "            <ul class=\"list-inline row\">\n" +
    "                <li class=\"complete-step col-md-4\">\n" +
    "                    <span>Step 1</span> \n" +
    "                    <p class=\"tab-title\">{{'Appointment Info'| translate}}</p>\n" +
    "                </li>\n" +
    "                <li class=\"complete-step col-md-4\">\n" +
    "                    <span>Step 2</span> \n" +
    "                    <p class=\"tab-title\">{{'Patient Info'| translate}}</p>\n" +
    "                </li>\n" +
    "                <!-- <li class=\"complete-step col-md-3\">\n" +
    "                    <span>3</span> \n" +
    "                    <p class=\"tab-title\">{{'Details'| translate}}</p>\n" +
    "                </li>-->\n" +
    "                <li class=\"current-step col-md-4\">\n" +
    "                    <span>Step 3</span> \n" +
    "                    <p class=\"tab-title\">{{'Complete'| translate}}</p>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12 book-doctor-details\" ng-show=\"widgetCheck == 0\">\n" +
    "        	<div class=\"col-md-4\">\n" +
    "            	<div class=\"media\">\n" +
    "                    <div class=\"media-left\">\n" +
    "                        <img class=\"doctor-image\" ng-src=\"{{doctorProfile.User.data.attachmentable.data.thumb.medium}}\" alt=\"Dr. Patricia A. Lloyd\">\n" +
    "                    </div>\n" +
    "                    <div class=\"media-body\">\n" +
    "                        <h3>{{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}</h3>\n" +
    "                        <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctorProfile.start_rating\"></input-stars>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "            	<address class=\"text-blue\"> {{doctorProfile.address}} </address>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "            	<div class=\"js-time\"> \n" +
    "                    <ul class=\"list-unstyled text-left\">\n" +
    "                        <li>{{'Appt Date:'| translate }}<span>{{appt_date}}</span></li>\n" +
    "                        <li>{{'Appt Time:'| translate }}<span>{{appt_time}}</span></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    	<div class=\"col-md-12 table-block appmt-finish\">\n" +
    "            <div class=\"table-responsive row\">\n" +
    "                <table class=\"table table-hover\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Name</th>\n" +
    "                            <th>Email Id</th>\n" +
    "                            <th>Mobile</th>\n" +
    "                            <th>DOB</th>\n" +
    "                            <th>Gender</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr>\n" +
    "                            <td>{{name}}</td>\n" +
    "                            <td>{{email}}</td>\n" +
    "                            <td>{{mobile}}</td>\n" +
    "                            <td>{{dob}}</td>\n" +
    "                            <td>{{gender}}</td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "            <div class=\"appmt-btn text-center\">\n" +
    "                <button ng-click=\"finalConfirm()\" class=\"btn btn-green\">Confirm Your Appointment </button> \n" +
    "                <button ng-click=\"bookingCancel()\" class=\"btn btn-red\">Cancel Booking </button> \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_booking_details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Appointments/appointment_booking_details.tpl.html",
    "<section class=\"pad-63 book-appmt-block\">\n" +
    "    <div class=\"page-head\">\n" +
    "        <div class=\"container\">\n" +
    "            <h1>{{'Book Your Appointment'| translate}}</h1>\n" +
    "        </div>\n" +
    "        <div class=\"appmt-steps col-md-12\">\n" +
    "            <ul class=\"list-inline row\">\n" +
    "                <li class=\"complete-step col-md-3\">\n" +
    "                    <span>Step 1</span> \n" +
    "                    <p class=\"tab-title\">{{'Appt Info'| translate}}</p>\n" +
    "                </li>\n" +
    "                <li class=\"complete-step col-md-3\">\n" +
    "                    <span>Step 2</span> \n" +
    "                    <p class=\"tab-title\">{{'Patient Info'| translate}}</p>\n" +
    "                </li>\n" +
    "                <li class=\"current-step col-md-3\">\n" +
    "                    <span>Step 3</span> \n" +
    "                    <p class=\"tab-title\">{{'Details'| translate}}</p>\n" +
    "                </li>\n" +
    "                <li class=\"col-md-3\">\n" +
    "                    <span>Step 4</span> \n" +
    "                    <p class=\"tab-title\">{{'Complete'| translate}}</p>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12\"> \n" +
    "            <div class=\"book-appmt-doctor\">\n" +
    "                <h2>{{'Doctor'| translate}}</h2>\n" +
    "                <div class=\"book-doctor-details text-center\">\n" +
    "                    <img class=\"doctor-image\" ng-src=\"{{doctorProfile.attachmentable.data.thumb.medium}}\" alt=\"Dr. Patricia A. Lloyd\">    \n" +
    "                    <h3 class=\"\">\n" +
    "                        {{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}\n" +
    "                    </h3>\n" +
    "                    <p>\n" +
    "                    <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctorProfile.start_rating\"></input-stars>\n" +
    "                    </p>\n" +
    "                    <address class=\"text-blue\"> {{doctorProfile.address}} </address>\n" +
    "                    <div class=\"js-time\"> \n" +
    "                        <ul class=\"list-inline text-left\">\n" +
    "                            <li class=\"text-blue\"> {{'Appt Date:'| translate }} {{appt_date}} </li>\n" +
    "                            <li class=\"text-blue\"> {{'Appt Time:'| translate }} {{appt_time}}</li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <!--<ul class=\"list-inline text-left\">\n" +
    "                        <li class=\"text-grey\">Reason for Visit</li>\n" +
    "                        <li class=\"text-blue\">Yet To Select</li>\n" +
    "                    </ul>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-7 book-appmt\">\n" +
    "            <div ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                <form class=\"form-content col-md-8\" name=\"stepthree\" ng-submit=\"model.step3(stepthree)\" novalidate>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>Phone number where the doctor can contact you</label>\n" +
    "                        <input type=\"text\" ng-model=\"model.formValue.phone\" name=\"phone\" class=\"form-control\"> \n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>Any note's for the doctor's office?</label>\n" +
    "                        <textarea ng-model=\"model.formValue.notes\" name=\"patient_notes\" class=\"form-control\"></textarea>\n" +
    "                    </div>\n" +
    "                    <div class=\"\">\n" +
    "                        <button class=\"btn btn-block btn-blue btn-animate\" type=\"submit\">{{'Book for Free'| translate }}</button>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                <div class=\"alert alert-danger\">\n" +
    "                    <strong><i class='fa fa-ban'></i> {{$root.auth.user_profile.dr_title}} {{$root.auth.user_profile.first_name}}</strong> Doctor will not able to schedule an appointment.\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_booking_patient_info.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Appointments/appointment_booking_patient_info.tpl.html",
    "<section class=\"pad-63 book-appmt-block\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">\n" +
    "            <h1>{{'Book Your Appointment'| translate}}</h1>\n" +
    "        </div>\n" +
    "        <div class=\"appmt-steps col-md-12\">\n" +
    "            <ul class=\"list-inline row\">\n" +
    "                <li class=\"complete-step col-md-4\">\n" +
    "                    <span>Step 1</span> \n" +
    "                    <p class=\"tab-title\">{{'Appointment Info'| translate}}</p>\n" +
    "                </li>\n" +
    "                <li class=\"current-step col-md-4\">\n" +
    "                    <span>Step 2</span> \n" +
    "                    <p class=\"tab-title\">{{'Patient Info'| translate}}</p>\n" +
    "                </li>\n" +
    "                <!--<li class=\"col-md-3\">\n" +
    "                    <span>3</span> \n" +
    "                    <p class=\"tab-title\">{{'Details'| translate}}</p>\n" +
    "                </li>-->\n" +
    "                <li class=\"col-md-4\">\n" +
    "                    <span>Step 3</span> \n" +
    "                    <p class=\"tab-title\">{{'Complete'| translate}}</p>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12 book-doctor-details\">\n" +
    "        	<div class=\"col-md-4\">\n" +
    "            	<div class=\"media\">\n" +
    "                	<div class=\"media-left\">\n" +
    "                    	<img class=\"doctor-image\" ng-src=\"{{doctorProfile.User.data.attachmentable.data.thumb.medium}}\" alt=\"Dr. Patricia A. Lloyd\">\n" +
    "                    </div>\n" +
    "                    <div class=\"media-body\">\n" +
    "                   		<h3>{{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}</h3>\n" +
    "                        <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctorProfile.start_rating\"></input-stars>\n" +
    "                    </div>\n" +
    "              	</div>\n" +
    "        	</div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "            	<address class=\"text-blue\"> {{doctorProfile.address}} </address>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "            	<div class=\"js-time\"> \n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                        <li>{{'Appt Date:'| translate }} <span>{{appt_date}}</span></li>\n" +
    "                        <li>{{'Appt Time:'| translate }} <span>{{appt_time}}</span></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-9 doctor-visit patient-info row\">\n" +
    "            <div ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                <form class=\"form-content row form-horizontal col-md-12\" name=\"steptwo\" ng-submit=\"model.step2(steptwo.$valid)\" novalidate>\n" +
    "                    <div class=\"form-group clearfix\">\n" +
    "                        <div class=\"radio col-md-2\">\n" +
    "                            <label>\n" +
    "                                <input class=\"hide\" type=\"radio\" ng-model=\"model.formValue.is_guest_appointment\" name=\"is_guest_appointment\" value=\"0\">				 						 								<span></span>{{$root.auth.user_profile.first_name}}\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"radio col-md-4\">\n" +
    "                            <label>\n" +
    "                                <input class=\"hide\" type=\"radio\" ng-model=\"model.formValue.is_guest_appointment\" name=\"is_guest_appointment\" value=\"1\">\n" +
    "                                <span></span>Guest Details\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-show=\"model.formValue.is_guest_appointment == false\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <input type=\"text\" name=\"first_name\" ng-model=\"model.formValue.first_name\" placeholder=\"First Name\" class=\"form-control\" ng-required=\"model.formValue.is_guest_appointment == false\" ng-minlength=\"3\" ng-maxlength=\"25\" ng-pattern=\"/^[a-z A-Z]*$/\"/>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.first_name.$touched) && (steptwo.first_name.$pristine || steptwo.first_name.$invalid) && (steptwo.first_name.$error.required)\">{{'First Name Required'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.first_name.$touched) && (steptwo.first_name.$pristine || steptwo.first_name.$invalid) && (steptwo.first_name.$error.minlength)\">{{'Minimum 3 character required'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.first_name.$touched) && (steptwo.first_name.$pristine || steptwo.first_name.$invalid) && (steptwo.first_name.$error.maxlength)\">{{'Maximum 25 Character'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.first_name.$touched) && (steptwo.first_name.$pristine || steptwo.first_name.$invalid) && (steptwo.first_name.$error.pattern)\">{{'Enter a valid name without numbers'| translate }}</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <input type=\"text\" name=\"last_name\" ng-model=\"model.formValue.last_name\" class=\"form-control\" placeholder=\"Last Name\" ng-required=\"model.formValue.is_guest_appointment == false\" ng-minlength=\"1\" ng-maxlength=\"20\" ng-pattern=\"/^[a-z A-Z]*$/\"/>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.last_name.$touched) && (steptwo.last_name.$pristine || steptwo.last_name.$invalid) && (steptwo.last_name.$error.required)\">{{'Last Name Required'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.last_name.$touched) && (steptwo.last_name.$pristine || steptwo.last_name.$invalid) && (steptwo.last_name.$error.minlength)\">{{'Minimum 1 character required'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.last_name.$touched) && (steptwo.last_name.$pristine || steptwo.last_name.$invalid) && (steptwo.last_name.$error.maxlength)\">{{'Maximum 20 Character'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.last_name.$touched) && (steptwo.last_name.$pristine || steptwo.last_name.$invalid) && (steptwo.last_name.$error.pattern)\">{{'Enter a valid name without numbers'| translate }}</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <select ng-model=\"model.formValue.gender_id\" class=\"form-control\" name=\"gender_id\" ng-required=\"model.formValue.is_guest_appointment == false\">\n" +
    "                                <option value=\"\"> Select Gender</option>\n" +
    "                                <option ng-repeat=\"gender in model.genderList\" value=\"{{gender.id}}\">{{gender.name}}</option>\n" +
    "                            </select>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.gender_id.$touched) && (steptwo.gender_id.$pristine || steptwo.gender_id.$invalid) && (steptwo.gender_id.$error.required)\">{{'Select a Gender'| translate }}</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <input type=\"text\" name=\"postal_code\" ng-model=\"model.formValue.postal_code\" placeholder=\"Postal Code\" class=\"form-control\" ng-minlength=\"3\" ng-maxlength=\"10\" ng-required=\"model.formValue.is_guest_appointment == false\"/>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.postal_code.$touched) && (steptwo.postal_code.$pristine || steptwo.postal_code.$invalid) && (steptwo.postal_code.$error.required)\">{{'Postal Code Required'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.postal_code.$touched) && (steptwo.postal_code.$pristine || steptwo.postal_code.$invalid) && (steptwo.postal_code.$error.minlength)\">{{'Minimum 3 Character Required'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.postal_code.$touched) && (steptwo.postal_code.$pristine || steptwo.postal_code.$invalid) && (steptwo.postal_code.$error.maxlength)\">{{'Maximum 10 Character Required'| translate }}</span>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-show=\"model.formValue.is_guest_appointment == true\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <input type=\"text\" name=\"guest_first_name\" ng-model=\"model.formValue.guest_first_name\" placeholder=\"First Name\" class=\"form-control\" ng-required=\"model.formValue.is_guest_appointment == true\" ng-minlength=\"3\" ng-maxlength=\"25\" ng-pattern=\"/^[a-z A-Z]*$/\"/>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_first_name.$touched) && (steptwo.guest_first_name.$pristine || steptwo.guest_first_name.$invalid) && (steptwo.guest_first_name.$error.required)\">{{'First Name Required'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_first_name.$touched) && (steptwo.guest_first_name.$pristine || steptwo.guest_first_name.$invalid) && (steptwo.guest_first_name.$error.minlength)\">{{'Minimum 3 character required'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_first_name.$touched) && (steptwo.guest_first_name.$pristine || steptwo.guest_first_name.$invalid) && (steptwo.guest_first_name.$error.maxlength)\">{{'Maximum 25 Character'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_first_name.$touched) && (steptwo.guest_first_name.$pristine || steptwo.guest_first_name.$invalid) && (steptwo.guest_first_name.$error.pattern)\">{{'Enter a valid name without numbers'| translate }}</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <input type=\"text\" name=\"guest_last_name\" ng-model=\"model.formValue.guest_last_name\" placeholder=\"Last Name\" class=\"form-control\" ng-required=\"model.formValue.is_guest_appointment == true\" ng-minlength=\"1\" ng-maxlength=\"20\" ng-pattern=\"/^[a-z A-Z]*$/\"/>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_last_name.$touched) && (steptwo.guest_last_name.$pristine || steptwo.guest_last_name.$invalid) && (steptwo.guest_last_name.$error.required)\">{{'Last Name Required'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_last_name.$touched) && (steptwo.guest_last_name.$pristine || steptwo.guest_last_name.$invalid) && (steptwo.guest_last_name.$error.minlength)\">{{'Minimum 1 Character'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_last_name.$touched) && (steptwo.guest_last_name.$pristine || steptwo.guest_last_name.$invalid) && (steptwo.guest_last_name.$error.maxlength)\">{{'Maximum 20 Character'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_last_name.$touched) && (steptwo.guest_last_name.$pristine || steptwo.guest_last_name.$invalid) && (steptwo.guest_last_name.$error.pattern)\">{{'Enter a valid name without numbers'| translate }}</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <input type=\"text\" name=\"guest_postal_code\" ng-model=\"model.formValue.guest_postal_code\" placeholder=\"Postal Code\" class=\"form-control\" ng-minlength=\"3\" ng-maxlength=\"10\" ng-required=\"model.formValue.is_guest_appointment == true\"/>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_postal_code.$touched) && (steptwo.guest_postal_code.$pristine || steptwo.guest_postal_code.$invalid) && (steptwo.guest_postal_code.$error.required)\">{{'Postal Code Required'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_postal_code.$touched) && (steptwo.guest_postal_code.$pristine || steptwo.guest_postal_code.$invalid) && (steptwo.guest_postal_code.$error.minlength)\">{{'Minimum 3 Character Required'| translate }}</span>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_postal_code.$touched) && (steptwo.guest_postal_code.$pristine || steptwo.guest_postal_code.$invalid) && (steptwo.guest_postal_code.$error.maxlength)\">{{'Maximum 10 Character Required'| translate }}</span>\n" +
    "\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <input type=\"email\" name=\"guest_email\" ng-model=\"model.formValue.guest_email\" placeholder=\"Email\" class=\"form-control\" ng-required=\"model.formValue.is_guest_appointment == true\" ng-pattern=\"/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$/\"/>\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_email.$touched) && (steptwo.guest_email.$pristine || steptwo.guest_email.$invalid) && (steptwo.guest_email.$error.required)\">{{'Enter Email'| translate }}</span>\n" +
    "                            <!--<span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_email.$touched) && (steptwo.guest_email.$pristine || steptwo.guest_email.$invalid) && (steptwo.guest_email.$error.email)\">{{'Enter valid email'| translate }}</span>-->\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_email.$touched) && (steptwo.guest_email.$pristine || steptwo.guest_email.$invalid) && (steptwo.guest_email.$error.pattern)\">{{'Enter valid email'| translate }}</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <input class=\"form-control\" ng-model=\"model.formValue.guest_dob\" data-date-format=\"yyyy-MM-dd\" data-max-date=\"{{dobDateLimit}}\" data-autoclose=\"1\" name=\"guest_dob\" bs-datepicker type=\"text\" ng-required=\"model.formValue.is_guest_appointment == true\">\n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_dob.$touched) && (steptwo.guest_dob.$pristine || steptwo.guest_dob.$invalid) && (steptwo.guest_dob.$error.required)\">{{'Select DOB'| translate }}</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <select ng-model=\"model.formValue.guest_gender_id\" class=\"form-control\" name=\"guest_gender_id\" ng-required=\"model.formValue.is_guest_appointment == true\">\n" +
    "                                <option value=\"\"> Select Gender </option>\n" +
    "                                <option ng-repeat=\"sex in model.genderList\" value=\"{{sex.id}}\">{{sex.name}}</option>\n" +
    "                            </select> \n" +
    "                            <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.guest_gender_id.$touched) && (steptwo.guest_gender_id.$pristine || steptwo.guest_gender_id.$invalid) && (steptwo.guest_gender_id.$error.required)\">{{'Select a Gender'| translate }}</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    \n" +
    "                    <div class=\"common\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <input type=\"text\" ng-model=\"model.formValue.phone\" name=\"phone\" placeholder=\"Mobile\" class=\"form-control\" ng-required=\"true\" ng-minlength=\"8\" ng-maxlength=\"12\" ng-pattern=\"/^[0-9]*$/\">\n" +
    "                             <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.phone.$touched) && (steptwo.phone.$pristine || steptwo.phone.$invalid) && (steptwo.phone.$error.required)\">{{'Enter Phone Number'| translate }}</span>\n" +
    "                             <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.phone.$touched) && (steptwo.phone.$pristine || steptwo.phone.$invalid) && (steptwo.phone.$error.minlength)\">{{'Minimum 8 digits'| translate }}</span>\n" +
    "                             <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.phone.$touched) && (steptwo.phone.$pristine || steptwo.phone.$invalid) && (steptwo.phone.$error.maxlength)\">{{'Maximum 12 digits'| translate }}</span>\n" +
    "                             <span class=\"error\" ng-show=\"(steptwo.$submitted || steptwo.phone.$touched) && (steptwo.phone.$pristine || steptwo.phone.$invalid) && (steptwo.phone.$error.pattern)\">{{'Enter a valid phone number'| translate }}</span> \n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-12\">\n" +
    "                            <textarea ng-model=\"model.formValue.notes\" name=\"patient_notes\" placeholder=\"Any note's for the doctor's office?\" class=\"form-control\"></textarea>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-md-5\">\n" +
    "                        <button class=\"btn btn-block btn-green\" type=\"submit\">{{'Book for Free'| translate }}</button>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                <div class=\"alert alert-danger\">\n" +
    "                    <strong><i class='fa fa-ban'></i> {{$root.auth.user_profile.dr_title}} {{$root.auth.user_profile.first_name}}</strong> Doctor will not able to schedule an appointment.\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Appointments/appointment_index.tpl.html",
    "<!-- TABLE -->\n" +
    "<div class=\"appointment-block pad-63\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\" role=\"navigation\">\n" +
    "                <div class=\"appointment-header clearfix\">\n" +
    "                	<h1 class=\"pull-left\">{{'Appointments'|translate}}</h1>\n" +
    "                    <div class=\"appointment-list pull-left\">\n" +
    "                        <div class=\"pull-left all-appointment\">\n" +
    "                            <a href=\"#/appointments/all\"> {{'All'| translate}} </a>\n" +
    "                        </div>\n" +
    "                        <ul class=\"nav navbar-nav\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                            <li ng-class=\"{active: $route.current.activetab == 'today'}\"><a href=\"#/appointments/today\"> {{'Today'| translate}} </a></li>\n" +
    "                            <li ng-class=\"{active: $route.current.activetab == 'week'}\"><a href=\"#/appointments/week\"> {{'Week'| translate}} </a></li>\n" +
    "                            <li ng-class=\"{active: $route.current.activetab == 'home'}\"><a href=\"#/appointments/month\"> {{'Month'| translate}} </a></li>\n" +
    "                        </ul>\n" +
    "                        <ul class=\"nav navbar-nav\" ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                            <li><a href=\"#/appointments/pending-approval\"> {{'Pending Approval'| translate}} </a></li>\n" +
    "                            <li><a href=\"#/appointments/approved\"> {{'Approved'| translate}} </a></li>\n" +
    "                            <li><a href=\"#/appointments/cancelled\"> {{'Cancelled'| translate}} </a></li>\n" +
    "                            <li><a href=\"#/appointments/rejected\"> {{'Rejected'| translate}} </a></li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "    \n" +
    "            <div class=\"col-md-12 table-block\">\n" +
    "                <div class=\"table-responsive\">\n" +
    "                    <table class=\"table table-hover\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th>{{'Appointment Info'| translate}}</th>\n" +
    "                                <th ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">{{'Patient\\'s Name'| translate}}</th>\n" +
    "                                <th ng-if=\"$root.auth.role_id == model.ConstUserType.User\">{{'Doctor\\'s Name'| translate}}</th>\n" +
    "                                <th>{{'Appointment Date'| translate}}</th>\n" +
    "                                <th>{{'Appointment Time'| translate}}</th>\n" +
    "                                <th>{{'Status'| translate}}</th>\n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <tr ng-repeat=\"appointment in appointments\">\n" +
    "                                <td>\n" +
    "                                    <a href=\"#/appointment/{{appointment.id}}\" title=\"{{ 'View Details' | translate }}\" class=\"btn btn-green btn-animate btn-xs\">\n" +
    "                                        {{ 'Details' | translate }}\n" +
    "                                        <i class=\"fa fa-angle-double-right fa-fw\"></i>\n" +
    "                                    </a>\n" +
    "                                </td>\n" +
    "                                <td ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">{{appointment.User.user_profile.first_name}} {{appointment.User.user_profile.last_name}}</td>\n" +
    "                                <td ng-if=\"$root.auth.role_id == model.ConstUserType.User\">{{appointment.doctor_user.user_profile.first_name}} {{appointment.doctor_user.user_profile.last_name}}</td>\n" +
    "                                <td>{{appointment.appointment_date | dateFormat}}</td>\n" +
    "                                <td>{{appointment.appointment_time}}</td>\n" +
    "                                <td>{{appointment.appointment_status.name}}</td>\n" +
    "                                <tr ng-show=\"_metadata.total === 0\">\n" +
    "                                    <td colspan=\"6\" class=\"text-center\">\n" +
    "                                        <p class=\"hor-space alert alert-danger\">{{'No Record Found' |translate}}</p>\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"paging clearfix text-center\" ng-show=\"_metadata.total > 0\">\n" +
    "                    <uib-pagination previous-text=\"&#xf104\" next-text=\"&#xf105\" total-items=\"_metadata.total\" num-pages=\"_metadata.total_pages\" ng-model=\"currentPage\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-link-numbers=\"true\" rotate=\"false\" items-per-page=\"_metadata.per_page\" ng-change=\"paginate()\"></uib-pagination>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- TABLE -->");
}]);

angular.module("Appointments/appointment_modifications_add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Appointments/appointment_modifications_add.tpl.html",
    "<section class=\"clearfix pad-63 appmt-form\">\n" +
    "    <div class=\"container\">\n" +
    "    	<div class=\"col-md-5 col-md-offset-3 border\">\n" +
    "            <div class=\"page-head\">   \n" +
    "                <h1>{{'Appointment Settings Modification Add'| translate}}</h1>\n" +
    "            </div>\n" +
    "            <div class=\"form-content\">\n" +
    "                <form name=\"settingValue\" method=\"post\" ng-submit=\"model.appointmentModificationAdd(settingValue)\" novalidate>\n" +
    "                    <div class=\"form-heading\">\n" +
    "                        <h2>{{'Change Your Calender Settings'| translate}}</h2>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-body\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input class=\"form-control\" ng-model=\"model.settingValue.appoint_date\" data-date-format=\"yyyy-MM-dd\" data-start-date=\"{{date|date:'yyyy-MM-dd'}}\" data-min-date=\"{{dateBlockeBefore}}\"  data-autoclose=\"1\" name=\"date2\" bs-datepicker type=\"appoint_date\" required=\"required\" placeholder=\"Date\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label class=\"checkbox-field1\">\n" +
    "                                <input class=\"hide\" type=\"checkbox\" name=\"type\" ng-model=\"model.settingValue.type\" ng-change=\"model.ShowHide('type')\" />\n" +
    "                                <span></span>Make a day off\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "            \n" +
    "                        <div class=\"form-group\" ng-hide=\"model.settingValue.type\">\n" +
    "                            <label>Choose your Available Time</label>\n" +
    "                            \n" +
    "                            <select class=\"form-control\"  chosen single-backstroke-delete=\"true\" display-disabled-options=\"true\" multiple ng-model=\"model.settingValue.appt_time\" ng-options=\"time for time in timeSlot\">\n" +
    "                                <option value=\"\"></option>\n" +
    "                            </select>\n" +
    "                           <!-- <div class=\"form-group\">\n" +
    "                                <label class=\"checkbox-field\">\n" +
    "                                    <input type=\"checkbox\" name=\"is_two_session\" ng-model=\"model.settingValue.is_two_session\" ng-change=\"model.ShowHide('is_two_session')\" />\n" +
    "                                    <span>Practice operates in two sessions</span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label>Practice Open</label>\n" +
    "                                <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_open\" name=\"practice_open\" bs-timepicker data-time-type=\"none\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"model.settingValue.is_two_session\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Lunch At</label>\n" +
    "                                    <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.lunch_at\" name=\"lunch_at\" bs-timepicker data-time-type=\"none\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                </div>\n" +
    "    \n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Resume At</label>\n" +
    "                                    <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.resume_at\" name=\"resume_at\" bs-timepicker data-time-type=\"none\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label>Practice Close</label>\n" +
    "                                <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_close\" name=\"practice_close\" bs-timepicker data-time-type=\"none\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                            </div> \n" +
    "                           -->\n" +
    "    \n" +
    "                        </div>\n" +
    "                        <!-- Common Setting Completed Here -->\n" +
    "                        \n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Active / In Active</label>\n" +
    "                            <div class=\"switch-option\">\n" +
    "                                <switch id=\"enabled\" name=\"enabled\" ng-model=\"model.settingValue.is_active\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-footer education-btn\">\n" +
    "                        <button class=\"btn btn-green\" type=\"submit\">{{'Add'| translate }}</button>\n" +
    "                        <a href=\"#/appointments/modifications\" class=\"btn btn-red\">{{'Back'| translate }}</a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "       	</div>\n" +
    "   	</div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_modifications_edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Appointments/appointment_modifications_edit.tpl.html",
    "<section class=\"clearfix pad-63 appmt-form\">\n" +
    "    <div class=\"container\">\n" +
    "    	<div class=\"col-md-5 col-md-offset-3 border\">\n" +
    "            <div class=\"page-head\">\n" +
    "                <h1>{{'Appointment Settings Modification Add'| translate}}</h1>\n" +
    "            </div>\n" +
    "            <div class=\"form-content\">\n" +
    "                <form name=\"modificationform\" method=\"post\" ng-submit=\"model.appointmentModificationEdit(modificationform)\" novalidate>\n" +
    "                    <div class=\"form-heading\">\n" +
    "                        <h2><span>{{'Change Your Calender Settings'| translate}}</span></h2>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-body\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Date</label>\n" +
    "                            <input class=\"form-control\" ng-model=\"model.settingValue.appoint_date\" data-date-format=\"yyyy-MM-dd\" readonly data-start-date=\"{{date|date:'yyyy-MM-dd'}}\" data-min-date=\"{{date|date:'yyyy-MM-dd'}}\"  data-autoclose=\"1\" name=\"type\" bs-datepicker type=\"appoint_date\" required=\"required\">\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label class=\"checkbox-field1\">\n" +
    "                                <input class=\"hide\" type=\"checkbox\" name=\"type\" ng-model=\"model.settingValue.type\" ng-change=\"model.ShowHide('type')\" ng-checked=\"model.settingValue.type\"/>\n" +
    "                                <span></span>Make a day off\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "            \n" +
    "                        <div class=\"form-group\" ng-hide=\"model.settingValue.type\">\n" +
    "                             <label>Choose your Available Time</label>\n" +
    "                            <select class=\"form-control\"  chosen single-backstroke-delete=\"true\" display-disabled-options=\"true\" multiple ng-model=\"model.settingValue.appt_time\" ng-options=\"time for time in timeSlot\">\n" +
    "                                <option value=\"\"></option>\n" +
    "                            </select>\n" +
    "                        <!--\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"checkbox-field\">\n" +
    "                                    <input type=\"checkbox\" name=\"is_two_session\" ng-model=\"model.settingValue.is_two_session\" ng-change=\"model.ShowHide('is_two_session')\" ng-checked=\"model.settingValue.is_two_session === 1\"/>\n" +
    "                                    <span>Practice operates in two sessions</span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label>Practice Open</label>\n" +
    "                                <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_open\" name=\"practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\" ng-value=\"{{model.settingValue.practice_open}}\">\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"model.settingValue.is_two_session\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Lunch At</label>\n" +
    "                                    <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.lunch_at\" name=\"lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Resume At</label>\n" +
    "                                    <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.resume_at\" name=\"resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label>Practice Close</label>\n" +
    "                                <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_close\" name=\"practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                            </div>\n" +
    "                        -->\n" +
    "                        </div>\n" +
    "                        <!-- Common Setting Completed Here -->\n" +
    "            \n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Active / In Active</label>\n" +
    "                            <div class=\"switch-option\">\n" +
    "                                <switch id=\"enabled\" name=\"enabled\" ng-model=\"model.settingValue.is_active\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                            </div>\n" +
    "                        </div>	\n" +
    "                    </div>\n" +
    "                    <div class=\"form-footer education-btn\">\n" +
    "                        <button class=\"btn btn-green\" type=\"submit\">{{'Update'| translate }}</button>\n" +
    "                        <a href=\"#/appointments/modifications\" class=\"btn btn-red\">{{'Back'| translate }}</a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "   		</div>\n" +
    "   	</div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_modifications.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Appointments/appointment_modifications.tpl.html",
    "<section class=\"clearfix pad-63 appmt-table\">\n" +
    "	<div class=\"container\">\n" +
    "        <div class=\"page-head clearfix\">    \n" +
    "            <h1 class=\"pull-left\">{{'Appointment Settings Modification'| translate}}</h1>\n" +
    "                <!-- for search -->\n" +
    "                <div class=\"pull-right search-table-field col-md-5 appmt-modification\"> \n" +
    "                    <div class=\"pull-right col-md-3\">\n" +
    "                        <a href=\"#/appointments/modifications/add\" class=\"btn btn-green btn-animate pull-right\"><i class=\"fa fa-plus-circle fa-fw\"></i>Add</a>\n" +
    "                	</div>\n" +
    "                    <!--<div class=\"pull-right col-md-7\">\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"Search\">\n" +
    "                            <span class=\"input-group-btn\">\n" +
    "                                <button type=\"button\" class=\"btn btn-green btn-animate\">Go!</button>\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>-->\n" +
    "                </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "        <div class=\"col-md-12 table-block\"> \n" +
    "            <!-- for table -->\n" +
    "            <div class=\"table-responsive\">\n" +
    "                <table class=\"table table-hover\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th width=\"200\">{{'Date'| translate}}</th>\n" +
    "                            <th width=\"200\">{{'Type'| translate}}</th>\n" +
    "                            <th width=\"500\">{{'Slot'| translate}}</th>\n" +
    "                            <th width=\"150\">{{'Status'| translate}}</th>\n" +
    "                            <th width=\"220\">{{'Action'| translate}}</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr ng-repeat=\"modifyValue in modificationList\" ng-show=\"_metadata.total !== 0\">\n" +
    "                            <td>{{modifyValue.appoint_date | dateFormat}}</td>\n" +
    "                            <td>\n" +
    "                                <span ng-show=\"modifyValue.type == 1\">\n" +
    "                                    {{'Day Off'| translate}}\n" +
    "                                </span>\n" +
    "                                <span ng-show=\"modifyValue.type == 0\">\n" +
    "                                    {{'Schedule Change'| translate}}\n" +
    "                                </span>\n" +
    "                            </td>\n" +
    "                            \n" +
    "                            <td>\n" +
    "                                <span ng-show=\"modifyValue.practice_open == ''\">\n" +
    "                                    --\n" +
    "                                </span>\n" +
    "                                <span ng-show=\"modifyValue.practice_open != ''\" >\n" +
    "                                    <ul ng-bind-html=\"modifyValue.practice_open | splitedShow\" class=\"time-slots list-unstyled\">\n" +
    "                                    </ul>\n" +
    "                                </span>\n" +
    "                            </td>\n" +
    "                            <td>\n" +
    "                                <div class=\"switch-option\" ng-if=\"modifyValue.is_active == '1'\">\n" +
    "                                    <switch id=\"enabled\" name=\"enabled\" ng-model=\"swithcOn\" disabled=\"true\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                                </div>\n" +
    "                                <div class=\"switch-option\" ng-if=\"modifyValue.is_active != '1'\">\n" +
    "                                    <switch id=\"enabled\" name=\"enabled\" disabled=\"true\" ng-model=\"swithcOff\" on=\"Yes\"  off=\"No\" class=\"green\"></switch>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td class=\"action-btn\">\n" +
    "                                <a href=\"#/appointments/modifications/edit/{{modifyValue.id}}\" class=\"btn green\">\n" +
    "                                    <i class=\"fa fa-pencil\"></i>Edit\n" +
    "                                </a>\n" +
    "                                <a ng-click='AptModificationDelete(modifyValue.id)' class=\"btn red\">\n" +
    "                                    <i class=\"fa fa-trash\"></i>Delete\n" +
    "                                </a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr ng-show=\"_metadata.total === 0\">\n" +
    "                            <td colspan=\"5\">\n" +
    "                                <p class=\"hor-space alert alert-danger\">{{'No Record Found' |translate}}</p>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div> \n" +
    "            <div class=\"paging clearfix text-center\" ng-show=\"_metadata.total > 0\">\n" +
    "                <uib-pagination previous-text=\"&#xf104\" next-text=\"&#xf105\" total-items=\"_metadata.total\" num-pages=\"_metadata.total_pages\" ng-model=\"currentPage\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-link-numbers=\"true\" rotate=\"false\" items-per-page=\"_metadata.per_page\" ng-change=\"paginate()\"></uib-pagination>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("Appointments/appointment_setting.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Appointments/appointment_setting.tpl.html",
    "<section class=\"clearfix pad-63\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head\">    \n" +
    "            <h1>{{'Change Your Calender Settings'| translate}}</h1>\n" +
    "        </div>\n" +
    "        <div class=\"form-content calendar-settings\">\n" +
    "            <form name=\"settingForm\" ng-submit=\"model.settingUpdate(settingForm.$valid)\" novalidate>\n" +
    "                <div class=\"form-body row\">\n" +
    "                	<div class=\"clearfix\">\n" +
    "                        <div class=\"col-md-5 date-section\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"checkbox-field\">\n" +
    "                                    <input class=\"hide\" type=\"checkbox\" ng-model=\"model.settingValue.is_today_first_day\" ng-checked=\"model.settingValue.is_today_first_day === 1\" name=\"is_today_first_day\"/>\n" +
    "                                    <span class=\"custom-check\"></span>\n" +
    "                                    <span>{{'Always show today as first day on my calendar '| translate}}</span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group col-md-7\">\n" +
    "                                <select class=\"form-control\" name=\"calendar_slot_id\" ng-model=\"model.settingValue.calendar_slot_id\">  \n" +
    "                                    <option value=\"\">{{'Show Calendar Slots of'| translate}}</option>     \n" +
    "                                    <option ng-repeat=\"calendar_slot in calendarSlots\" value=\"{{calendar_slot.id}}\" ng-selected=\"model.settingValue.calendar_slot_id == calendar_slot.id\">{{calendar_slot.name}}</option>	                         \n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-7\">\n" +
    "                            <div class=\"form-group col-md-12\">\n" +
    "                                <label class=\"checkbox-field\">\n" +
    "                                    <input class=\"hide\" type=\"checkbox\" name=\"is_two_session\" ng-model=\"model.settingValue.is_two_session\" ng-checked=\"model.settingValue.is_two_session === 1\"/>\n" +
    "                                    <span class=\"custom-check\"></span>\n" +
    "                                    <span>{{'Practice operates in two sessions'| translate}}</span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-12 session-block\">\n" +
    "                                <div class=\"form-group col-md-6\">\n" +
    "                                    <label class=\"col-md-4\">{{'Practice Open'| translate}}</label>\n" +
    "                                    <div class=\"col-md-8\">\n" +
    "                                        <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_open\" name=\"practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                        <!-- <span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.practice_open.$touched) && (settingForm.practice_open.$pristine || settingForm.practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span> -->\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                 <div ng-show=\"model.settingValue.is_two_session\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">{{'Lunch At'| translate}}</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.lunch_at\" name=\"lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.lunch_at.$touched) && (settingForm.lunch_at.$pristine || settingForm.lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.open_lunch\">{{model.open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">{{'Resume At'| translate}}</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.resume_at\" name=\"resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.resume_at.$touched) && (settingForm.resume_at.$pristine || settingForm.resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                           <span class=\"error\" ng-show=\"model.lunch_resume\">{{model.lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                 </div>\n" +
    "                                <div class=\"form-group col-md-6\">\n" +
    "                                    <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                    <div class=\"col-md-8\">\n" +
    "                                        <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.practice_close\" name=\"practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                        <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.practice_close.$touched) && (settingForm.practice_close.$pristine || settingForm.practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        <span class=\"error\" ng-show=\"model.resume_close\">{{model.resume_close}}</span>\n" +
    "                                        <span class=\"error\" ng-show=\"model.open_close\">{{model.open_close}}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                           \n" +
    "                            \n" +
    "                        </div>\n" +
    "                	</div>\n" +
    "                    <!-- Common Setting Completed Here -->\n" +
    "    \n" +
    "                    <div ng-show=\"model.settingValue.type\">\n" +
    "                    	<div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                 <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_sunday_open\" ng-checked=\"model.settingValue.is_sunday_open === 1\" ng-model=\"model.settingValue.is_sunday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Sunday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"sunday_two_session\" ng-checked=\"model.settingValue.sunday_two_session === 1\" ng-model=\"model.settingValue.sunday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Sunday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                       \n" +
    "                            <div ng-show=\"model.settingValue.is_sunday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.sunday_practice_open\" name=\"sunday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.sunday_practice_open.$touched) && (settingForm.sunday_practice_open.$pristine || settingForm.sunday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.sunday_practice_close\" name=\"sunday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.sunday_practice_close.$touched) && (settingForm.sunday_practice_close.$pristine || settingForm.sunday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.sunday_resume_close\">{{model.sunday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.sunday_open_close\">{{model.sunday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                \n" +
    "                                <div ng-show=\"model.settingValue.sunday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.sunday_lunch_at\" name=\"sunday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.sunday_lunch_at.$touched) && (settingForm.sunday_lunch_at.$pristine || settingForm.sunday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.sunday_open_lunch\">{{model.sunday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.sunday_resume_at\" name=\"sunday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.sunday_resume_at.$touched) && (settingForm.sunday_resume_at.$pristine || settingForm.sunday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.sunday_lunch_resume\">{{model.sunday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_monday_open\" ng-checked=\"model.settingValue.is_monday_open === 1\" ng-model=\"model.settingValue.is_monday_open\"/>\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Monday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"monday_two_session\" ng-checked=\"model.settingValue.monday_two_session === 1\" ng-model=\"model.settingValue.monday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Monday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"model.settingValue.is_monday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                     <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.monday_practice_open\" name=\"monday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                           <!-- <span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.monday_practice_open.$touched) && (settingForm.monday_practice_open.$pristine || settingForm.monday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.monday_practice_close\" name=\"monday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.monday_practice_close.$touched) && (settingForm.monday_practice_close.$pristine || settingForm.monday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.monday_resume_close\">{{model.monday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.monday_open_close\">{{model.monday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.monday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.monday_lunch_at\" name=\"monday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.monday_lunch_at.$touched) && (settingForm.monday_lunch_at.$pristine || settingForm.monday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.monday_open_lunch\">{{model.monday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.monday_resume_at\" name=\"monday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.monday_resume_at.$touched) && (settingForm.monday_resume_at.$pristine || settingForm.monday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.monday_lunch_resume\">{{model.monday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_tuesday_open\" ng-checked=\"model.settingValue.is_tuesday_open === 1\" ng-model=\"model.settingValue.is_tuesday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Tuesday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"tuesday_two_session\" ng-checked=\"model.settingValue.tuesday_two_session === 1\" ng-model=\"model.settingValue.tuesday_two_session\"/>\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Tuesday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"model.settingValue.is_tuesday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.tuesday_practice_open\" name=\"tuesday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.tuesday_practice_open.$touched) && (settingForm.tuesday_practice_open.$pristine || settingForm.tuesday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.tuesday_practice_close\" name=\"practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.tuesday_practice_close.$touched) && (settingForm.tuesday_practice_close.$pristine || settingForm.tuesday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.tuesday_resume_close\">{{model.tuesday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.tuesday_open_close\">{{model.tuesday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.tuesday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.tuesday_lunch_at\" name=\"tuesday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.tuesday_lunch_at.$touched) && (settingForm.tuesday_lunch_at.$pristine || settingForm.tuesday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.tuesday_open_lunch\">{{model.tuesday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.tuesday_resume_at\" name=\"tuesday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                           <!-- <span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.tuesday_resume_at.$touched) && (settingForm.tuesday_resume_at.$pristine || settingForm.tuesday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.tuesday_lunch_resume\">{{model.tuesday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_wednesday_open\" ng-checked=\"model.settingValue.is_wednesday_open === 1\" ng-model=\"model.settingValue.is_wednesday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Wednesday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"wednesday_two_session\" ng-checked=\"model.settingValue.wednesday_two_session === 1\" ng-model=\"model.settingValue.wednesday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Wednesday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    \n" +
    "                            <div ng-show=\"model.settingValue.is_wednesday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.wednesday_practice_open\" name=\"wednesday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.wednesday_practice_open.$touched) && (settingForm.wednesday_practice_open.$pristine || settingForm.wednesday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.wednesday_practice_close\" name=\"wednesday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.wednesday_practice_close.$touched) && (settingForm.wednesday_practice_close.$pristine || settingForm.wednesday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.wednesday_resume_close\">{{model.wednesday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.wednesday_open_close\">{{model.wednesday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.wednesday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.wednesday_lunch_at\" name=\"wednesday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.wednesday_lunch_at.$touched) && (settingForm.wednesday_lunch_at.$pristine || settingForm.wednesday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.wednesday_open_lunch\">{{model.wednesday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.wednesday_resume_at\" name=\"wednesday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.wednesday_resume_at.$touched) && (settingForm.wednesday_resume_at.$pristine || settingForm.wednesday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.wednesday_lunch_resume\">{{model.wednesday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_thrusday_open\" ng-checked=\"model.settingValue.is_thrusday_open === 1\" ng-model=\"model.settingValue.is_thrusday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Thrusday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"thrusday_two_session\" ng-checked=\"model.settingValue.thrusday_two_session === 1\" ng-model=\"model.settingValue.thrusday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Thrusday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        \n" +
    "                            <div ng-show=\"model.settingValue.is_thrusday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.thrusday_practice_open\" name=\"thrusday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.thrusday_practice_open.$touched) && (settingForm.thrusday_practice_open.$pristine || settingForm.thrusday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.thrusday_practice_close\" name=\"thrusday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.thrusday_practice_close.$touched) && (settingForm.thrusday_practice_close.$pristine || settingForm.thrusday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.thrusday_resume_close\">{{model.thrusday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.thrusday_open_close\">{{model.thrusday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                \n" +
    "                                <div ng-show=\"model.settingValue.thrusday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.thrusday_lunch_at\" name=\"thrusday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.thrusday_lunch_at.$touched) && (settingForm.thrusday_lunch_at.$pristine || settingForm.thrusday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.thrusday_open_lunch\">{{model.thrusday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.thrusday_resume_at\" name=\"thrusday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.thrusday_resume_at.$touched) && (settingForm.thrusday_resume_at.$pristine || settingForm.thrusday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.thrusday_lunch_resume\">{{model.thrusday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_friday_open\" ng-checked=\"model.settingValue.is_friday_open === 1\" ng-model=\"model.settingValue.is_friday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Friday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"friday_two_session\" ng-checked=\"model.settingValue.friday_two_session === 1\" ng-model=\"model.settingValue.friday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Friday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    \n" +
    "                            <div ng-show=\"model.settingValue.is_friday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.friday_practice_open\" name=\"friday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.friday_practice_open.$touched) && (settingForm.friday_practice_open.$pristine || settingForm.friday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.friday_practice_close\" name=\"friday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.friday_practice_close.$touched) && (settingForm.friday_practice_close.$pristine || settingForm.friday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.friday_resume_close\">{{model.friday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.friday_open_close\">{{model.friday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.friday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.friday_lunch_at\" name=\"friday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.friday_lunch_at.$touched) && (settingForm.friday_lunch_at.$pristine || settingForm.friday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.friday_open_lunch\">{{model.friday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.friday_resume_at\" name=\"friday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.friday_resume_at.$touched) && (settingForm.friday_resume_at.$pristine || settingForm.friday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.friday_lunch_resume\">{{model.friday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "    					</div>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"col-md-5 date-section\">\n" +
    "                                    <div class=\"form-group col-md-4\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"is_saturday_open\" ng-checked=\"model.settingValue.is_saturday_open === 1\" ng-model=\"model.settingValue.is_saturday_open\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Saturday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <label class=\"checkbox-field\">\n" +
    "                                        <input class=\"hide\" type=\"checkbox\" name=\"saturday_two_session\" ng-checked=\"model.settingValue.saturday_two_session === 1\" ng-model=\"model.settingValue.saturday_two_session\" />\n" +
    "                                        <span class=\"custom-check\"></span>\n" +
    "                                        <span>Practice operates in two sessions for Saturday</span>\n" +
    "                                    </label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"model.settingValue.is_saturday_open\" class=\"col-md-7\">\n" +
    "                                <div class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Open</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.saturday_practice_open\" name=\"saturday_practice_open\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.saturday_practice_open.$touched) && (settingForm.saturday_practice_open.$pristine || settingForm.saturday_practice_open.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Practice Close</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.saturday_practice_close\" name=\"saturday_practice_close\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.saturday_practice_close.$touched) && (settingForm.saturday_practice_close.$pristine || settingForm.saturday_practice_close.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.saturday_resume_close\">{{model.saturday_resume_close}}</span>\n" +
    "                                            <span class=\"error\" ng-show=\"model.saturday_open_close\">{{model.saturday_open_close}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"model.settingValue.saturday_two_session\" class=\"col-md-12 session-block\">\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Lunch At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.saturday_lunch_at\" name=\"saturday_lunch_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.saturday_lunch_at.$touched) && (settingForm.saturday_lunch_at.$pristine || settingForm.saturday_lunch_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.saturday_open_lunch\">{{model.saturday_open_lunch}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group col-md-6\">\n" +
    "                                        <label class=\"col-md-4\">Resume At</label>\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input class=\"form-control\" size=\"8\" ng-model=\"model.settingValue.saturday_resume_at\" name=\"saturday_resume_at\" bs-timepicker data-time-type=\"time\" data-default-time=\"false\" data-time-format=\"HH:mm\" data-length=\"1\" data-minute-step=\"5\" data-arrow-behavior=\"picker\" type=\"text\">\n" +
    "                                            <!--<span class=\"error\" ng-show=\"(settingForm.$submitted || settingForm.saturday_resume_at.$touched) && (settingForm.saturday_resume_at.$pristine || settingForm.saturday_resume_at.$invalid)\">{{'Enter Valid Time'| translate }} </span>-->\n" +
    "                                            <span class=\"error\" ng-show=\"model.saturday_lunch_resume\">{{model.saturday_lunch_resume}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                   		</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-10\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label class=\"checkbox-field\">\n" +
    "                                <input class=\"hide\" type=\"checkbox\" ng-model=\"model.settingValue.type\" ng-checked=\"model.settingValue.type === 1\" name=\"type\"/>\n" +
    "                                <span class=\"custom-check\"></span>\n" +
    "                                <span>Visiting hours are NOT same for all working days in a week</span>\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group switch-option\">\n" +
    "                            <label>Active / In Active</label>\n" +
    "                            <div>\n" +
    "                                <switch id=\"enabled\" name=\"enabled\" ng-model=\"model.settingValue.is_active\" on=\"Yes\" off=\"No\" class=\"green\"></switch>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 setting-btn\">\n" +
    "                        <button class=\"js-hide-btn btn btn-green btn-animate btn-block show\" type=\"submit\">{{'Update'| translate }}</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "   	</div>\n" +
    "</section>");
}]);

angular.module("Appointments/appointment_view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Appointments/appointment_view.tpl.html",
    "<div class=\"appointment-block pad-63\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-head clearfix\">  \n" +
    "            <h1 class=\"pull-left\">{{'The appointment is scheduled for' | translate }} {{appointment.appointment_date | dateFormat}} {{appointment.appointment_time}}</h1>\n" +
    "        	<a href=\"#/appointments/all\" class=\"btn btn-red pull-right\"><i class=\"fa fa-chevron-left\"></i>Back</a>\n" +
    "        </div>\n" +
    "        <form class=\"form-horizontal appmt-view\">\n" +
    "            <div class=\"form-group\" ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                <label class=\"col-xs-4 col-sm-3 col-md-2\">{{'Doctor' | translate }}</label>\n" +
    "                <span class=\"col-xs-8 col-sm-9 col-md-10 name\">{{appointmentUser.user_profile.dr_title}} {{appointmentUser.user_profile.first_name}} {{appointmentUser.user_profile.last_name}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                <label class=\"col-xs-4 col-sm-3 col-md-2\">{{'Patient Name' | translate }}</label>\n" +
    "                <span class=\"col-xs-8 col-sm-9 col-md-10 name\">{{appointmentUser.user_profile.first_name}} {{appointmentUser.user_profile.last_name}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-xs-4 col-sm-3 col-md-2\">{{'Gender' | translate }}</label>\n" +
    "                <span class=\"col-xs-8 col-sm-9 col-md-10\">{{appointmentUser.user_profile.gender.name}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                <label class=\"col-xs-4 col-sm-3 col-md-2\">{{'Where' | translate }}</label>\n" +
    "                <span class=\"col-xs-8 col-sm-9 col-md-10\">{{appointmentUser.user_profile.address}} {{appointmentUser.user_profile.city.name}}, {{appointmentUser.user_profile.country.name}}, {{appointmentUser.user_profile.postal_code}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-xs-4 col-sm-3 col-md-2\">{{'Patient Note' | translate }}</label>\n" +
    "                <span class=\"col-xs-8 col-sm-9 col-md-10\" ng-if=\"appointment.patient_note\">{{appointment.patient_note}}</span>\n" +
    "                <span class=\"col-xs-8 col-sm-9 col-md-10\" ng-if=\"!appointment.patient_note\">--</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-xs-4 col-sm-3 col-md-2\">{{'Doctor Note' | translate }}</label>\n" +
    "                <span class=\"col-xs-8 col-sm-9 col-md-10\" ng-if=\"appointment.doctor_note\">{{appointment.doctor_note}}</span>\n" +
    "                <span class=\"col-xs-8 col-sm-9 col-md-10\" ng-if=\"!appointment.doctor_note\">--</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                <label class=\"col-xs-4 col-sm-3 col-md-2\">{{'Patient Status' | translate }}</label>\n" +
    "                <span class=\"col-xs-8 col-sm-9 col-md-10\" ng-if=\"appointment.is_seen_before == 1\"> Already Seen </span>\n" +
    "                <span class=\"col-xs-8 col-sm-9 col-md-10\" ng-if=\"appointment.is_seen_before == 0\"> New Patient </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                <label class=\"col-xs-4 col-sm-3 col-md-2\">{{'Reason for visit' | translate }}</label>\n" +
    "                <span class=\"col-xs-8 col-sm-9 col-md-10\">{{appointment.specialty_diseas.name}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-xs-4 col-sm-3 col-md-2\">{{'Appointment Status' | translate }}</label>\n" +
    "                <span class=\"col-xs-8 col-sm-9 col-md-10 label label-warning\">{{appointment.appointment_status.name}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-if=\"$root.auth.role_id == model.ConstUserType.Doctor\">\n" +
    "                <p ng-if=\"appointment.appointment_status_id == model.ConstAppointmentStatus.PendingApproval && appointmentDateTime >= todayDateTime\"> <button ng-click=\"changeappointstatus('confirm')\" class=\"btn btn-green btn-animate\"> {{'Confirm Appointment' | translate }} </button> </p>\n" +
    "                <p ng-if=\"appointment.appointment_status_id == model.ConstAppointmentStatus.PendingApproval && appointmentDateTime >= todayDateTime\"><button ng-click=\"changeappointstatus('decline')\" class=\"btn btn-danger btn-animate\"> {{'Decline Appointment' | translate }} </button> </p>\n" +
    "            </div>\n" +
    "            <div class=\"form-group appmt-view-btn\" ng-if=\"$root.auth.role_id == model.ConstUserType.User\">\n" +
    "                <p ng-if=\"appointmentDateTime >= todayDateTime &&  appointment.appointment_status_id != model.ConstAppointmentStatus.Cancelled\"> \n" +
    "                    <button ng-click=\"changeappointstatus('cancel')\" class=\"btn btn-danger btn-animate\"> \n" +
    "                        {{'Cancel Appointment' | translate }} \n" +
    "                    </button> \n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("Appointments/appointments.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Appointments/appointments.tpl.html",
    "<section class=\"clearfix\">\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "        <div class=\"panel\">\n" +
    "            <div class=\"list-header text-center well-sm\">\n" +
    "                <h3>{{'Appointments'|translate}}</h3>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"well-lg panel clearfix\" ng-controller=\"AppointmentsController\">\n" +
    "            \n" +
    "                    <tab ng-repeat=\"tab in tabs\" heading=\"{{tab.title}}\" select=\"getContent($index)\" active=\"tab.active\" disabled=\"tab.disabled\">\n" +
    "                        <div ng-hide=\"!tabs.isLoaded\">\n" +
    "                            <h1>{{tab.title}}</h1>\n" +
    "                            <div ng-repeat=\"item in tabs.content\">\n" +
    "                                <p>{{item[tab.title]}}</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div ng-hide=\"tabs.isLoaded\"><h3>Loading...</h3></div>\n" +
    "                    </tab>\n" +
    "            \n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("Search/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("Search/search.tpl.html",
    "<div class=\"doctor-search\">\n" +
    "    <div class=\"search-block\">\n" +
    "        <div class=\"container\">\n" +
    "            <form class=\"form-search form-inline text-center\" name=\"searchForm\" ng-submit=\"model.refinesearch(searchForm)\" novalidate>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <select ng-model=\"model.specialty_id\" class=\"form-control\" name=\"specialty_id\" convert-to-number>\n" +
    "                        <option value=\"\">{{'Specialty'| translate }}</option>\n" +
    "                        <option ng-repeat=\"specialtyliList in specialtyliLists\" value=\"{{specialtyliList.id}}\">{{specialtyliList.name}}</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <select ng-model=\"model.city_id\" class=\"form-control\" name=\"city_id\" convert-to-number>\n" +
    "                        <option value=\"\">{{'City'| translate }}</option>\n" +
    "                        <option ng-repeat=\"citiesliList in citiesliLists\" value=\"{{citiesliList.id}}\">{{citiesliList.name}}</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <select ng-model=\"model.insurance_id\" class=\"form-control\" name=\"insurance_id\" convert-to-number>\n" +
    "                        <option value=\"\">{{'Insurance'| translate }}</option>\n" +
    "                        <option ng-repeat=\"insurance in insurances\" value=\"{{insurance.id}}\">{{insurance.name}}</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <select ng-model=\"model.specialty_disease_id\" class=\"form-control\" name=\"specialty_disease_id\" convert-to-number>\n" +
    "                        <option value=\"\">{{'Procedure'| translate }}</option>\n" +
    "                        <option ng-repeat=\"specialtyDiseasliList in specialtyDiseasliLists\" value=\"{{specialtyDiseasliList.id}}\">{{specialtyDiseasliList.name}}</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"form-group doc-name\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Doctor Name\" name=\"doctor\" ng-model=\"model.doctor\" ng-required=\"false\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <select ng-model=\"model.language_id\" class=\"form-control\" name=\"language_id\" convert-to-number>\n" +
    "                        <option value=\"\">{{'Language'| translate }}</option>\n" +
    "                        <option ng-repeat=\"languagesList in languagesLists\" value=\"{{languagesList.id}}\">{{languagesList.name}}</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <select ng-model=\"model.gender_id\" class=\"form-control\" name=\"gender_id\" convert-to-number>\n" +
    "                        <option value=\"\">{{'Gender'| translate }}</option>\n" +
    "                        <option ng-repeat=\"genderList in genderLists\" value=\"{{genderList.id}}\">{{genderList.name}}</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group form-btn\">\n" +
    "                    <button class=\"btn btn-block\" type=\"submit\">{{'Find'| translate }}</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <div class=\"map-block\">\n" +
    "                <div map-lazy-load=\"https://maps.google.com/maps/api/js\">\n" +
    "                    <ng-map zoom=\"10\" center=\"[33.862100, -84.687900]\" class=\"map-height\">\n" +
    "                        <marker ng-repeat=\"mapPosition in mappositions\" id='{{mapPosition.id}}' position=\"{{mapPosition.lat}}, {{mapPosition.lon}}\" on-click=\"showDetail(mapPosition)\" icon=\"assets/img/hospital-marker.png\"></marker>\n" +
    "                        <info-window id=\"doctor-info\">\n" +
    "                            <div ng-non-bindable=\"\">\n" +
    "                                <div class=\"dr-avatar\"> <img class=\"img-responsive\" ng-src=\"{{doctorInfo.avatar}}\" alt=\"{{'Dr.'| translate }}{{doctorInfo.doctor_name}}\"/> </div>\n" +
    "                                <div class=\"dr-heading\">\n" +
    "                                	<h4>{{'Dr.'| translate }}{{doctorInfo.doctor_name}}</h4>\n" +
    "                                	<div class=\"dr-rate\"><input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star-o\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctorInfo.rating\"></input-stars></div>\n" +
    "                                	<div class=\"dr-location\">\n" +
    "                                        <div class=\"address1\">{{doctorInfo.address1}}</div>\n" +
    "                                        <div class=\"address2\">{{doctorInfo.address2}}</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <a href=\"#/doctor/{{doctorInfo.username}}\" class=\"btn btn-block btn-green btn-xs\">{{'Book Online'| translate }}</a>\n" +
    "                            </div>\n" +
    "                        </info-window>\n" +
    "                    </ng-map>\n" +
    "                </div>\n" +
    "          	</div>\n" +
    "     	</div>\n" +
    "  	</div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"search-responsive\">\n" +
    "                    <div class=\"search-result clearfix\">\n" +
    "                        <div class=\"search-result-header clearfix\">\n" +
    "                            <div class=\"col-md-9 pull-right\">\n" +
    "                                <div class=\"week-hender\">\n" +
    "                                    <ul class=\"search-week-ul list-inline text-center\">\n" +
    "                                        <li class=\"search-left-arrow\"><a href=\"javascript:void(0)\" ng-click=\"prevWeek()\"> <i class=\"fa fa-angle-left fa-2x\"></i></a></li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\">\n" +
    "                                                <li>{{today.day}}</li>\n" +
    "                                                <li>{{today.date}}</li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\">\n" +
    "                                                <li>{{day2.day}}</li>\n" +
    "                                                <li>{{day2.date}}</li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\">\n" +
    "                                                <li>{{day3.day}}</li>\n" +
    "                                                <li>{{day3.date}}</li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\">\n" +
    "                                                <li>{{day4.day}}</li>\n" +
    "                                                <li>{{day4.date}}</li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\">\n" +
    "                                                <li>{{day5.day}}</li>\n" +
    "                                                <li>{{day5.date}}</li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\">\n" +
    "                                                <li>{{day6.day}}</li>\n" +
    "                                                <li>{{day6.date}}</li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\">\n" +
    "                                                <li>{{day7.day}}</li>\n" +
    "                                                <li>{{day7.date}}</li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li class=\"search-right-arrow\"><a href=\"javascript:void(0)\" ng-click=\"nextWeek()\"> <i class=\"fa fa-angle-right fa-2x\"></i></a></li>\n" +
    "                                    </ul>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"search-loading-div\" id=\"search-loading-div\">\n" +
    "                            <div id=\"loading\" class=\"loadAng\">\n" +
    "                                <div class=\"bar\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"search-result-div\" id=\"search-result-div\">\n" +
    "                            {{searchLists.length}}\n" +
    "                            <div class=\"doctor-list clearfix\" ng-repeat=\"doctorList in searchLists\" ng-if=\"searchRecordShow\">\n" +
    "                                <div class=\"col-md-3 doctor-detail text-center\">\n" +
    "                                    <div class=\"doctor-profile-image\">\n" +
    "                                        <!--<a href=\"#/doctor/{{doctorList.data.User.data.username}}\">-->\n" +
    "                                            <img class=\"img-responsive\" ng-src=\"{{doctorList.data.User.data.attachmentable.data.thumb.medium}}\" alt=\"doctor\"/>\n" +
    "                                        <!--</a>-->\n" +
    "                                    </div>\n" +
    "                                    <div class=\"doctor-profile-details\">\n" +
    "                                        <!--<a href=\"#/doctor/{{doctorList.data.User.data.username}}\">-->\n" +
    "                                            <h3>{{doctorList.data.dr_title}} {{doctorList.data.first_name}} {{doctorList.data.last_name}}</h3>\n" +
    "                                        <!--</a>-->\n" +
    "                                        <p class=\"doctor-location\">\n" +
    "                                            {{doctorList.data.address}} <br/>\n" +
    "                                            {{doctorList.data.postal_code}}\n" +
    "                                            {{doctorList.data.city.data.name}}, \n" +
    "                                            {{doctorList.data.country.data.name}}\n" +
    "                                            \n" +
    "                                        </p>\n" +
    "                                        <p class=\"doctor-rating\">\n" +
    "                                            <input-stars max=\"5\" icon-base=\"fa fa-fw\" icon-empty=\"fa-star\" icon-hover=\"hover\" icon-full=\"fa-star\" readonly=\"true\" ng-model=\"doctorList.starRating\"></input-stars>\n" +
    "                                        </p>\n" +
    "                                        <a class=\"btn btn-green\" href=\"#/doctor/{{doctorList.data.User.data.username}}\">View Profile</a>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-9 doctor-booking-details doctor_{{doctorList.data.user_id}}_loadMore\">\n" +
    "                                    <ul class=\"search-week-ul list-inline text-center\">\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\" ui-if=\"!!doctorList[today.day].length\">\n" +
    "                                                <li class=\"hidden visible-xs detail-head\">{{today.day}}</li>\n" +
    "                                                <li ng-repeat=\"todaySlot in doctorList[today.day] track by $index\">\n" +
    "                                                    <span ng-show=\"todaySlot != '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{today.date}}/{{todaySlot}}\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{today.date}}/{{todaySlot}}\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                    <span ng-show=\"todaySlot == '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                           <a href=\"javascript:void(0)\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"javascript:void(0)\" class=\"btn\">{{todaySlot}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\" ui-if=\"!!doctorList[day2.day].length\">\n" +
    "                                                <li class=\"hidden visible-xs detail-head\">{{day2.day}}</li>\n" +
    "                                                <li ng-repeat=\"Day2 in doctorList[day2.day] track by $index\">\n" +
    "                                                    <span ng-show=\"Day2 != '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day2.date}}/{{Day2}}\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day2.date}}/{{Day2}}\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                    <span ng-show=\"Day2 == '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                           <a href=\"javascript:void(0)\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"javascript:void(0)\" class=\"btn\">{{Day2}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\" ui-if=\"!!doctorList[day3.day].length\">\n" +
    "                                                <li class=\"hidden visible-xs detail-head\">{{day3.day}}</li>\n" +
    "                                                <li ng-repeat=\"Day3 in doctorList[day3.day] track by $index\">\n" +
    "                                                    <span ng-show=\"Day3 != '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day3.date}}/{{Day3}}\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day3.date}}/{{Day3}}\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                    <span ng-show=\"Day3 == '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                           <a href=\"javascript:void(0)\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"javascript:void(0)\" class=\"btn\">{{Day3}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\" ui-if=\"!!doctorList[day4.day].length\">\n" +
    "                                                <li class=\"hidden visible-xs detail-head\">{{day4.day}}</li>\n" +
    "                                                <li ng-repeat=\"Day4 in doctorList[day4.day] track by $index\">\n" +
    "                                                    <span ng-show=\"Day4 != '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day4.date}}/{{Day4}}\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day4.date}}/{{Day4}}\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                    <span ng-show=\"Day4 == '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                           <a href=\"javascript:void(0)\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"javascript:void(0)\" class=\"btn\">{{Day4}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\" ui-if=\"!!doctorList[day5.day].length\">\n" +
    "                                                <li class=\"hidden visible-xs detail-head\">{{day5.day}}</li>\n" +
    "                                                <li ng-repeat=\"Day5 in doctorList[day5.day] track by $index\">\n" +
    "                                                    <span ng-show=\"Day5 != '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day5.date}}/{{Day5}}\" class=\"btn\">{{Day5}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day5.date}}/{{Day5}}\" class=\"btn\">{{Day5}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                    <span ng-show=\"Day5 == '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                           <a href=\"javascript:void(0)\" class=\"btn\">{{Day5}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"javascript:void(0)\" class=\"btn\">{{Day5}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <ul class=\"list-unstyled\" ui-if=\"!!doctorList[day6.day].length\">\n" +
    "                                                <li class=\"hidden visible-xs detail-head\">{{day6.day}}</li>\n" +
    "                                                <li ng-repeat=\"Day6 in doctorList[day6.day] track by $index\">\n" +
    "                                                    <span ng-show=\"Day6 != '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day6.date}}/{{Day6}}\" class=\"btn\">{{Day6}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day6.date}}/{{Day6}}\" class=\"btn\">{{Day6}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                    <span ng-show=\"Day6 == '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                           <a href=\"javascript:void(0)\" class=\"btn\">{{Day6}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"javascript:void(0)\" class=\"btn\">{{Day6}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "\n" +
    "                                         <li>\n" +
    "                                            <ul class=\"list-unstyled\" ui-if=\"!!doctorList[day7.day].length\">\n" +
    "                                                <li class=\"hidden visible-xs detail-head\">{{day7.day}}</li>\n" +
    "                                                <li ng-repeat=\"Day7 in doctorList[day7.day] track by $index\">\n" +
    "                                                    <span ng-show=\"Day7 != '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day7.date}}/{{Day7}}\" class=\"btn\">{{Day7}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"#/appointments/booking/{{doctorList.data.user_id}}/{{day7.date}}/{{Day7}}\" class=\"btn\">{{Day7}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                    <span ng-show=\"Day7 == '--'\">\n" +
    "                                                        <span ng-if=\"$index < appointmentLoadMore\">\n" +
    "                                                           <a href=\"javascript:void(0)\" class=\"btn\">{{Day7}}</a>\n" +
    "                                                        </span>\n" +
    "                                                        <span ng-if=\"$index >= appointmentLoadMore\" class=\"hide showmore_{{doctorList.data.user_id}}\">\n" +
    "                                                            <a href=\"javascript:void(0)\" class=\"btn\">{{Day7}}</a>\n" +
    "                                                        </span>\n" +
    "                                                    </span>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </li>\n" +
    "                                    </ul>\n" +
    "                                    <div class=\"showlessmore\" ng-if=\"doctorList[today.day].length > appointmentLoadMore || doctorList[day1.day].length > appointmentLoadMore || doctorList[day2.day].length > appointmentLoadMore || doctorList[day3.day].length > appointmentLoadMore || doctorList[day4.day].length > appointmentLoadMore || doctorList[day5.day].length > appointmentLoadMore || doctorList[day6.day].length > appointmentLoadMore || doctorList[day7.day].length > appointmentLoadMore\">\n" +
    "                                        <span class=\"showmore_btn_{{doctorList.data.user_id}} show\">\n" +
    "                                            <button ng-click=\"loadMore(doctorList.data.user_id)\" class=\"btn btn-dk-blue\">More&nbsp;<i class=\"fa fa-angle-down\"></i></button>\n" +
    "                                        </span>\n" +
    "                                        <span class=\"showless_btn_{{doctorList.data.user_id}} hide\">\n" +
    "                                            <button ng-click=\"showLess(doctorList.data.user_id)\" class=\"btn btn-red\">Less&nbsp;<i class=\"fa fa-angle-up\"></i></button>\n" +
    "                                        </span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-if=\"!searchRecordShow\" class=\"no-record-field\">\n" +
    "                                <p class=\"hor-space alert alert-danger\">{{'No Doctor Found' |translate}}</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"paging col-md-12 text-center\" ng-if=\"searchRecordShow\">\n" +
    "                            <paging\n" +
    "                                    page=\"PaginateValues.current_page\"\n" +
    "                                    page-size=\"PaginateValues.per_page\"\n" +
    "                                    total=\"PaginateValues.total\"\n" +
    "                                    pg-href={{paginateUrl}}&page={page}\n" +
    "                                    text-first=\"First\"\n" +
    "                                    text-last=\"Last\"\n" +
    "                                    text-next=\"&#xf105\"\n" +
    "                                    text-prev=\"&#xf104\"\n" +
    "                                    text-title-page=\"Page {page}\"\n" +
    "                                    text-title-first=\"First hover\"\n" +
    "                                    text-title-last=\"Last hover\"\n" +
    "                                    text-title-next=\"Next hover\"\n" +
    "                                    text-title-prev=\"Prev hover\"\n" +
    "                                    show-prev-next=\"true\"\n" +
    "                                    show-first-last=\"false\"\n" +
    "                                    ng-click=\"model.paginateRedirect()\"\n" +
    "                            >\n" +
    "                            </paging>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "        		<!-- Start: Find Doctor -->\n" +
    "                <div class=\"find-doctor\">\n" +
    "                    <h2>Find Doctors by...</h2>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-4\">\n" +
    "                            <div class=\"change-location city\">\n" +
    "                                <h4><span>{{'City'| translate }}</span></h4>\n" +
    "                                <ul class=\"list-unstyled\" ng-init=\"citiesliList=5\" ng-scrollbars ng-scrollbars-config=\"scrollbarConfig\">\n" +
    "                                    <li ng-repeat=\"citiesliList in citiesliLists | limitTo:citiesliList track by $index\" class=\"search-list-iteams\">\n" +
    "                                        <a href=\"javascript:void(0)\" ng-click=\"model.pageRedirect('city_id=' + citiesliList.id)\">{{citiesliList.name}}</a>\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        <a class=\"btn-more\" ng-click=\"$parent.citiesliList=citiesliLists.length\" ng-if=\"citiesliList==5\">More...</a>\n" +
    "                                        <a class=\"btn-more\" ng-click=\"$parent.citiesliList=5\" ng-if=\"citiesliList!=5\">Less</a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-4\">\n" +
    "                            <div class=\"change-location specialty\">\n" +
    "                                <h4><span>{{'Specialty'| translate }}</span></h4>\n" +
    "                                <ul class=\"list-unstyled\" ng-init=\"specialtyliList=5\" ng-scrollbars ng-scrollbars-config=\"scrollbarConfig\">\n" +
    "                                    <li ng-repeat=\"specialtyliList in specialtyliLists | limitTo:specialtyliList track by $index\">\n" +
    "                                        <a href=\"javascript:void(0)\" ng-click=\"model.pageRedirect('specialty_id=' + specialtyliList.id)\">{{specialtyliList.name}}</a>\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        <a class=\"btn-more\" ng-click=\"$parent.specialtyliList=specialtyliLists.length\" ng-if=\"specialtyliList==5\">More...</a>\n" +
    "                                        <a class=\"btn-more\" ng-click=\"$parent.specialtyliList=5\" ng-if=\"specialtyliList!=5\">Less</a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-4\">\n" +
    "                            <div class=\"change-location insurance\">\n" +
    "                                <h4><span>{{'Languages'| translate }}</span></h4>\n" +
    "                                <ul class=\"list-unstyled\" ng-init=\"languageList=5\" ng-scrollbars ng-scrollbars-config=\"scrollbarConfig\">\n" +
    "                                    <li ng-repeat=\"languageList in languagesLists | limitTo:languageList track by $index\">\n" +
    "                                        <a href=\"javascript:void(0)\" ng-click=\"model.pageRedirect('language_id=' + languageList.id)\">{{languageList.name}}</a>\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        <a class=\"btn-more\" ng-click=\"$parent.languageList=languageLists.length\" ng-if=\"languageList==5\">More...</a>\n" +
    "                                        <a class=\"btn-more\" ng-click=\"$parent.languageList=5\" ng-if=\"languageList!=5\">Less</a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- End: Find Doctor -->\n" +
    "   			</div>\n" +
    "		</div>\n" +
    " 	</div>\n" +
    "    <!-- Start: Contact -->\n" +
    "    <div class=\"contact-block\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-md-7 footer-logo\">" +
    "                <img src='assets/img/logo.png' alt='logo' />" +
    "                <p>{{'Need help booking online?' | translate }} {{$root.settings['site.contact_number']}}</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-5 text-right\">\n" +
    "                <a class=\"btn btn-red\" href=\"javascript:void(0);\">{{$root.settings['site.contact_email']}}</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End: Contact -->\n" +
    "</div>");
}]);

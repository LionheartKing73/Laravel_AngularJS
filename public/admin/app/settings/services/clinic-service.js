"use strict";

angular.module('app').factory('Clinic', function($http, urls) {

	var Clinic = {};

	Clinic.saveClinic = function(data,success,error){
		$http.defaults.headers.post.token = localStorage.getItem('jwt');
		$http.post(urls.BASE_API +'clinic/save',data)
			.success(success)
			.error(error);
	};

	Clinic.getCities = function(success,error){
		$http.get(urls.BASE_API +'cities/fetch', {headers:{"token" : localStorage.getItem('jwt')}})
			.success(success)
			.error(error);
	};

	Clinic.getClinicProcedures = function(success,error){
		$http.get(urls.BASE_API +'clinic/procedure/fetch', {headers:{"token" : localStorage.getItem('jwt')}})
			.success(success)
			.error(error);
	};

	return Clinic;
});
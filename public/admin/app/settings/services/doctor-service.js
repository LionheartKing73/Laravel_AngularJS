"use strict";

angular.module('app').factory('Doctor', function($http, urls) {

	var Doctor = {};

	Doctor.saveNewDoctor = function(data,success,error){
		$http.defaults.headers.post.token = localStorage.getItem('jwt');
		$http.post(urls.BASE_API +'doctor/save',data)
			.success(success)
			.error(error);
		//console.log("func tion works");
	};

	Doctor.getLanguages = function(success,error){
		$http.get(urls.BASE_API +'languages/fetch', {headers:{"token" : localStorage.getItem('jwt')}})
			.success(success)
			.error(error);
	};
	
	return Doctor;
});
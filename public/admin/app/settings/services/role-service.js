"use strict";

angular.module('app').factory('Role', function($http, urls) {

	var Doctor = {};

	Doctor.saveRole = function(data,success,error){
		$http.defaults.headers.post.token = localStorage.getItem('jwt');
		$http.post(urls.BASE_API +'user/saveRole',data)
			.success(success)
			.error(error);
		//console.log("func tion works");
	};
	
	return Doctor;
});
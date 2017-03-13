"use strict";

angular.module('app').factory('Procedure', function($http, urls) {

	var Procedure = {};

	Procedure.getProcedures = function(success,error){
		$http.get(urls.BASE_API +'doctor/procedures/fetch', {headers:{"token" : localStorage.getItem('jwt')}})
			.success(success)
			.error(error);
	};

	Procedure.saveClinicProcedures = function(data,success,error){
		$http.defaults.headers.post.token = localStorage.getItem('jwt');
		$http.post(urls.BASE_API +'clinic/procedure/save',data)
			.success(success)
			.error(error);
	};

	return Procedure;
});
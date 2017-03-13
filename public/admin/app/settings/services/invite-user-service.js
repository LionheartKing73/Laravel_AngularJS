"use strict";

angular.module('app').factory('InviteUser', function($http, urls) {

	var InviteUser = {};

	InviteUser.inviteUser = function(data,success,error){
		$http.defaults.headers.post.token = localStorage.getItem('jwt');
		$http.post(urls.BASE_API +'user/invite',data)
			.success(success)
			.error(error);
	};
	
	return InviteUser;
});
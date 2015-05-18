"use strict";

function UserMenu(adminUser) {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: '../src/user/user.tpl.html',
		scope: {},
		bindToController: true,
		controllerAs: 'ctrl',
		controller: function () {
			this.user = adminUser.getCurrentUser();
		}
	};
}

function AdminUser() {
	var currentUser = null;
	
	function getCurrentUser() {
		return currentUser;
	}
	function setCurrentUser(user) {
		currentUser = user;
	}
	
	return {
		getCurrentUser: getCurrentUser,
		setCurrentUser: setCurrentUser
	};
}
"use strict";

function ActionsMenu(adminActions) {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: '../src/actions/actions.tpl.html',
		scope: {
			lteActionsMenu: '@',
			iconClass: '@',
			badgeClass: '@'
		},
		bindToController: true,
		controllerAs: 'ctrl',
		controller: function () {
			this.messages = adminActions(this.lteActionsMenu).getMessages();
		}
	};
}

function AdminActions() {
	var map = {};
	return function (type) {
		if (!map[type]) {
			map[type] = [];
		}
		var messages = map[type];
		function getMessages() {
			return messages;
		}
		function add(item) {
			messages.unshift(item);
		}
		
		return {
			getMessages: getMessages,
			add: add
		};
	}
}
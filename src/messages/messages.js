"use strict";

function MessagesMenu(messagesService) {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: '../src/messages/messages.tpl.html',
		controllerAs: 'ctrl',
		controller: function () {
			this.messages = messagesService.getMessages();
		}
	};
}

function MessagesService() {
	var messages = [];
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
angular.module('wt.admin', [])
	.factory('messagesService', MessagesService)
	.directive('lteMessagesMenu', MessagesMenu);
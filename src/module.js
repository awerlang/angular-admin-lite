angular.module('wt.admin', [])
	.factory('adminActions', AdminActions)
	.directive('lteActionsMenu', ActionsMenu)
	
	.factory('adminMenu', AdminMenu)
	.directive('lteSideMenu', AdminSideMenu)
	
	.factory('adminUser', AdminUser)
	.directive('lteUserMenu', UserMenu);
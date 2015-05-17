"use strict";

function AdminSideMenu(adminMenu) {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: '../src/menus/side-menu.tpl.html',
		scope: {},
		bindToController: true,
		controllerAs: 'ctrl',
		controller: function () {
			var lastActive = {};
			this.menus = adminMenu.getMenus();
			this.menuClicked = function (item) {
				lastActive.active = false;
				lastActive = item;
				lastActive.active = true;
				if (item.handler) {
					item.handler(item);
				}
			};
		}
	};
}

function AdminMenu() {
	var menus = [];
	function getMenus() {
		return menus;
	}
	function addMenu(text, handler) {
		menus.push({
			text: text,
			handler: handler
		});
	}
	
	return {
		getMenus: getMenus,
		addMenu: addMenu
	}
}
function TestController(adminActions, adminMenu) {
    adminActions('message').add({
        user: {
            img: '../bower_components/admin-lte/dist/img/user2-160x160.jpg'
        },
        title: "Support Team",
        message: "Why not buy a new awesome theme?",
        timestamp: "5 mins"
    });
    
    adminActions('notification').add({title: '5 new members joined today'});
    
    adminActions('task').add({
        title: "Design some buttons",
        percentComplete: 20
    });
    
    adminMenu.addMenu('Link', function (item) { console.log(item.text);});
    adminMenu.addMenu('Another link', function (item) { console.log(item.text);});
}

angular.module('app', ['wt.admin'])
    .controller('TestController', TestController);

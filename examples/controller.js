function TestController(messagesService) {
    messagesService.add({
        user: {
            img: '../bower_components/admin-lte/dist/img/user2-160x160.jpg'
        },
        title: "Support Team",
        message: "Why not buy a new awesome theme?",
        timestamp: "5 mins"
    });
}

angular.module('app', ['wt.admin'])
    .controller('TestController', TestController);

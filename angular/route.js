myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "view/main.html",
            controller: "mainController",
            controllerAs: "mainCtrl"
        })
        .when("/books/:id1", {
            templateUrl: "view/book-detail.html",
            controller: "booksController",
            controllerAs: "bookCtrl"
        })
        .when("/characters/:id2", {
            templateUrl: "view/char-detail.html",
            controller: "charController",
            controllerAs: "charCtrl"
        })
        .when("/houses/:id3", {
            templateUrl: "view/house-detail.html",
            controller: "houseController",
            controllerAs: "hCtrl"
        })


        .otherwise({
            redirectTo: '/'

        });
}]);
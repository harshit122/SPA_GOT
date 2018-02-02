myApp.controller("mainController", ["cService", '$route', '$scope', function(cService, $route, $scope) {

    var main = this;
    this.allData = [];
    this.allCharArray = [];
    this.allBookArray = [];
    this.allHouseArray = [];
    this.all = true;
    this.book = false;
    this.character = false;
    this.house = false;

     $scope.reloadRoute = function() {
       $route.reload();
    }
    
    //to change order
    $scope.descendingButton = true;
    $scope.ascendingButton = false;

    $scope.alterOrder = 'name';

    $scope.changeOrder = function() {
    
        if ($scope.descendingButton) {
            $scope.descendingButton = false
            $scope.alterOrder = '-name';
            $scope.ascendingButton = true;
        } else if ($scope.ascendingButton) {
            //console.log("sss")
            $scope.descendingButton = true
            $scope.alterOrder = 'name';
            $scope.ascendingButton = false;
        }

    }


    this.books = function() {
        for (var i = 1; i <= 12; i++) { // to get 12 books

            cService.booksApi(i)
                .then(function successCallback(response) {

                    main.allBooks = response.data;
                    main.allBookArray.push(response.data);
                    main.allData.push(main.allBooks);

                }, function errorCallback(reason) {
                    console.log("Error in GET");
                });
        }
    }
    this.books();

    this.characters = function() {

        for (var i = 1; i <= 60; i++) { //to get 60 characters
            cService.charactersApi(i)
                .then(function successCallback(response) {

                    main.allCharacters = response.data;
                    //console.log(main.allCharacters);
                    main.allCharArray.push(main.allCharacters);
                    main.allData.push(main.allCharacters);

                }, function errorCallback(reason) {
                    alert("Error in GET");
                });
        }
    }
    this.characters();

    this.houses = function() {

        for (var i = 1; i <= 51; i++) { //to get 51 houses

            cService.housesApi(i)
                .then(function successCallback(response) {

                    main.allHouses = response.data;
                    main.allHouseArray.push(main.allHouses);
                    main.allData.push(main.allHouses);

                }, function errorCallback(reason) {
                    alert("Error in GET");
                });
        }
    }

    this.houses();
    this.allShow = function() { //to show all
        main.all = true;
        main.book = false;
        main.character = false;
        main.house = false;
    }

    this.booksShow = function() { //to show books
        main.all = false;
        main.book = true;
        main.character = false;
        main.house = false;
    }
    this.charactersShow = function() { //to show characters
        main.all = false;
        main.book = false;
        main.character = true;
        main.house = false;
    }
    this.housesShow = function() { // to show houses
        main.all = false;
        main.book = false;
        main.character = false;
        main.house = true;
    }

    //console.log("Alldara")
    //       console.log(main);

}]); // End Controller
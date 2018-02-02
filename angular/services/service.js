myApp.service("cService", function($http) {

    var main = this;



    var baseUrl1 = "https://www.anapioficeandfire.com/api/books/"; // BOOKS
    var baseUrl2 = "https://www.anapioficeandfire.com/api/characters/"; // CHARACTERS
    var baseUrl3 = "https://www.anapioficeandfire.com/api/houses/"; //HOUSES    

    this.booksApi = function(number) {

        return $http.get(baseUrl1 + number);
    }

    this.charactersApi = function(char) {

        return $http.get(baseUrl2 + char);
    }

    this.housesApi = function(house) {

        return $http.get(baseUrl3 + house);
    }


});
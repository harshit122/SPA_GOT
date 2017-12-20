myApp.controller("booksController",["$http","cService","$routeParams",function($http,cService,$routeParams){
	
	var main = this;

	this.bookId = $routeParams.id1;

	this.booksData = [];
	this.author;

	
	
	this.booksDetail = function(){

	
		cService.booksApi(main.bookId)
		.then(function successCallback(response){
	
		main.booksData.push(response.data);


		this.people =[]; // authors
		

			for(var i in response.data.authors){
				this.people.push(response.data.authors[i]);
			}

		main.author = this.people.toString(); 

		},function errorCallback(reason){
			alert("Error in GET");
		})
	};

	this.booksDetail();


}])
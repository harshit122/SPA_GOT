myApp.directive("booksDir",function(){

		return {

			restrict : "E" ,
			templateUrl : "view/books-template.html",
			controller : function($scope){	
		
		}
	}});
myApp.directive("charactersDir",function(){

		return{

			restrict : "E" ,
			templateUrl : "view/character-template.html",
			controller : function($scope){
		
		}

	}});
myApp.directive("housesDir",function(){

		return{

			restrict : "E" ,
			templateUrl : "view/houses-template.html",
			controller : function($scope){
			
		}
	}})
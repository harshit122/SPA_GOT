
myApp.controller("charController",["$http","cService","$routeParams",function($http,cService,$routeParams){
	
	var main = this;

	this.charId = $routeParams.id2;
	this.charsData = [];
	this.seasons;
		// console.log(this.charId);

	this.charDetails = function(){

		cService.charactersApi(main.charId)
		.then(function successCallback(response){

			main.charsData.push(response.data);  
			this.series =[]; //  seasons
		

			for(var i in response.data.tvSeries){
				this.series.push(response.data.tvSeries[i]);
				//console.log(main.people);
			}
			main.seasons = this.series.toString(); 


		},function errorCallback(reason){
			alert("Error in GET");
		})
	};     //function ends

	this.charDetails();
	
}])
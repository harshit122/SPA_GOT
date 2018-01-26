
myApp.controller("charController",["$http","cService","$routeParams",function($http,cService,$routeParams){
	
	var main = this;

	this.charId = $routeParams.id2;
	this.charsData = [];
	this.seasons;
	this.knownAs;
		// console.log(this.charId);

	this.charDetails = function(){

		cService.charactersApi(main.charId)
		.then(function successCallback(response){
//			console.log("sASdd")
//			console.log(response.data)

			main.charsData.push(response.data);  

			this.knownAs = [];
			
			for(var i in response.data.aliases){
				this.knownAs.push(response.data.aliases[i]);
				//console.log(main.people);
			}

			main.knownAs = this.knownAs.toString();

			this.series =[]; //  seasons
		

			for(var i in response.data.tvSeries){
				this.series.push(response.data.tvSeries[i]);
				//console.log(main.people);
			}
			//console.log("saasaSasA");
			//console.log(this.series)
			main.seasons = this.series.toString(); 


		},function errorCallback(reason){
			alert("Error in GET");
		})
	};     //function ends

	this.charDetails();
	
	//console.log(this);
}])
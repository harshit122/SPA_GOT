myApp.controller("houseController",["$http","cService","$routeParams",function($http,cService,$routeParams){
	
	var main = this;

	this.hData = [];

	this.hId = $routeParams.id3;
	this.titles;

	this.hDetails = function(){

		cService.housesApi(main.hId)
		.then(function successCallback(response){
		
			main.hData.push(response.data);

			this.names =[]; // For more titles
			

			for(var i in response.data.titles){
				this.names.push(response.data.titles[i]);
			}

			main.titles = this.names.toString(); 


		},function errorCallback(reason){
			alert("Error in GET");
		})

	}; // function ends

	this.hDetails();
//	console.log(this)
}]) // controller ends
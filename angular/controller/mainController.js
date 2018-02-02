

myApp.controller("mainController",["cService",'$route','$scope',function(cService,$route,$scope){

	var main = this;
    this.allData=[];
    this.allCharArray=[];
    this.allBookArray=[];
    this.allHouseArray=[];
    this.all=true;
    this.book=false;
    this.character=false;
    this.house=false;   

     $scope.reloadRoute = function() {
       $route.reload();
      }

  $scope.descendingButton = true;
  $scope.ascendingButton = false;

  // Here, we pass the 'orderBy' value to html //
  // According to which the data is sorted //
  // Note: Here 'name' is for ascending order and '-name' is for reverse and 'name' is the element in the ng-repeat's array //
  // The data is then sorted according to the 'sign' and element passed //
  $scope.alterOrder = 'name';



  // These functions are triggered when the sort buttons are clicked //
  // The functions are linked to the html using 'ng-click' //
  // 1. When descending order button is clicked //
  $scope.changeOrder = function() {
    console.log("sasas");
    console.log($scope.selected);
    // Pass '-' ie: the sign to tell to sort in reverse order and 'name', the element according to which the data is to be sorted //
    if($scope.descendingButton){
      $scope.descendingButton = false
      $scope.alterOrder = '-name';  
      $scope.ascendingButton = true;  
    }
    else if($scope.ascendingButton){
      //console.log("sss")
      $scope.descendingButton = true
      $scope.alterOrder = 'name';  
      $scope.ascendingButton = false;
    }
    
    //console.log("Descen");
    // Toggling Buttons //
    //$scope.descendingButton = false;
    //$scope.ascendingButton = true;
  }
  // 1. When ascending order button is clicked //
 /* $scope.changeToAscendingOrder = function() {
    // Pass '' ie: the sign to tell to sort in ascending order and 'name', the element according to which the data is to be sorted //
    $scope.alterOrder = 'name';
    //console.log("Descen");
    // Toggling Buttons //
    $scope.descendingButton = true;
    $scope.ascendingButton = false;
  }*/
//console.log("sad")

	this.books= function (){
        
        for(var i=1;i<=12;i++){  // to get 12 books

		cService.booksApi(i)
		.then(function successCallback(response){
            
            main.allBooks=response.data;
            main.allBookArray.push(response.data);
            //console.log("books")
            //  console.log(main.allBooks);
           main.allData.push(main.allBooks);
            //console.log(main.allData);
      
            
            //main.name=response.data[0].name;
           // console.log(main.name);
            
		//main.apiData = response.data ;
		
		//console.log(main.apiData);
        

        },function errorCallback(reason){
		console.log("Error in GET");
        console.log(reason)
		});
        }
	}
	this.books();
    
    this.characters= function (){
        
            for(var i=1;i<=60;i++){ //to get 60 characters
		cService.charactersApi(i)
		.then(function successCallback(response){
            
            main.allCharacters=response.data;
             //console.log(main.allCharacters);
            main.allCharArray.push(main.allCharacters);
            main.allData.push(main.allCharacters);
            
         
            
		//main.apiData = response.data ;
		
		//console.log(main.apiData);

		},function errorCallback(reason){
		alert("Error in GET");
		});
            }
	}
	this.characters();
    
    this.houses= function (){
        
        for(var i=1;i<=51;i++){ //to get 51 houses

		cService.housesApi(i)
		.then(function successCallback(response){
            
            //console.log("response")
            //console.log(response.data)
            main.allHouses=response.data;

            main.allHouseArray.push(main.allHouses);
         //   console.log("all houses")
         //    console.log(main.allHouseArray);
            main.allData.push(main.allHouses);
            //console.log("sad")
           // console.log(main)
      
            
            //main.name=response.data[0].name;

            
		//main.apiData = response.data ;
		
		//console.log(main.apiData);
        

        },function errorCallback(reason){
		alert("Error in GET");
		});
        }
	}
	
    this.houses();  
    this.allShow=function(){ //to show all
        main.all=true;
        main.book= false;
        main.character= false;
        main.house=false;
    }
    
    
    this.booksShow=function(){  //to show books
        main.all=false;
        main.book= true;
        main.character= false;
        main.house=false;
    }
     this.charactersShow=function(){  //to show characters
        main.all=false;
        main.book= false;
        main.character= true;
        main.house=false;
    }
      this.housesShow=function(){  // to show houses
        main.all=false;
        main.book= false;
        main.character= false;
        main.house=true;
    }
    
//console.log("Alldara")
           console.log(main);

}]); // End Controller

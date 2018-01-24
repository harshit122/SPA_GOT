myApp.controller("mainController",["cService",function(cService){

	var main = this;
    this.allData=[];
    this.allCharArray=[];
    this.allBookArray=[];
    this.allHouseArray=[];
    this.all=true;
    this.book=false;
    this.character=false;
    this.house=false;   

	this.books= function (){
        
        for(var i=1;i<=12;i++){  // to get 12 books

		cService.booksApi(i)
		.then(function successCallback(response){
            
            main.allBooks=response.data;
            main.allBookArray.push(main.allBooks);
            console.log("books")
            //  console.log(main.allBooks);
           main.allData.push(main.allBooks);
            //console.log(main.allData);
      
            
            //main.name=response.data[0].name;
           // console.log(main.name);
            
		//main.apiData = response.data ;
		
		//console.log(main.apiData);
        

        },function errorCallback(reason){
		alert("Error in GET");
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
            
            main.allHouses=response.data;
            main.allHouseArray.push(main.allHouses);
             //console.log(main.allBooks);
           main.allData.push(main.allHouses);
            
      
            
            //main.name=response.data[0].name;
           // console.log(main.name);
            
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
    


}]); // End Controller

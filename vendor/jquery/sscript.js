
           // ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 1000) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

$('#return-to-top').click(function() {
    $('html,body').animate({
        scrollTop: $("#filters").offset().top},
        'slow');
});


   function changeOrder() {
    // Pass '-' ie: the sign to tell to sort in reverse order and 'name', the element according to which the data is to be sorted //
    console.log("dsad");
    console.log(this.descendingButton);
    if(this.descendingButton){

      this.descendingButton = false
      this.alterOrder = '-name';  
      this.ascendingButton = true;  
    }
    else if(this.ascendingButton){
      //console.log("sss")
      this.descendingButton = true
      this.alterOrder = 'name';  
      this.ascendingButton = false;
    }
    
    //console.log("Descen");
    // Toggling Buttons //
    //$scope.descendingButton = false;
    //$scope.ascendingButton = true;
  }
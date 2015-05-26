$(document).ready(function(){

  function popDroplet(){


     $(document).keypress(function(event){
       var letter = String.fromCharCode(event.keyCode).toUpperCase();
       $('.div'+letter).css("visibility", "hidden");
      }); //closes document.keypress

    } //closes popDroplet()

      popDroplet();

    function showReplay(){
      $('#newGame').css("display", "block");
    }

    setInterval(showReplay, 36000);

 }); // closes document.ready

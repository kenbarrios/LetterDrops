$(document).ready(function(){

  function popDroplet(){

     $(document).keypress(function(event){
      if(event.keyCode == 97){
        $('.divA').css("visibility", "hidden");
      }

      else if(event.keyCode == 98){
        $('.divB').css("visibility", "hidden");
      }

      else if(event.keyCode == 99){
        $('.divC').css("visibility", "hidden");
      }

      else if(event.keyCode == 100){
        $('.divD').css("visibility", "hidden");
      }

      else if(event.keyCode == 101){
        $('.divE').css("visibility", "hidden");
      }

      else if(event.keyCode == 102){
        $('.divF').css("visibility", "hidden");
      }

      else if(event.keyCode == 103){
        $('.divG').css("visibility", "hidden");
      }

      else if(event.keyCode == 104){
        $('.divH').css("visibility", "hidden");
      }

      else if(event.keyCode == 105){
        $('.divI').css("visibility", "hidden");
      }

      else if(event.keyCode == 106){
        $('.divJ').css("visibility", "hidden");
      }

      else if(event.keyCode == 107){
        $('.divK').css("visibility", "hidden");
      }

      else if(event.keyCode == 108){
        $('.divL').css("visibility", "hidden");
      }

      else if(event.keyCode == 109){
        $('.divM').css("visibility", "hidden");
      }

      else if(event.keyCode == 110){
        $('.divN').css("visibility", "hidden");
      }

      else if(event.keyCode == 111){
        $('.divO').css("visibility", "hidden");
      }

      else if(event.keyCode == 112){
        $('.divP').css("visibility", "hidden");
      }

      else if(event.keyCode == 113){
        $('.divQ').css("visibility", "hidden");
      }

      else if(event.keyCode == 114){
        $('.divR').css("visibility", "hidden");
      }

      else if(event.keyCode == 115){
        $('.divS').css("visibility", "hidden");
      }

      else if(event.keyCode == 116){
        $('.divT').css("visibility", "hidden");
      }

      else if(event.keyCode == 117){
        $('.divU').css("visibility", "hidden");
      }

      else if(event.keyCode == 118){
        $('.divV').css("visibility", "hidden");
      }

      else if(event.keyCode == 119){
        $('.divW').css("visibility", "hidden");
      }

      else if(event.keyCode == 120){
        $('.divX').css("visibility", "hidden");
      }

      else if(event.keyCode == 121){
        $('.divY').css("visibility", "hidden");
      }

      else if(event.keyCode == 122){
        $('.divZ').css("visibility", "hidden");
      }

    }); //closes document.keypress

    } //closes popDroplet()

      popDroplet();

    function showReplay(){
      $('#newGame').css("display", "block");
    }

    setInterval(showReplay, 36000);

 }); // closes document.ready

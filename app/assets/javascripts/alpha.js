var app = app || {};

app.popAlphaDroplet = function popDroplet(){

     $(document).keypress(function(event){
       var letter = String.fromCharCode(event.keyCode).toUpperCase();
       $('.div'+letter).css("visibility", "hidden");
      }); //closes document.keypress

    } //closes popDroplet()


app.replay = function showReplay(){
      $('#newGame').css("display", "block");
    };

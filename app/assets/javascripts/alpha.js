var app = app || {};


app.popAlphaDroplet = function popDroplet(){

  var keyList = [];

  $(document).keypress(function(event){
    var letter = String.fromCharCode(event.keyCode).toUpperCase();
    $('.div'+letter).css("visibility", "hidden");
  }); //closes document.keypress

  keyList.push(String.fromCharCode(event.keyCode).toLowerCase());

  function bubbleTracker(){
    $('.liveText').text(keyList);
  };// closes bubbleTracker

  bubbleTracker();

} //closes popAlphaDroplet()

$(document).ready(function(){

  function setHandlers(){
    app.popAlphaDroplet();
    app.popWordDroplet();
  };

  setHandlers();
})

setInterval(app.hideInstructions, 5500);

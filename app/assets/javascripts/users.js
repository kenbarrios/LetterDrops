$(document).ready(function(){

  function setHandlers(){
    app.popAlphaDroplet();
    app.popWordDroplet();
  };

  setHandlers();
  setInterval(app.replay, 37000);

})

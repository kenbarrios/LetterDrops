var app = app || {};


app.popWordDroplet = function wordDroplet(){
  var emptyArr = [];

  $(document).keypress(function(event){
    //create empty array to populate with keypresses
    //push keypresses into empty array
    emptyArr.push(String.fromCharCode(event.keyCode).toLowerCase());

    //join any strings that get pushed into emptyArr
    var typedOut = emptyArr.join('');

    console.log(typedOut);

    function screenText(){
      $('.liveText').text(typedOut);
    }
    screenText();

    //create variable of FIRST word bubble and inner text
    var firstDrop = $('.wordDrop').first().text();

    if (firstDrop == typedOut) {
      $('.wordDrop').first().detach();
      emptyArr = [];
    } //closes if stmt

  }); //closes document.keypress

} //closes popWordDroplet()

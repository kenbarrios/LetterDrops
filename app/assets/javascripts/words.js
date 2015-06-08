var app = app || {};


app.popWordDroplet = function wordDroplet(){
  //create empty array to populate with keypresses
  var emptyArr = [];

  $('#wordsBody').keypress(function(event){

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
    var firstDrop = $.trim($('.wordDroplet').first().text());

    if (firstDrop == typedOut) {
      $('.wordDroplet').first().detach();
      emptyArr = [];
    } //closes if stmt

    //disable DELETE backpage default, and erase typos
    $('#wordsBody').keydown(function(e) {
      if (e.keyCode == 8) {
        e.preventDefault();
        emptyArr = [];
        $('.liveText').empty();
      };
    });

  }); //closes document.keypress

} //closes popWordDroplet()

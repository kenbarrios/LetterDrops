var app = app || {};


app.popWordDroplet = function wordDroplet(){

  $(document).keypress(function(event){
    //create empty array to populate with keypresses
    var emptyArr = [];
    //join any strings that get pushed into emptyArr
    var typedOut = emptyArr.join('');
    //push keypresses into empty array
    emptyArr.push(String.fromCharCode(event.keyCode).toLowerCase());

    console.log(typedOut);

    //create variable of FIRST word bubble and inner text
    var firstDrop = $('.wordDrop').first().text();

    // if (firstDrop == typedOut){
    //   $('.wordDrop').first().hide();
    // }
    //iterate over inner text to compare with text in typedOut array
    for (var i = 0; i < firstDrop.length; i++) {
      if (firstDrop[i] == typedOut[i]) {
        $('.wordDrop').first().hide();
      }
    }

  }); //closes document.keypress

} //closes popWordDroplet()

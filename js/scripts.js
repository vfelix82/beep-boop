$(function() {
  $('.form').submit(function(event) {
    event.preventDefault();
    var resultsArr = []
    var userValue = $('input#userInput').val();
    for (var i=0; i < userValue; i++) {
      resultsArr.push(beepBoop(i));
      $('#userOutput').text(resultsArr);
    };
  })
});

var beepBoop = function(i) {
  if (i % 3) {
    return " I'm sorry, Dave. I'm afraid I can't do that.";
  } else if (i === 1 || i === 11 || i === 12 || i === 13 || i === 14 || i === 15 || i === 16 || i === 17 || i === 18 || i === 19 || i === 21 || i === 31|| i === 41 || i === 51 || i === 61|| i === 71 || i === 81|| i === 91) {
    return " Boop!";
  } else if (i === 0 || i === 10 || i === 20 || i === 30 || i === 40 || i === 50 || i === 60 || i === 70 || i === 80 || i === 90 || i === 100 ) {
    return " Beep!";
  } else {
    return i;
  }
}

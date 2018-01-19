$(document).ready(function(){
  $(".form").submit(function(event){
    event.preventDefault();
  });
});

var answer1 = toString($("input#userTextInput").val());

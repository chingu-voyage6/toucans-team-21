$('document').ready(function(){
  setInterval(function(){ 
    $('h1').removeClass("reveal-item")
  }, 7000);
});

$('document').ready(function() {
  setInterval(function(){ 
    $('h1').addClass("reveal-item--visible")
  }, 9000);

});
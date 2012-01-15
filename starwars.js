var StarWars = {};

StarWars.startAnimation = function() {
  var content = $("#content")
  var h = $(content).height();
  $(content).css('height', 200).css('top', window.innerHeight);
  $(content).animate({top: -2*h, height: 2*h}, h*20, 'linear', function(){
    $(this).fadeOut();
  });
}


$(document).ready(function() {
  /*StarWars.trueHeight = ( function(){
    var $tempobj = $('#textContainer') // starting with truncated text div container
      .clone().contents() // duplicate the text
      .wrapAll('<div id="content"/>') // wrap it in a container
      .parent().appendTo('#scene') // add this to the dom
      .css('top','-1000px'); // but put it far off-screen
    var result = $tempobj.height(); // measure it
    $tempobj.remove(); // clean up
    return result;
  })();*/
  
  var audio = document.getElementById("song");
  audio.addEventListener("playing", function() {
    StarWars.startAnimation();
  });
  //audio.play();
  StarWars.startAnimation();
});



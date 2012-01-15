var StarWars = {};

StarWars.startAnimation = function() {
  var content = $("#content")
  var h = $(content).height();
  $(content).css('height', 200).css('top', window.innerHeight);
  $(content).animate({top: -2*h, height: 2.2*h}, h*20, 'linear', function(){
    $(this).fadeOut();
  });
}
  
$(document).ready(function(){
  var audio = document.getElementById("song");
  audio.addEventListener("playing", function() {
    StarWars.startAnimation();
  });
  audio.play();
});
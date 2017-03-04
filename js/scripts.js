var google = $('svg').drawsvg();

  //Random Number Generator
  var limit = 3;
  var randNum = Math.floor(Math.random() * limit);
  console.log(randNum);

//click on stage
$('#stage').click(function() {
  //hide play button
  $('#Layer_1').hide();
  //animate stroke drawing
  google.drawsvg('animate');
  //grab the icons
  $target = $('.icon');
  //apply randomized animation/color to the icons and reset 
  $target.removeClass('pulse' + randNum);
  setTimeout("$target.addClass('pulse'+randNum);", 100)
});
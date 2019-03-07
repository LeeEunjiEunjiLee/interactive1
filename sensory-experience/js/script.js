
$('document').ready(function(){
  $('body').click(function(){
    $('body').toggleClass('bgcolor');  
  });

  $('.thunderHover').hover(function(){
    $('.squiggle').toggleClass("squiggleOpacity");
  });
});

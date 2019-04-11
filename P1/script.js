
$('document').ready(function(){

	var distance;
	var height = $(document).height();
	var scale;

  $(window).scroll(function() {
    distance = ($(document).scrollTop());

    scale = height / (height+distance);
    console.log(scale);

    $('#halfcircle').css('transform', 'scale('+scale+')');
  });
  
});
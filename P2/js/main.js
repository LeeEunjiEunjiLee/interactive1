
$('document').ready(function(){
  $('.rainyday').hover(function() {
			  $('.rainmv').toggleClass('rainstop');
	});

  $('.letter-hover').hover(function() {
        $('.rainmv').toggleClass('rainstop');
  });

  $('body').click(function() {
        $('.rainmv').toggleClass('rain_com');
  });


});
$(document).ready(function() {
  
  $(window).scroll(function() {
    
    if ($(window).scrollTop() > 150) {
      $('header').css('opacity', '0');
    $('header').css('transition', 'all 1s ease');
    }
  });
});

var position = $(window).scrollTop(); 

// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {

    } else {
         console.log('scrollUp');
         $('header').css('opacity', '1');
    }
    position = scroll;
});

$('.counter-timer').each(function() {
			$(this).appear(function() {
				var number = $(this).attr('data-to');
				$(this).countTo({
					from: 0,
					to: number,
					speed: 1500,
					refreshInterval: 10,
					formatter: function (number, options) {
						number = number.toFixed(options.decimals);
						number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
						return number;
					}
				});
			});
		});
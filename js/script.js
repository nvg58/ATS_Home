console.log($('.nav .dropdown'));
$('.nav .dropdown').hover(function() {
	$(this).addClass('open');	
  	$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
  	console.log("zzz");
	}, function() {
  		$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();  	
  	}  	
);
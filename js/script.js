$( window ).load(function() {
	new WOW().init();

	var $dropdown_menu = $('#nav .dropdown-menu');
	var $dis = (screen.width - $dropdown_menu.width())/2 - 10;
	$dropdown_menu.css('left', $dis + 'px' );
	$dropdown_menu.css('right', $dis + 'px' );

	$('.search-box').hover(function() {
		/* Stuff to do when the mouse enters the element */	
		$(this).siblings('#icon-search').css('background-color', 'transparent');	
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});

	var $stay_update = $('.stay-update');
	console.log($('#newsletter .stay-update:before'));
	console.log($stay_update.height());
	$('head').append('<style>#newsletter .stay-update:before{border-width:' + $stay_update.height()/2 + 'px !important;}</style>');
	// $('#newsletter .stay-update').before('content');.css('border-width', $stay_update.height()/2);
});
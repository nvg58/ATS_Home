var $dropdown_menu = $('#nav .dropdown-menu');
var $dis = (screen.width - $dropdown_menu.width())/2;
$dropdown_menu.css('left', $dis + 'px' );
$dropdown_menu.css('right', $dis + 'px' );

$('.search-box').hover(function() {
	/* Stuff to do when the mouse enters the element */	
	$(this).siblings('#icon-search').css('background-color', 'transparent');	
}, function() {
	/* Stuff to do when the mouse leaves the element */
});
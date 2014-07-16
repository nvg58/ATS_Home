var $dropdown_menu = $('#nav .dropdown-menu');
console.log($(document));
console.log($dropdown_menu);
console.log($(".nav-li"));
console.log($( document ).width() + " " + $dropdown_menu.width() + " " + screen.width + " " + $(".nav-li").width());


$dropdown_menu.css('left', (- screen.width + $dropdown_menu.width())/2 + 'px');
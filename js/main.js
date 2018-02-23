var main = function () {
	$('.menu').click(function () {
		$('.nav-menu').animate({
			right: '0px'
		}, 300);
	});

	$('.icon-close').click(function() {
		$('.nav-menu').animate({
			right: '-600px'
		}, 300);
	});
};

$(document).ready(main);











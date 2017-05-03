function scroll() {
	$(window).scroll(function() {
		var height = $(window).height();
		if ($(this).scrollTop() > 50) {
			$(".header").addClass("header-background")
		} else {
			$(".header").removeClass("header-background")
		}
	})

	$('.mouse').click(function() {
		var windowHeight = $(window).height();
		$('html, body').animate({
			scrollTop: windowHeight
		}, 800);
	});
}

module.exports = scroll;

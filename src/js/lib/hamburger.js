function hamburger() {
	$('.hamburger-icon').click(function(){
		$(this).toggleClass('active');
		$('.menu-mobile').toggleClass('active');
	});
}

module.exports = hamburger;
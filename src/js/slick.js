$(document).ready(function () {
	$('.news-box').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	});
});

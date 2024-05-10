$(document).ready(function () {
	var slider = $('#slider').bxSlider({
		auto: true,
		randomStart: true,
		minSlides: 1,
		maxSlides: 1,
		slideWidth: 300,
		slideMargin: 10,
		moveSlides: 1,
		autoHover: true,
		pause: 3000,
		pager: false,
		controls: false,
		onSlideAfter: function ($slideElement, oldIndex, newIndex) {
			$('#pager').text(newIndex + 1 + '/' + slider.getSlideCount());
		}
	});

	$('#pager').text((slider.getCurrentSlide() + 1) + '/' + slider.getSlideCount());
});

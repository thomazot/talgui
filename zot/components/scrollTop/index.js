function scrollTop() {
	var currentScrolling = 0;

	$j(window).scroll(function () {

		var body = $j('body');
		var scrollTop = $j(window).scrollTop();
		var heightHeader = $j('.header-container').outerHeight();

		if (scrollTop > 0) body.addClass('scrolling');
		else body.removeClass('scrolling');


		if (scrollTop > heightHeader) {
			if (scrollTop > currentScrolling) {
				body
					.addClass('scrolling--down')
					.removeClass('scrolling--up');
			} else {
				body
					.addClass('scrolling--up')
					.removeClass('scrolling--down');
			}
			currentScrolling = scrollTop;
		} else {
			body
				.removeClass('scrolling--up')
				.removeClass('scrolling--down');
		}
	});
}

export default scrollTop;

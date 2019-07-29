export default () => {
	jQuery(document).ready(($) => {
		if (is992) {
			$('.categories .parent').click((evt) => {
				if (evt.target.classList.contains('parent')) {
					$(evt.target)
						.toggleClass('on')
						.find('> ul')
						.slideToggle()

				}
			})
		}
	});
}

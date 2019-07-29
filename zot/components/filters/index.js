export default () => {
	jQuery(document).ready(($) => {
		$('.filters__name').on('click', function () {
			$(this).closest('.filters__filter').toggleClass('off')
		})
	});
}

export default () => {
	jQuery(document).ready(($) => {

		$('.jointsales__items').each(function () {
			const names = [];
			$('.jointsales__action').prepend($('.jointsales__totals'))
			$('.jointsales__currentin .title').each(function () {
				names.push($(this).clone().text());
			})
			$('.jointsales__item .title').each(function () {
				names.push($(this).clone().text());
			})

			$('.jointsales__totals').prepend(`<div class="names">${ names.join(' + ') }</div>`)
		})

	})
}

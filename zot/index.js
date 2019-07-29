import Categories from './components/categories';
import ScrollTop from './components/scrollTop';
import Filter from './components/filters';
import Product from './pages/product'
import Instafeed from '../node_modules/instafeed.js'

export default () => {
	Categories();
	ScrollTop();
	Filter();
	Product();

	document.addEventListener("DOMContentLoaded", function () {
		const instaFeed = document.querySelector('#instafeed')
		if (instaFeed) {
			const userFeed = new Instafeed({
				get: 'user',
				userId: '348435505',
				limit: 6,
				accessToken: '348435505.1677ed0.814409af39734968865cc79183af3424',
				template: '<a href="{{link}}" class="instagram__link"><img src="{{image}}" class="instagram__img" /></a>',
				resolution: 'low_resolution'
			});
			userFeed.run();
		}
	});
}

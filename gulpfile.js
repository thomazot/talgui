var gulp = require('gulp'),
	svgSprite = require('gulp-svg-sprite'),
	clipboard = require("gulp-clipboard"),
	stylus = require('gulp-stylus'),
	svgmin = require('gulp-svgmin'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	pxtorem = require('postcss-pxtorem'),
	browserSync = require('browser-sync').create();

var config = require('./skin');
var {
	rootValue,
	unitPrecision
} = config.pxtorem;
var {
	protocol,
	host,
	theme
} = config;

var processors = [
	autoprefixer({
		grid: true,
		cascade: false
	}),
	pxtorem({
		rootValue: rootValue,
		unitPrecision: unitPrecision,
		propList: [
			'font',
			'font-size',
			'line-height',
			'letter-spacing',
			'width',
			'height',
			'margin',
			'margin*',
			'padding*',
			'top',
			'right',
			'bottom',
			'left'
		],
		mediaQuery: false,
		minPixelValue: 0,
		replace: true
	})
];

gulp.task('server', function () {
	return browserSync.init({
		port: 8080,
		proxy: [protocol, host].join('://'),
		serveStatic: require('./server/static'),
		middleware: require('./server/routes')
	}, function () {
		console.log('Altere o arquivo css/theme/general.styl para testar');
	});
});

gulp.task('svg-min', function () {
	gulp.src('svg/*.svg').pipe(svgmin({
		plugins: [{
			removeStyleElement: true
		}]
	})).pipe(gulp.dest('./svg'));
});

gulp.task('svg', function () {
	// More complex configuration example
	const config = {
		svg: {
			xmlDeclaration: false,
			doctypeDeclaration: false,
			rootAttributes: {
				class: 'svg-sprites',
				id: 'skin-sprite'
			}
		},
		mode: {
			symbol: {
				symbol: true,
				inline: false
			}
		}
	};

	gulp.src('svg/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('templates'))
		.pipe(clipboard());
});

gulp.task('prod', function () {
	gulp.src('./css/*.styl')
		.pipe(stylus({
			'include css': true,
			'import': 'vars/prod',
			'url': {
				'name': 'embedurl',
				'limit': false
			}
		}))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./css'));
	gulp.src('css/one.css').pipe(clipboard());
});

gulp.task('dev', function () {
	gulp.src('./css/*.styl')
		.pipe(stylus({
			'include css': true,
			'import': 'vars/dev',
			'url': {
				'name': 'embedurl',
				'limit': false
			}
		}))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
});

gulp.task('copy-css', function () {
	gulp.src("./css/one.css")
		.pipe(clipboard())
		.pipe(gulp.dest("./dist"));
});


gulp.task('watch', ['es7', 'dev', 'server'], function () {
	var stylus = gulp.watch('**/*.styl', ['dev']);
	var js = gulp.watch(['js/one.js', 'zot/**/*.{js,jsx}'], ['es7']);

	stylus.on('change', function (event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});

	js.on('change', function (event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		browserSync.reload();
	});


});

const browserify = require('gulp-browserify');

gulp.task('es7', function () {
	return gulp.src(['js/one.js'])
		// .pipe(babel({
		// 	presets: ['@babel/env']
		// }))
		.pipe(browserify({
			transform: ['babelify'],
			debug: false,
		}))
		.pipe(gulp.dest('js/dist'));
})

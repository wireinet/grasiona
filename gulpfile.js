const gulp = require('gulp');
// HTML
const pug = require('gulp-pug');
// SASS
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const webpCss = require('gulp-webp-css');
const csso = require('gulp-csso');
const sourceMaps = require('gulp-sourcemaps');
// JS
const webpack = require('webpack-stream');
const babel = require('gulp-babel');

const changed = require('gulp-changed');

// Images
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

// browser-sync
const browserSync = require('browser-sync').create();

gulp.task('browsersync', function() {
    browserSync.init({ 
        server: { baseDir: './docs' }
        // notify: false, 
        // online: true 
    })
});

gulp.task('pug', function() {
	return gulp
		.src(['./src/pug/**/*.pug', '!./src/pug/templates/*.pug'])
		.pipe(changed('./docs/'))
		.pipe(
			pug({
				doctype: 'html',
				pretty: false
			})
		)
		.pipe(gulp.dest('./docs/'))
		.pipe(browserSync.stream());
});

gulp.task('sass', function() {
	return gulp
		.src('./src/sass/*.sass')
		.pipe(changed('./docs/css/'))
		.pipe(sourceMaps.init())
		.pipe(autoprefixer())
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(webpCss())
		.pipe(csso())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('./docs/'))
		.pipe(browserSync.stream());
});

gulp.task('images', function() {
	return gulp
		.src('./src/images/**/*')
		.pipe(changed('./docs/images/'))
		.pipe(webp())
		.pipe(gulp.dest('./docs/images/'))
		.pipe(gulp.src('./src/images/**/*'))
		.pipe(changed('./docs/images/'))
		.pipe(imagemin({ verbose: true }))
		.pipe(gulp.dest('./docs/images/'))
		.pipe(browserSync.stream());
});

gulp.task('fonts', function () {
	return gulp
		.src('./src/fonts/**/*')
		.pipe(changed('./docs/fonts/'))
		.pipe(gulp.dest('./docs/fonts/'))
		.pipe(browserSync.stream());
});

gulp.task('files', function () {
	return gulp
		.src(['./src/*.php', './src/site.webmanifest'])
		.pipe(changed('./docs/'))
		.pipe(gulp.dest('./docs/'))
		.pipe(browserSync.stream());
});

gulp.task('fav', function () {
	return gulp
		.src('./src/fav/**/*')
		.pipe(changed('./docs/fav/**/*'))
		.pipe(gulp.dest('./docs/fav'))
		.pipe(browserSync.stream());
});

gulp.task('scripts', function () {
	return gulp
		.src('./src/scripts/*.js')
		.pipe(changed('./docs/scripts/'))
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(babel())
		.pipe(gulp.dest('./docs/'))
		.pipe(browserSync.stream());
});

gulp.task('watchers', function() {
	gulp.watch('./src/pug/**/*.pug', gulp.parallel('pug'));
	gulp.watch('./src/sass/**/*.sass', gulp.parallel('sass'));
	gulp.watch('./src/images/**/*', gulp.parallel('images'));
	gulp.watch('./src/fonts/**/*', gulp.parallel('fonts'));
	gulp.watch('./src/fav/**/*', gulp.parallel('fav'));
	gulp.watch('./src/scripts/**/*.js', gulp.parallel('scripts'));
	gulp.watch('./src/*.php', gulp.parallel('files'));
	gulp.watch('./src/site.webmanifest', gulp.parallel('files'));
});

exports.default = gulp.parallel('watchers', 'files', 'fav', 'pug', 'sass', 'images', 'fonts','scripts', 'browsersync');
var gulp = require('gulp');
var fs = require('fs');
var fest = require('fest');
var template = require('gulp-template');
var stylus = require('stylus');

var dataFest = {name: 'Jack "The Ripper"'};
var templateFest = './templates/basic.xml';
var styleOnPage = fs.readFileSync("./templates/basic.css", "utf8");

var data = {content: fest.render(templateFest, dataFest, {beautify: false}),
			styl: '<style>' + styleOnPage + '</style>'};


gulp.task('default', function () {
	return gulp.src('src/500.html')
		.pipe(template(data))
		.pipe(gulp.dest('dist'));
});
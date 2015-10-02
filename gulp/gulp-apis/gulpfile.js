/* 
 * This file will cover the four gulp APIs:
 * 1) gulp.src
 * 2) gulp.dest
 * 3) gulp.task
 * 4) gulp.watch
 *
 */

// Include gulp
var gulp = require('gulp');
var coffee = require('gulp-coffee');

/* 
 * gulp.src returns a stream of Vinyl files that match the first argument, 
 * which supports node-glob (regex-like) syntax
 */
gulp.task('coffee', function() {
	gulp.src('./src/*.coffee')
		.pipe(coffee())
		.pipe(gulp.dest('./public/'))
});

// Make a task to detect changes to coffeescript files
gulp.task('watch', function() {
	gulp.watch('./src/*.coffee', ['coffee']);
})

// Create default task
gulp.task('default', ['coffee', 'watch']);
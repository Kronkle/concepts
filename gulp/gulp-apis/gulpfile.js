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
 * gulp.task defines a new task using the Orchestrator 
 * module. Pass task a name, callback (optional), and
 * an array of 'deps' that are tasks to be executed
 * beforehand (optional).
 */
gulp.task('coffee', function() {
	/* 
 	* gulp.src returns a stream of Vinyl files that match the first argument, 
 	* which supports node-glob (regex-like) syntax
 	*/
	gulp.src('./src/*.coffee')
		.pipe(coffee())
		/* 
		 * gulp.dest writes to files and can be piped to. 
		 * Data passed to dest will always be re-emitted so you 
		 * can pass it through multiple folders via pipe. The path
		 * is determined by appending the relative path to the
		 * given destination directory and non-existent
		 * folders are created.
		 */
		.pipe(gulp.dest('./public/'))
});

// Make a task to detect changes to coffeescript files
gulp.task('watch', function() {
	/*
	 * gulp.watch watches files and performs an action 
	 * when a file changes. Pass watch a glob, options, 
	 * and an array of tasks to run when a file changes.
	 */
	gulp.watch('./src/*.coffee', ['coffee']);
})

// Create default task with an array of 'deps' defined to be executed beforehand
gulp.task('default', ['coffee', 'watch']);


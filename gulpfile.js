'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function () {
  return gulp.src('./styles/styles.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./styles'));
});
 
gulp.task('watch', function () {
  gulp.watch('./styles/styles.scss', ['sass']);
  gulp.watch('./styles/scss/*.scss', ['sass']);
});
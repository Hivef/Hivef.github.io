'use strict';

const gulp = require('gulp'), 
    sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./SCSS/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./SCSS/*.scss', ['sass']);
});
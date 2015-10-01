var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('default', ['jasmine-phantom']);

gulp.task('jasmine-phantom', function() {
  return gulp.src(['www/js/app.js', 'spec/*Spec.js'])
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless());
});

var gulp = require('gulp');
var karma = require('gulp-karma');

gulp.task('default', ['test']);

gulp.task('test', function() {
    return gulp.src('./foobar')
    .pipe(karma({
        configFile: 'karma.conf.js',
        action: 'run'
    }))
    .on('error', function(err) {
        console.log(err);
        this.emit('end');
    });
});

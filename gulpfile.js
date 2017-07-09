var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer')

// create a default task and just log a message
gulp.task('frontend', () => {
  return gulp.src('static/css/*.css')
    .pipe(cleanCSS(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    })))
    .pipe(autoprefixer({
         browsers: ['last 2 versions'],
         cascade: false
     }))
    .pipe(gulp.dest('static/frontend'));
});

var watcher = gulp.watch('static/css/*.css', ['frontend']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true,
    port: '3001',
  });
});
 
gulp.task('html', function () {
  gulp.src('./index.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./script.js')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./style.css')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./index.html'], ['html']);
  gulp.watch(['./script.js'], ['js']);
  gulp.watch(['./style.css'], ['css']);
});

gulp.task('default', ['connect', 'watch']);

 
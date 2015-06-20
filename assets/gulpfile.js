'use strict';
// gulp
var gulp = require('gulp');

// plugins
var connect   = require('gulp-connect');
var jshint    = require('gulp-jshint');
var uglify    = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean     = require('gulp-clean');
var inject    = require('gulp-inject');
var concat    = require('gulp-concat');
var rev       = require('gulp-rev');
var annotate  = require('gulp-ng-annotate');
var cssshrink = require('gulp-cssshrink');
var debug     = require('gulp-debug');

// tasks
gulp.task('lint', function() {
  gulp.src(['./angular_app/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
gulp.task('clean', function() {
  gulp.src('./dist/*')
    .pipe(clean({force: true}));
});
gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./angular_app/**/*.css'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
});
gulp.task('minify-js', function() {
  gulp.src(['./angular_app/**/*.js'])
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/'))
});
gulp.task('copy-bower-components', function () {
  gulp.src('./vendor/**')
    .pipe(gulp.dest('dist/vendor'));
});
gulp.task('copy-html-files', function () {
  gulp.src('./angular_app/**/*.html')
    .pipe(gulp.dest('dist/'));
});
gulp.task('connect', function () {
  connect.server({
    root: 'angular_app/',
    port: 8888
  });
});
gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});


// default task
gulp.task('default',
  ['lint', 'connect']
);

// build task
gulp.task('build',
  ['lint', 'minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connectDist']
);



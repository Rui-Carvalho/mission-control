'use strict';

// --------------------------- GULP SETUP ---------------------------
// gulp
var gulp = require('gulp');

// plugins
var connect      = require('gulp-connect'),
    sass         = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint       = require('gulp-jshint'),
    uglify       = require('gulp-uglify'),
    minifyCSS    = require('gulp-minify-css'),
    clean        = require('gulp-clean'),
    imagemin     = require('gulp-imagemin'),
    rename       = require('gulp-rename'),
    inject       = require('gulp-inject'),
    concat       = require('gulp-concat'),
    rev          = require('gulp-rev'),
    annotate     = require('gulp-ng-annotate'),
    prefix       = require('gulp-autoprefixer'),
    runSequence  = require('run-sequence'),
    notify       = require('gulp-notify'),
    cache        = require('gulp-cache'),
    cssshrink    = require('gulp-cssshrink'),
    debug        = require('gulp-debug'),
    livereload   = require('gulp-livereload'),
    del          = require('del');


// --------------------------- CONFIG ---------------------------
var myJsFiles = [
        'assets/angular_app/*/config.js',
        'assets/angular_app/*/*/*.js',
        'assets/angular_app/app.js'
    ],
    vendorJsFiles = [
        'assets/vendor/moment/moment.js',
        'assets/vendor/angular/angular.js',
        'assets/vendor/angular-resource/angular-resource.js',
        'assets/vendor/angular-animate/angular-animate.js',
        'assets/vendor/ngstorage/ngStorage.js',
        'assets/vendor/angular-bootstrap/ui-bootstrap.js',
        'assets/vendor/angular-cache/dist/angular-cache.js',
        'assets/vendor/angular-moment/angular-moment.js',
    ],
    allJsFiles       = myJsFiles.concat(vendorJsFiles),
    fontList         = ['vendor/boostrap-sass/assets/fonts/bootstrap/*'],
    scssSource       = 'assets/scss/**/*.scss',
    injectTargets    = 'assets/css', //template files to be injected with CSS and JS
    injectJSSources  = 'assets/js/*',
    injectCSSSources = 'assets/css/*'
    ;


// --------------------------- TASKS ---------------------------

//--Lint the JS files produced in development (not vendor ones)--
gulp.task('lint-js', function() {
  return gulp.src(myJsFiles)
    .pipe(debug({title: 'linting js file:'}))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

//--Inject CSS files in HTML in raw for development--
gulp.task('dev-inject-css', function () {
  return gulp.src(injectTargets)
    .pipe(inject(gulp.src(injectCSSSources, {read: false}), {relative: true}))
    .pipe(gulp.dest(injectTargets));
});


// =====================Terminar isto=====================

// gulp.task('clean', function() {
//   return gulp.src('./dist/*')
//     .pipe(clean({force: true}));
// });

// gulp.task('minify-css', function() {
//   var opts = {comments:true,spare:true};
//   return gulp.src(['./angular_app/**/*.css'])
//     .pipe(minifyCSS(opts))
//     .pipe(gulp.dest('./dist/'))
// });
// gulp.task('minify-js', function() {
//   return gulp.src(['./angular_app/**/*.js'])
//     .pipe(uglify({
//       // inSourceMap:
//       // outSourceMap: "app.js.map"
//     }))
//     .pipe(gulp.dest('./dist/'))
// });
// gulp.task('copy-bower-components', function () {
//   return gulp.src('./vendor/**')
//     .pipe(gulp.dest('dist/vendor'));
// });
// gulp.task('copy-html-files', function () {
//   return gulp.src('./angular_app/**/*.html')
//     .pipe(gulp.dest('dist/'));
// });
// ===============================================================

// --Task to start a server for dev and prod (testing angular app alone)--
gulp.task('connect', function () {
  return connect.server({
    root: 'angular_app/',
    port: 8888
  });
});
gulp.task('connectDist', function () {
  return connect.server({
    root: 'dist/',
    port: 9999
  });
});



// Default task ---------------------------
gulp.task('default',
  ['lint-js', 'connect']
);


// Dev Tasks ---------------------------
gulp.task('dev',
  function () {
      runSequence(
          ['lint-js'],
          //['dev-inject-js','dev-inject-css'],
          ['connect']
      );
  }
);



// Build for Production Tasks ---------------------------
gulp.task('build',
  ['lint-js', 'minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connectDist']
);



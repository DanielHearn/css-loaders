var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var del = require('del');
var runSequence = require('run-sequence');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();
var ghpages = require('gh-pages');
var path = require('path');

const scssSource = 'src/scss/*.scss';
const cssDest = 'src/css';

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
});

gulp.task('sass', function() {
  return gulp.src(scssSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());
})

gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', gulp.dest('dist')))
    .pipe(gulpIf('*.css', cssnano({zindex: false})))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
  return gulp.src('src/img/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/img'))
});

gulp.task('favicons', function(){
  return gulp.src('src/favicons/*.+(png|jpg|jpeg|gif|svg|ico|xml|json)')
  .pipe(gulpIf('*.+(png|jpg|jpeg|gif|svg)', cache(imagemin())))
  .pipe(gulp.dest('dist/favicons'))
});

gulp.task('pug', function buildHTML() {
  try {
    return gulp.src('src/pug/*.pug')
    .pipe(pug().on('error', function(err) {
      console.log(err);
    }))
    .pipe(gulp.dest("src/"))
  } catch(e) {
    console.log(e)
  }  
});

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*']);
});

gulp.task('watch', ['browserSync', 'pug', 'sass'], function (){
  gulp.watch('src/pug/*.pug', ['pug']);
  gulp.watch(scssSource, ['sass']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
  gulp.watch('src/js/*.js', browserSync.reload);
})

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['pug', 'sass', 'images', 'favicons'], 'useref',
    callback
  )
})

gulp.task('default', function(callback) {
  runSequence(['pug', 'sass'], 'watch',
    callback
  )
})

gulp.task('deploytopages', function() {
  ghpages.publish('dist', function(err) {console.log(err)});
});

gulp.task('deploy', function(callback) {
  runSequence(['build'], 'deploytopages',
    callback
  )
});
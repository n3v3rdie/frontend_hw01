var { watch, src, dest, parallel, series, task } = require('gulp');
var browserSync = require('browser-sync');
var del = require('del');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var pug = require('gulp-pug');


//Очистка билда
function clearBuild() {
    return del('build/');
  }

// Девсервер
function devServer(cb) {
  var params = {
    watch: true,
    reloadDebounce: 150,
    notify: false,
    server: { baseDir: './build' },
  };

  browserSync.create().init(params);
  cb();
}

// Сборка
function buildPages() {
  return src('src/pages/*.pug')
    .pipe(pug())
    .pipe(dest('build/'));
}

function buildStyles() {
  return src('src/styles/*.scss')
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(dest('build/styles/'));
}

function buildScripts() {
  return src('src/scripts/*.js')
    .pipe(dest('build/scripts/'));
}

function buildAssets() {
  return src('src/assets/**/*.*')
    .pipe(dest('build/assets/'));
}

// Отслеживание
function watchFiles() {
  watch('src/pages/*.pug', buildPages);
  watch('src/styles/*.scss', buildStyles);
  watch('src/scripts/*.js', buildScripts);
  watch('src/assets/**/*.*', buildAssets);
}

task('build', series(
    parallel(buildPages, buildStyles, buildScripts, buildAssets),
    watchFiles))

exports.default = series(clearBuild, parallel(devServer, 'build'));

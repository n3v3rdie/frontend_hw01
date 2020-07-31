const { watch, src, dest, parallel, series, task } = require('gulp');
const browserSync = require('browser-sync');
const del = require('del');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const webpack = require('webpack-stream');


function clearBuild() {
    return del('build/');
  }

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

function buildPages() {
  return src('src/pages/*.pug')
    .pipe(pug())
    .pipe(dest('build/'));
}

function buildStyles() {
  return src('src/styles/*.css')
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(dest('build/styles/'));
}

function buildScripts(cb) {
  src('src/scripts/lib/*.js')
    .pipe(dest('build/scripts/lib/'));
  src('src/scripts/index.js')
    .pipe(webpack({ mode: 'production', output: { filename: 'index.js' } }))
    .pipe(dest('build/scripts/'));
    
  cb();
}

function buildAssets(cb) {
  src(['src/assets/**/*.*', '!src/assets/img/**/*.*'])
    .pipe(dest('build/assets/'));

  src('src/assets/img/**/*.*')
    .pipe(imagemin())
    .pipe(dest('build/assets/img'));

  cb();
}

function watchFiles() {
  watch('src/pages/*.pug', buildPages);
  watch('src/styles/*.css', buildStyles);
  watch('src/scripts/**/*.js', buildScripts);
  watch('src/assets/**/*.*', buildAssets);
}

task('build', series(
    parallel(buildPages, buildStyles, buildScripts, buildAssets),
    watchFiles))

exports.default = series(clearBuild, parallel(devServer, 'build'));

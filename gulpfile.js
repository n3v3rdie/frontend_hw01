const { watch, src, dest, parallel, series, task } = require('gulp');
const browserSync = require('browser-sync');
const del = require('del');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
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
    .pipe(pug({
      locals: {
        menu: require('./src/pages/data/menu.json'),
        catalog: require('./src/pages/data/catalog.json'),
        product: require('./src/pages/data/shoes.json'),
        headerpromo: require('./src/pages/data/headerpromo.json'),
      }
    }))
    .pipe(dest('build/'));
}

function buildStyles(cb) {
  src('src/styles/*.css')
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(dest('build/styles/'));

  src('src/styles/*.scss')
  .pipe(sass())
  .pipe(postcss([
    autoprefixer(),
    cssnano()
  ]))
  .pipe(dest('build/styles/'));

  cb();
}

function buildScripts(cb) {
  src('src/scripts/vendor/*.js')
    .pipe(dest('build/scripts/vendor/'));

  src(['src/scripts/index.js', 'src/scripts/item-card.js', 'src/scripts/menu.js'])
    .pipe(webpack({ 
      mode: 'production',
      entry: {
        index: './src/scripts/index.js',
        menu: './src/scripts/menu.js',
        item_card: './src/scripts/item-card.js',
      },     
      output: { filename: '[name].js' } }))
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
  watch(['src/styles/*.css', 'src/styles/*.scss'], buildStyles);
  watch('src/scripts/**/*.js', buildScripts);
  watch('src/assets/**/*.*', buildAssets);
}

task('build', series(
    parallel(buildPages, buildStyles, buildScripts, buildAssets),
    watchFiles))

exports.default = series(clearBuild, parallel(devServer, 'build'));

const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const tildeImporter = require('node-sass-tilde-importer');
const filter = require('gulp-filter');
const debug = require('gulp-debug');

gulp.task('build:sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass({
      importer: tildeImporter
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('lib/esm'))
    .pipe(gulp.dest('lib/dist'));
});

gulp.task('build:js', function () {
  return gulp.src('src/**/*.js')
    .pipe(gulp.dest('lib/esm'))
    .pipe(babel({
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }))
    .pipe(gulp.dest('lib/dist'));
});


gulp.task('build', gulp.series('build:sass', 'build:js'));

gulp.task('watch', function () {
  return gulp.watch('src/**/*.{scss,js}', gulp.series('build'))
});

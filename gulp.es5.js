const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }))
    .pipe(gulp.dest('lib/dist'));
});

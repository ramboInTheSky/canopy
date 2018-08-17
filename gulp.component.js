const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const tslint = require("gulp-tslint");
const tslintReal = require("tslint");
const filter = require('gulp-filter');
const debug = require('gulp-debug');

gulp.task('lint', function () {
  // https://www.npmjs.com/package/gulp-tslint-jenkins-reporter this might work for bamboo
  const program = tslintReal.Linter.createProgram("./tsconfig.json");
  return gulp.src('src/**/*.{ts,tsx}', {
      base: '.'
    })
    .pipe(tslint({
      program,
      tslint: tslintReal,
      formatter: "stylish",
    }))
    .pipe(tslint.report({
      summarizeFailureOutput: true
    }));
});

gulp.task('build', function () {
  const declarationFilter = filter(file => !/\.d.ts/.test(file.path), {
    restore: true
  });
  return gulp.src('src/**/*.{ts,tsx}')
    .pipe(filter(file => !/\.test\./.test(file.path)))
    .pipe(gulp.dest('lib/ts'))
    .pipe(ts.createProject('./tsconfig.json')())
    // declaration files are currently broken in typescript, so we just include the src directly
    // commenting this until https://github.com/Microsoft/TypeScript/issues/25278 is fixed
    // then output them to lib/types
    // .pipe(declarationFilter)
    .pipe(babel())
    .pipe(gulp.dest('lib/esm'))
    .pipe(babel({
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }))
    .pipe(gulp.dest('lib/dist'));
});

gulp.task('watch', function () {
  return gulp.watch('src/**/*.{ts,tsx}', gulp.series('build'));
});

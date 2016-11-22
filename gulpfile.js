/* eslint-disable import/no-extraneous-dependencies */
const babel = require('gulp-babel');
const gulp = require('gulp');
const env = require('gulp-env');
const nodemon = require('gulp-nodemon');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
/* eslint-enable import/no-extraneous-dependencies */

gulp.task('js', () => {
  gulp.src('src/**/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ['latest', 'stage-3'] }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js'], () => {
  gulp.watch('src/**/*.js', ['js']);
  env({ file: '.env.json' });
  nodemon({ script: 'dist/index.js', ignore: 'src' });
});

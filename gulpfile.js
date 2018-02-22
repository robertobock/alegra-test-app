var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var fs = require('fs');


var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', ['sass'], function() {
  gulp.watch(paths.sass, ['sass']);
});

var ENV = process.env.APP_ENV || 'development';

// Here, we use dotenv  to load our env vars in the .env, into process.env
if (ENV === 'development') {
  require('dotenv').load();
}

var config = require('./conf.js');
var ngConfig = require('gulp-ng-config');

/*
 *  We first generate the json file that gulp-ng-config uses as input.
 *  Then we source it into our gulp task.
 *  The env constants will be a saved as a sub-module of our app, ngEnVars.
 *  So we shall name it ngEnvVars.config.
 */
 gulp.task('ng-config', function() {
   fs.writeFileSync('./config.json',
                    JSON.stringify(config[ENV]));
   gulp.src('./config.json')
       .pipe(
       ngConfig('ngEnvVars', {
         createModule: true
       })
   )
       .pipe(gulp.dest('./www/js/'))
 });

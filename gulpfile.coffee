gulp        = require 'gulp'
gutil       = require 'gulp-util'
livereload  = require 'gulp-livereload'
nodemon     = require 'gulp-nodemon'
watch       = require 'gulp-watch'
jshint      = require 'gulp-jshint'
prefix      = require 'gulp-autoprefixer'
stylus      = require 'gulp-stylus'

gulp.task 'start', () ->
    gutil.log gutil.colors.green 'Gulp: startup'

gulp.task 'lint', () ->
  gutil.log gutil.colors.red 'Gulp: linting'
  gulp.src './**/*.js'
  .pipe jshint()

gulp.watch 'watch', () ->
  gutil.log gutil.colors.magenta 'watching stylus: '
  gulp.src './controllers'
  .pipe watch './controllers/**/*.js'
  .pipe gulp.dest './build/'

nodemonSettings =
  script: 'server.js'
  ext: 'js html'
  env:
    'NODE_ENV': 'development'

gulp.task 'nodemon', () ->
  nodemon nodemonSettings
  .on 'change', ['lint']
  .on 'restart', ->
	gutil.log gutil.colors.green 'Nodemon: restarted node server.'

gulp.task 'default', ['start','lint','nodemon']

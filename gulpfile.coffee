gulp        = require 'gulp'
gutil       = require 'gulp-util'
livereload  = require 'gulp-livereload'
nodemon     = require 'gulp-nodemon'
watch       = require 'gulp-watch'
jshint      = require 'gulp-jshint'
prefix      = require 'gulp-autoprefixer'
stylus      = require 'gulp-stylus'
jade        = require 'gulp-jade'

param = require './gulpconfig.coffee'

gulp.task 'lint', () ->
  gutil.log gutil.colors.red 'Gulp: linting js'
  gulp.src param.all_js_files, base: './'
  .pipe jshint()
  .pipe jshint.reporter 'default'

gulp.task 'watch', () ->
  gutil.log gutil.colors.magenta 'Gulp: watching stylus files'
  gulp.watch param.styles, ['styles']
  gutil.log gutil.colors.magenta 'Gulp: watching all js files'
  gulp.watch param.all_js_files, ['lint']
  gutil.log gutil.colors.magenta 'Gulp: watching all jade jade'
  gulp.watch param.jade_watch, ['jade']

gulp.task 'styles', () ->
  gutil.log gutil.colors.yellow 'Gulp: compiling stylus'
  gulp.src param.styles
  .pipe stylus()
  .pipe prefix 'last 2 versions'
  .pipe gulp.dest param.dist_css

gulp.task 'jade', () ->
  gutil.log gutil.colors.yellow 'Gulp: compiling jade'
  gulp.src param.jade_views
  .pipe jade( pretty: true)
  .pipe gulp.dest param.dist_html

gulp.task 'nodemon', () ->
  nodemon nodemonSettings
  .on 'change', ['lint']
  .on 'restart', ->
	gutil.log gutil.colors.green 'Gulp: restarted node server.'

nodemonSettings =
  script: 'server.js'
  ext: 'js'
  env:
    'NODE_ENV': 'development'


gulp.task 'default', ['jade','styles','lint','nodemon','watch']

var gulp = require("gulp");
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync').create()
var  $ = gulpLoadPlugins();

gulp.task('css', function(){
  return gulp.src('./src/scss/lazyui.scss')
  .pipe($.plumber())
  .pipe($.sass.sync({
    outputStyle: 'expanded',
    precision: 10,
    includePaths: ['.']
  }).on('error', $.notify.onError("Error: <%= error.message %>")))
  .pipe($.autoprefixer({ browsers: ['last 2 versions'],cascade: false }))
  .pipe(gulp.dest('./src/styles'))
})

/**
 * 服务器配置，使用9100端口, baseDir是服务器访问目录，index是指默认端口打开的页面；
 * @param  {[type]} )
 * @return {[type]}     [description]
 */
gulp.task('serve', function(){
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });

  console.log('BS服务启动成功')
});


gulp.task('default', ['css'])
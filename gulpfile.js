var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

// 生成文件的路径
var app = {
  srcPath: 'src/',
  devPath: 'build/',
  prdPath: 'dist/'
};

// 定义任务
gulp.task('lib', function () {
  gulp.src('bower_components/**/*.js')
    .pipe(gulp.dest(app.devPath + 'vendor'))
    .pipe(gulp.dest(app.prdPath + 'vendor'))
    .pipe($.connect.reload()); // 刷新加载
});

// gulp 3
gulp.task('html',function(){
  gulp.src(app.srcPath + '**/*.html')
    .pipe(gulp.dest(app.devPath))
    .pipe(gulp.dest(app.prdPath))
    .pipe($.connect.reload());
});

gulp.task('json',function(){
  gulp.src(app.srcPath + 'data/**/*.json')
    .pipe(gulp.dest(app.devPath + 'data'))
    .pipe(gulp.dest(app.prdPath + 'data'))
    .pipe($.connect.reload());
});

gulp.task('less', function () {
  gulp.src(app.srcPath + 'style/index.less')
    .pipe($.less())
    .pipe(gulp.dest(app.devPath + 'css'))
    .pipe($.cssmin()) // 压缩
    .pipe(gulp.dest(app.prdPath + 'css'))
    .pipe($.connect.reload());
});

gulp.task('js', function () {
  gulp.src(app.srcPath + 'script/**/*.js')
    .pipe($.concat('index.js'))
    .pipe(gulp.dest(app.devPath + 'js'))
    .pipe($.uglify()) // 压缩
    .pipe(gulp.dest(app.prdPath + 'js'))
    .pipe($.connect.reload());
});

gulp.task('image', function () {
  gulp.src(app.srcPath + 'image/**/*')
    .pipe(gulp.dest(app.devPath + 'image'))
    .pipe($.imagemin())
    .pipe(gulp.dest(app.prdPath + 'image'))
    .pipe($.connect.reload());
});

/* 清除 gulp clean*/
gulp.task('clean', function () {
  gulp.src([app.devPath, app.prdPath])
    .pipe($.clean());
});

/* 文件打包*/
// gulp 3
// gulp.task('build', ['image', 'js', 'less', 'lib', 'html', 'json']);
// gulp 4
gulp.task('build', gulp.series(gulp.parallel('image', 'js', 'less', 'lib', 'html', 'json')));

/* 启动服务 */
// gulp 3
// gulp.task('serve', ['build'], function () {
//   $.connect.server({
//     root: [app.devPath],
//     livereload: true,
//     port: 3000
//   });
//   open('http://localhost:3000');

//   //监控
//   gulp.watch('bower_components/**/*', ['lib']);
//   gulp.watch(app.srcPath + '**/*.html', ['html']);
//   gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
//   gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
//   gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
//   gulp.watch(app.srcPath + 'image/**/*', ['image']);
// });

// gulp 4
// server任务，目录为dist，入口文件为dist/index.html，port 3000
gulp.task('server', function() {
  $.connect.server({
    root: [app.devPath],
    livereload: true,
    port: 3000
  });
});

// watch任务，监听源文件变化，执行对应开发任务
gulp.task('watch', () => {
  gulp.watch('bower_components/**/*', gulp.series('lib'));
  gulp.watch(app.srcPath + '**/*.html', gulp.series('html'));
  gulp.watch(app.srcPath + 'data/**/*.json', gulp.series('json'));
  gulp.watch(app.srcPath + 'style/**/*.less', gulp.series('less'));
  gulp.watch(app.srcPath + 'script/**/*.js', gulp.series('js'));
  gulp.watch(app.srcPath + 'image/**/*', gulp.series('image'));
});

// dev任务，启动开发环境
gulp.task('dev', gulp.series(gulp.parallel('watch', 'server')));

gulp.task('default', gulp.series('server'));
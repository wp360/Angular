# 仿拉勾网
## Angularjs调试工具： batarang
* 主要功能： 查看作用域、输出调试信息、性能监控
> 下载地址： https://pan.baidu.com/s/1jGILtzg
## 第三方依赖管理工具
* 自动化开发工具：bower
```
· 常用命令： bower init、bower install、bower uninstall
· 配置文件： .bowerrc、bower.json
################################
》 使用演示： 输入bower init
? name lagou
? description Angularjs WebApp
? main file angularjs
? keywords
? authors wp360
? license MIT
? homepage
? set currently installed components as dependencies? Yes
? add commonly ignored files to ignore list? Yes
? would you like to mark this package as private which prevents it from being ac
? would you like to mark this package as private which prevents it from being ac
cidentally published to the registry? No

{
  name: 'lagou',
  authors: [
    'wp360'
  ],
  description: 'Angularjs WebApp',
  main: 'angularjs',
  license: 'MIT',
  homepage: '',
  ignore: [
    '**/.*',
    'node_modules',
    'bower_components',
    'test',
    'tests'
  ]
}

? Looks good? Yes
```
* 代码管理工具： git
* 安装angularjs
`bower install --save angular#1.5.8`
## css预编译处理： less
> less文件  》 less工具  》 css文件
* 常用语法： 定义变量、后代选择器、文件引用、函数
[文档 -- https://less.bootcss.com/](https://less.bootcss.com/)

[在线工具 -- https://tool.oschina.net/less](https://tool.oschina.net/less)

## 自动化构建工具
* gulp （优点： 基于流、任务化；常用api： src、dest、watch、task、pipe）
[中文网站：https://www.gulpjs.com.cn/](https://www.gulpjs.com.cn/)

> 用自动化构建工具增强你的工作流程！
* 1. 全局安装gulp
`cnpm i -g gulp`
* 此处已经安装淘宝镜像cnpm（如果已经开启付费的VPN可以直接npm i -g gulp）

* 2. npm 初始化
`npm init`
直接Enter回车即可，后续再进行补充填写，当然直接一次添加也行

* 3. 当前目录安装gulp
`cnpm i --save-dev gulp`
* 此外，另有9个相关模块需要安装
`cnpm install --save-dev gulp-clean gulp-concat gulp-connect gulp-cssmin gulp-imagemin gulp-less gulp-load-plugins gulp-uglify open`

* 4. gulp配置文件gulpfile.js
```js
// gulpfile.js
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
gulp.task('lib', function() {
  gulp.src('bower_components/**/*.js')
  .pipe(gulp.dest(app.devPath + 'vendor'))
  .pipe(gulp.dest(app.prdPath + 'vendor'))
  .pipe($.connect.reload());
});
```
#### gulp lib报错问题处理
```
错误内容：
...\NodeJs\node_global\node_modules\gulp\bin\gulp.js:129
    gulpInst.start.apply(gulpInst, toRun);
                   ^
TypeError: Cannot read property 'apply' of undefined
```
* 解决办法： 安装 npm i gulp-cli -g

* 启动项目 gulp dev

#### gulp3 与 gulp4的区别
[gulp4在前端工程化中的应用](https://juejin.im/post/5ce92417f265da1ba328a0e0)

## 模块划分

## 路由配置
* 1. 安装ui-router
`bower install --save ui-router`

## 路由模块总结扩展
```js
// src/script/config/router.js
'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'view/main.html',
    controller: 'mainCtrl'
  });
  // 默认跳转
  $urlRouterProvider.otherwise('main');
}]);

```

## 移动端自适应
```html
<!-- 使用js定义字体大小，再用rem设置 -->
<script type="text/javascript">
  document.getElementsByTagName('html')[0].style.fontSize = window.screen.width / 10 + 'px';
</script>
```

## 指令：app-head

## 指令：app-foot

## 上传github
```
git remote add origin https://github.com/wp360/Angular.git

git checkout -b lagou

git status

git add .

git commit -m "项目初始化"

git push

git push --set-upstream origin lagou
```
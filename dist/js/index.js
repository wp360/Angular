"use strict";angular.module("app",["ui.router"]),angular.module("app").config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("main",{url:"/main",templateUrl:"view/main.html",controller:"mainCtrl"}).state("position",{url:"/position/:id",templateUrl:"view/position.html",controller:"positionCtrl"}),t.otherwise("main")}]),angular.module("app").controller("mainCtrl",["$scope",function(e){e.list=[{id:"p3",imageUrl:"/image/company-3.png",job:"销售",companyId:"c3",companyName:"千度",cityId:"c2",cityName:"上海",scaleId:"s4",scaleName:"500人以上",industryId:"i1",industryName:"互联网",salaryId:"s2",salaryName:"3k-5k",experience:"1-3年",education:"专科",benefit:"成长空间大",description:"岗位职责：\n1.销售产品；...",date:"2016-06-01 11:05"}]}]),angular.module("app").controller("positionCtrl",["$scope",function(e){}]),angular.module("app").directive("appFoot",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/foot.html"}}]),angular.module("app").directive("appHead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/head.html"}}]),angular.module("app").directive("appHeadBar",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/headBar.html",scope:{text:"@"},link:function(e){e.back=function(){window.history.back()}}}}]),angular.module("app").directive("appPositionList",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positionList.html",scope:{data:"="}}}]);
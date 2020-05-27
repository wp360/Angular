'use strict';

angular.module('app', ['ui.router']);
'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'view/main.html',
    controller: 'mainCtrl'
  }).state('position', {
    url: '/position/:id',
    templateUrl: 'view/position.html',
    controller: 'positionCtrl'
  });
  // 默认跳转
  $urlRouterProvider.otherwise('main');
}]);

'use strict';
angular.module('app').controller('mainCtrl', ['$scope', function($scope) {
  $scope.list = [{
    "id": "p3",
    "imageUrl": "/image/company-3.png",
    "job": "销售",
    "companyId": "c3",
    "companyName": "千度",
    "cityId": "c2",
    "cityName": "上海",
    "scaleId": "s4",
    "scaleName": "500人以上",
    "industryId": "i1",
    "industryName": "互联网",
    "salaryId": "s2",
    "salaryName": "3k-5k",
    "experience": "1-3年",
    "education": "专科",
    "benefit": "成长空间大",
    "description": "岗位职责：\n1.销售产品；...",
    "date": "2016-06-01 11:05"
  }];
}]);
'use strict';
angular.module('app').controller('positionCtrl', ['$scope', function ($scope) {

}]);
'use strict';
angular.module('app').directive('appFoot', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/foot.html'
  };
}]);
'use strict';
angular.module('app').directive('appHead', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/head.html'
  };
}]);
'use strict';
angular.module('app').directive('appHeadBar', [function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/headBar.html',
    scope: {
      text: '@'
    },
    link: function ($scope) {
      $scope.back = function () {
        window.history.back();
      };
    }
  };
}]);

'use strict';
angular.module('app').directive('appPositionList', [function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/positionList.html',
    scope: {
      data: '='
    }
  };
}]);
var chinaBowlMenu = angular.module('china-bowl-menu', [])

chinaBowlMenu.controller('china-bowl-menu-controller', function ChinaBowlMenuController($scope, $http) {

  $http.get('menu.json').success(function (data) {
    $scope.menu = data
  })

})
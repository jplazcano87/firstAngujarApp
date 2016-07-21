var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider) {

  $routeProvider
  .when('/',{
    templateUrl: 'page/home.htm',
    controller: 'homeController'
  })
  .when('/forecast',{
    templateUrl: 'pages/forecast.htm',
    controller: 'forecastController'
  });

});

weatherApp.controller('homeController', ['$scope','cityService', function() {
  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });

}]);

weatherApp.controller('forecastController', ['$scope','cityService', function() {
   $scope.city = cityService.city;
}]);

weatherApp.service('cityService', function() {
   this.city = "New York, NY";

});

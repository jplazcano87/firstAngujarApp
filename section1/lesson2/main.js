var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function($scope) {
  $scope.formData = {};
  $scope.onSumbit = function() {
      console.log("hey i just press sumbited");
      console.log($scope.formData);
  };

});

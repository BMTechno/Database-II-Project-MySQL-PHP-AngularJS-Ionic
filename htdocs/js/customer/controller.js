angular.module('ionicApp').controller('customersCtrl', function($scope, $http) {
    $http.get("http://localhost/json_pages/test_json.php")
        .then(function (response) {
        	$scope.model_object = response.data.records;
        });
});

/*
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://localhost/test_json.php")
             .then(function (response) {$scope.model_object = response.data.records;});
});
*/
angular.module('ionicApp').controller('studentController', function($scope, $http) {
    
    $http.get("http://localhost/client/json_pages/test_json.php")
        .then(function (response) {
            $scope.model_object = response.data.records;

            console.log("  trying to refresh model  ");
        })




});

/*
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://localhost/test_json.php")
             .then(function (response) {$scope.model_object = response.data.records;});
});
*/
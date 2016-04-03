/**
 * Created by root on 3/28/16.
 */
angular.module('ionicApp').controller('updateController', function($scope, $http) {


    $scope.updateStudent = function(){
        $http.post("CRUD/update_student/update_student.php",
            {
                'SID':$scope.SID,
                'IID':$scope.IID,
                'major':$scope.major
                })
            .success(function(data){
                console.log("Data updated successfully");
        });
    }


});
/**
 * Created by root on 3/28/16.
 */
angular.module('ionicApp').controller('deleteController', function($scope, $http) {


    $scope.deleteStudent = function(){
        $http.post("CRUD/delete_student/delete_student.php",
            {
                'SID':$scope.SID
                })
            .success(function(data){
                console.log("Data updated successfully");
        });

    }


});
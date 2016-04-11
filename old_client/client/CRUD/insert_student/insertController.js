/**
 * Created by root on 3/28/16.
 */
angular.module('ionicApp').controller('insertController', function($scope, $http) {

    $scope.insertStudent = function(){
        $http.post("CRUD/insert_student/insert_student.php",
            {
                'SID':$scope.SID, 'name':$scope.name,
                'IID':$scope.IID, 'major':$scope.major,
                'degreeHeld':$scope.degreeHeld, 'career':$scope.career})
            .success(function(data){
                console.log("Data updated successfully");
        });
    }
});
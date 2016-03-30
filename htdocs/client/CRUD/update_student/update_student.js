/**
 * Created by root on 3/28/16.
 */
angular.module('ionicApp').controller('updateController', function($scope, $http) {

    $scope.updateStudent = function(){
        $http.post("update_student.php", {
            'SID':$scope.SID, 'name':$scope.name,
            'IID':$scope.IID, 'major':$scope.major,
            'degreeHeld':$scope.degreeHeld, 'career':$scope.career})

            .success(function(data, status, headers, config){
                console.log("Data updated successfully");
        });

    }


});
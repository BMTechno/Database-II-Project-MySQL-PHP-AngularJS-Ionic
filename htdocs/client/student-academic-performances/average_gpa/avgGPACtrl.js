angular.module('ionicApp').controller('studentAcademicController', function($scope, $http) {

    $scope.SID_and_GPA = [{'SID':"", 'GPA':""}];
    $scope.getGPA = function(){
        console.log($scope.SID);

        $http.post("student-academic-performances/average_gpa/post_SID_to_get_average_gpa.php",
            {
                'SID':$scope.SID
            })
            .success(function(data){
                $http.get('http://localhost/client/json_pages/test_json.php').then(function (response) {
                    $scope.model_object = response.data.records;
                    console.log($scope.model_object);

                    // Need to check when input is empty string

                    for (var i = 0; i < $scope.model_object.length; i++) {
                        console.log($scope.model_object[i]);
                        if($scope.model_object[i].SID == $scope.SID){
                            $scope.SID_and_GPA = [{'SID':$scope.model_object[i].SID, 'GPA':$scope.model_object[i].GPA}];
                            break;
                        }
                    }
                });
            });
        console.log($scope.model_object);
    }



});
angular.module('ionicApp').controller('studentAcademicController', function($scope, $http) {

    $scope.SID_and_GPA = [{ 'SID':'',
                            'GPA':'',
                            'cumulative_credit':'',
                            'algorithm':'',
                            'core_courses_credits':'',
                            'elective_courses_credits':'',
                            'grade_below_B':'',
                            'con_class':'',
                            'passing_status':'',
                            'reason':''}];

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

                            $scope.SID_and_GPA = [{'SID':$scope.model_object[i].SID,
                                                   'GPA':$scope.model_object[i].GPA,
                                                   'cumulative_credit':$scope.model_object[i].cumulative_credit,
                                                   'algorithm':$scope.model_object[i].algorithm,
                                                   'core_courses_credits':$scope.model_object[i].core_courses_credits,
                                                   'elective_courses_credits':$scope.model_object[i].elective_courses_credits,
                                                   'grade_below_B':$scope.model_object[i].grade_below_B,
                                                   'con_class':$scope.model_object[i].con_class,
                                                   'passing_status':$scope.model_object[i].passing_status,
                                                   'reason':$scope.model_object[i].reason}];
                            break;
                        }
                    }
                });
            });
        console.log($scope.model_object);
    }



});
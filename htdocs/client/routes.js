angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "ionic-nav-tabs/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "ionic-nav-tabs/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.insert-student', {
      url: "/insert-student",
      views: {
        'home-tab': {
          templateUrl: "ionic-nav-tabs/insert_student.html"
        }
      }
    })
    .state('tabs.update-student', {
      url: "/update-student",
      views: {
        'home-tab': {
          templateUrl: "ionic-nav-tabs/update_student.html"
        }
      }
    })
    .state('tabs.delete-student',{
      url:'/delete-student',
      views:{
        'home-tab':{
          templateUrl: 'ionic-nav-tabs/delete_student.html'
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function($scope, $http) {

  /*
  $http.get("http://localhost/test_json.php")
      .then(function (response) {$scope.model_object = response.data.records;});
      */
  console.log('HomeTabCtrl');

});

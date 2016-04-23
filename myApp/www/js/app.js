// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
          controller:'studentController'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.academic_status', {
    url: '/academic_status',
    views: {
      'menuContent': {
        templateUrl: 'students/academic_status.html',
        controller: 'academicCtrl'
      }
    }
  })
  .state('app.read_student', {
    url: '/read_student',
    views: {
      'menuContent': {
        templateUrl: 'CRUD/read_student.html',
        controller: 'readStudentController'
      }
    }
  })
  .state('app.create_student', {
    url: '/create_student',
    views: {
      'menuContent': {
        templateUrl: 'CRUD/create_student.html'
        //controller: 'addStudentCtrl'
      }
    }
  })
  .state('app.update_student', {
    url: '/update_student',
    views: {
      'menuContent': {
        templateUrl: 'CRUD/update_student.html',
        controller: 'updateStudentCtrl'
      }
    }
  })
  .state('app.delete_student', {
    url: '/delete_student',
    views: {
      'menuContent': {
        templateUrl: 'CRUD/delete_student.html',
        controller: 'deleteStudentCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/academic_status');
});

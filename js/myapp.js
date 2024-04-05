var app = angular.module('myApp',['ngRoute']).config( function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'conten.html',
        controller: subjectCtrl
      })
      .when('/quiz', {
        templateUrl: 'quiz.html',
        controller: subjectCtrl
      })
})



// Define the AngularJS application module and include ngRoute for routing
var app = angular.module('learningPlatformApp', ['ngRoute']);

// Configure routes
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/courses', {
            templateUrl: 'views/courses.html',
            controller: 'CoursesController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// Define the HomeController
app.controller('HomeController', function($scope) {
    $scope.message = 'Welcome to the Online Learning Platform!';
});

// Define the CoursesController
app.controller('CoursesController', function($scope) {
    $scope.message = 'Explore our wide range of courses!';
});

// Define the LoginController
app.controller('LoginController', function($scope) {
    $scope.message = 'Please login to access your courses.';
});

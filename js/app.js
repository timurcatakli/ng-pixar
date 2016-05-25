'use strict';

var pixarApp = angular.module('pixarApp', [
  'ngRoute',
  'movieListControllers',
  'movieListServices',
  'movieAnimations',
  ]);

pixarApp.config(['$routeProvider',function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/movielist.html',
      controller: 'MovieListCtrl'
    }).
    when('/movie/:imdbID/:movieId',{
      templateUrl: 'partials/movie.html',
      controller: 'MovieCtrl'      
    }).
    otherwise({
      redirectTo: '/'
    });
}])

var movieListServices = angular.module('movieListServices', ['ngResource']);


movieListServices.factory('Movie', ['$resource', 
  function($resource){
    return $resource('data/movies.json', {}, {
      query: {method: 'GET', isArray:true}
    });
  }]);

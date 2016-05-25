var movieListControllers = angular.module('movieListControllers', []);

/* Controllers */
movieListControllers.controller('MovieListCtrl', ['$scope', 'Movie',
  function($scope, Movie){
    $scope.movies = Movie.query();
    $scope.orderProp = 'Year';
  }
]);


movieListControllers.controller('MovieCtrl', ['$scope', 'Movie', '$routeParams',
  function($scope, Movie, $routeParams){

    
        $scope.movies = Movie.query();
        $scope.movies.$promise.then(function(result) {

          for(var i = 0; i < result.length; i++){
            if(result[i].imdbID == $scope.query){
              $scope.movie = result[i];
              $scope.mainImageUrl = $scope.movie.Images[0];
            }
          }

        });
        $scope.query = $routeParams.imdbID;
        $scope.setMovie = function(movies){
          
          for(var i = 0; i < movies.length; i++){
            
            if(movies[i].imdbID == $scope.query){
              return movies[i];
            }
          }

        };
        
        

        $scope.setImage = function(imageUrl){
          $scope.mainImageUrl = imageUrl;
        };
  }
]);
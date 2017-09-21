var app = angular.module('movieApp',[]);

app.controller('listmovies', function($scope,$http){
	$scope.movies = [];
	$scope.getMovies = function(){
		$http.get('/getmovies').then(function(res){
			console.log("res",res);
			$scope.movies = res.data;
			// console.log("$scope.movies",$scope.movies);
		});
	}
	$scope.getMovies();
});

app.controller('moviedetails', function($scope,$http){
	var url_string = window.location.href;
	var url = new URL(url_string);
	var movieId = url.searchParams.get("movie");
	console.log(movieId);

	$scope.movieDetails = [];
	$scope.getMovies = function(){
		$http.get('/getmoviedetils?movie='+movieId).then(function(res){
			console.log("res",res);
			if (res.data.length>0) {
				$scope.movieDetails = res.data[0];
			}
		});
	}
	$scope.getMovies();
});

app.controller('bookmovie', function($scope,$http) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var movieId = url.searchParams.get("movie");
    console.log(movieId);

    $scope.movieDetails= [];
    $scope.bookinginfo= {
        name:'',
        email:'',
        seats:'2',
        date:'05/08/2017',
    };
    $scope.getMovies= function(){
        $http.get('/getmoviedetail?movie='+movieId).then(function(res){
            if(res.data.length>0){
                $scope.movieDetails=res.data[0];
            console.log("res", $scope.movieDetails);
            }
        });
    }
    $scope.validatenbook= function(){
        console.log("bookinginfo",$scope.bookinginfo);
    }
    $scope.getMovies();
});

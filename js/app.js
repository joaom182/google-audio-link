var app = angular.module("app", []);

app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

app.controller("MainController", ["$scope", "$http", function($scope, $http){
  $scope.audioText = "";
  $scope.generatedLink = "https://goo.gl/";
  $scope.language = "pt";

  $scope.getLink = function(){
    $http.post('https://www.googleapis.com/urlshortener/v1/url', {
      longUrl: "https://translate.google.com/translate_tts?ie=UTF-8&q=" + $scope.audioText + "&tl=" + $scope.language + "&total=8&idx=3&textlen=58&client=t&prev=input"
    }).success(function(data, status, headers, config) {
      $scope.generatedLink = data.id;
    });
  }
}]);
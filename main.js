let app = angular.module("loginAnimate", ["ngAnimate", "ui.router"])

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/auth/login')
  $stateProvider
  .state('auth',{
    url: '/auth',
    templateUrl: "templates/auth.html",
    abstract: true,
    controller: "loginCtrl"
  })
  .state('auth.login',{
    url: '/login',
    views: {
      "quote@auth": {
        templateUrl: "templates/quote.html",
        controller: function($scope){
          $scope.quote = carQuotes[Math.floor(Math.random()*carQuotes.length)]
        }
      },
      "form@auth": {
        templateUrl: "templates/login.html"
      }
    }
  })
  .state('auth.register',{
    url: '/register',
    views: {
      "quote@auth": {
        templateUrl: "templates/quote.html",
        controller: function($scope){
          $scope.quote = carQuotes[Math.floor(Math.random()*carQuotes.length)]
        }
      },
      "form@auth": {
        templateUrl: "templates/register.html"
      }
    }
  })
})

app.controller("loginCtrl",function($scope, $state){
  $scope.quote = {};
})

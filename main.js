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
    templateUrl: "templates/login.html"
    // views: {
    //   "quote@auth": {
    //     templateUrl: "templates/quote.html"
    //   }
    // }
  })
  .state('auth.register',{
    url: '/register',
    templateUrl: "templates/register.html"
    // views: {
    //   "quote@auth":{
    //     templateUrl: "templates/quote.html"
    //   }
    // }
  })

})

app.controller("loginCtrl",function($scope){
  console.log('hi');
})

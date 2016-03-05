let app = angular.module("loginAnimate", ["ngAnimate", "ui.router"])

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/auth/login')
  $stateProvider
  .state('auth',{
    url: '/auth',
    templateUrl: "auth.html",
    abstract: true,
    controller: "loginCtrl"
  })
  .state('auth.login',{
    url: '/login',
    templateUrl: "./login.html"
    // views: {
    //   "quote@auth": {
    //     templateUrl: "./quote.html"
    //   }
    // }
  })
  .state('auth.register',{
    url: '/register',
    templateUrl: "./register.html"
    // views: {
    //   "quote@auth":{
    //     templateUrl: "./quote.html"
    //   }
    // }
  })

})

app.controller("loginCtrl",function($scope){
  console.log('hi');
})

'use strict';
/* global angular, WOW */

angular.module('app', [
    'ngRoute',
    'app.home'
])

.run(function(){
    // var wow = new WOW();
    // console.log(wow);
})

.config(function ($routeProvider, $httpProvider) {
    $routeProvider
    .when('/site', {
      controller: "home.ctrl",
      templateUrl: "views/home.html"
    })
    .otherwise('/site');
})
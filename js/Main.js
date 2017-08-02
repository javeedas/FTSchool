var ftmsapp = angular.module('ftms', ['ftms.controllers','ftms.Services','ngRoute']);

ftmsapp.config(function ($routeProvider,$locationProvider) {
    //use the HTML5 History API to remove '# tag in URL
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'UI/login.html',
        controller: 'loginCtrl'
    })
    .when('/Home', {
        templateUrl: 'UI/Home.html',
        controller: 'HomeCtrl',
        isLogin:true
    })
    .when('/Home/About', {
        templateUrl: 'UI/about.html',
        controller: 'HomeCtrl'

    })
    .when('/Home/Contact', {
        templateUrl: 'UI/contact.html',
        controller: 'HomeCtrl'

    })
    .when('/Team/TeamDetails', {
        templateUrl: 'UI/Team.html',
        controller: 'TeamCtrl',
        isLogin:true

    })
    .when('/event', {
        templateUrl: 'UI/Event.html',
        controller: 'EventCtrl',
        isLogin:true

    })
    .when('/Home/Account/addUser', {
        templateUrl: 'UI/adduser.html',
        controller: 'loginCtrl',
        isLogin:true
    })
    .when('/Funds', {
        templateUrl: 'UI/funds.html',
        controller: 'FundCtrl',
        isLogin:true
    })
    .otherwise({
        redirectTo: '/Home'
    });

});

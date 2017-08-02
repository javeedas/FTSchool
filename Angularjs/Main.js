var ftmsapp = angular.module('ftms', ['ftms.controllers', 'ftms.Services', 'ngRoute']);

ftmsapp.config(function ($routeProvider,$locationProvider) {
    //use the HTML5 History API to remove '# tag in URL
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        resolve: {
            "check": function ($rootScope) {
                $rootScope.isLoggedin = false
                //$cookie.isLoggedin = false
            }
        },
        templateUrl: 'UI/login.html',
        controller: 'loginCtrl'
    })
    .when('/Home', {
        resolve: {
            "check": function ($location,$rootScope) {
                if (!$rootScope.isLoggedin) {
                    $location.path('/');
                }
            }
         },
        templateUrl: 'UI/Home.html',
        controller: 'HomeCtrl',
        
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
        resolve: {
            "check": function ($location, $rootScope) {
                if (!$rootScope.isLoggedin) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'UI/Team.html',
        controller: 'TeamCtrl',

    })
    .when('/event', {
        resolve: {
            "check": function ($location, $rootScope) {
                if (!$rootScope.isLoggedin) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'UI/Event.html',
        controller: 'EventCtrl',
       

    })
    .when('/Home/Account/addUser', {
        resolve: {
            "check": function ($location, $rootScope) {
                if (!$rootScope.isLoggedin) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'UI/adduser.html',
        controller: 'loginCtrl',
        
    })
    .when('/Funds', {
        resolve: {
            "check": function ($location, $rootScope) {
                if (!$rootScope.isLoggedin) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'UI/funds.html',
        controller: 'FundCtrl',
        
    })
    .otherwise({
        redirectTo: '/Home'
    });

});

//ftmsapp.run(['$rootscope', '$location', 'authentication', function ($roorscope, $location, authentication) {

//    $roorscope.$on('$routechangestart', function (event) {
//        if (!authentication.isloggedin()) {
//            console.log('denied');
//            event.preventdefault();
//            $location.path('/');
//        }
//        else {
//            console.log('allowed');
            
//        }
//    });
//}]);
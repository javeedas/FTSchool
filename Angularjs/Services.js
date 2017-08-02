var app = angular.module('ftms.Services', []);

app.factory('Ajaxservice', function ($http) {
    var baseUrl = 'http://localhost:51362/';
    var service = {};
    service.getService = function (url, params) {
        return $http({
            method: 'GET',
            url: baseUrl+url,
            datatype: 'json',
            data: JSON.stringify(params)
        })
    },
    service.postService = function (url, params) {
        return $http({
            method: 'POST',
            url: baseUrl+url,
            data: 'json',
            datatype: JSON.stringify(params)
        })

    }

    return service;
});

app.factory('Authentication', function () {
    var user = {};
    user.setUser = function (aUser) {
        return user = aUser;

    },
    user.isLoggedIn = function () {
        return (user)?user:false;
    }
    return user;
});
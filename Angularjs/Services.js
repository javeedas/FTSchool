var app = angular.module('ftms.Services', []);

app.factory('Ajaxservice', function ($http) {
    var baseUrl = 'http://localhost:52743/api/';
    var service = {};
    service.getService = function (url, params) {
        return $http({
            method: 'GET',
            url: baseUrl + url,
            datatype: 'json',
            data: JSON.stringify(params)
        })
    },
    service.getService = function (url) {
        return $http({
            method: 'GET',
            url: baseUrl + url,
            datatype:'json'
             
        })
    }
    service.postService = function (url, params) {
        return $http({
            method: 'POST',
            url: baseUrl + url,
            data: JSON.stringify(params),
            datatype: 'json'
        })

    }
    service.deleteService = function (url) {
        return $http({
            method: 'delete',
            url:baseUrl+url
        })
    }
    return service;
});


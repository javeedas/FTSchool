var app = angular.module('ftms.Services', []);

app.factory('Ajaxservice', function ($http) {
    var baseUrl = 'http://192.168.0.9/api/Ftms/';
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
    service.putService = function (url) {
        return $http({
            method: 'PUT',
            url:baseUrl+url
})
}
    return service;
});


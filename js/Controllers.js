var app = angular.module('ftms.controllers', ['ftms.Services']);
app.controller('loginCtrl', ['$scope', '$location', 'Ajaxservice', function ($scope, $location, Ajaxservice) {

    
    $scope.validateUser = function () {
        //var url = 'http://localhost:51362/Account/SignIn';
        //var params = {"username":$scope.uName,"password":$scope.uPassword};
        //     Ajaxservice.postService(url, params).then(function (response) {
        //         console.log(response);
        //         if (response.statuscode == 100) {
        //             $location.path('UI/Home.html');
        //         }
        //     },
        //function (response) {
        //    $scope.msg = "Error occured while adding user";
        //    console.log(response);
        $scope.haserror = false;
        $scope.username=$scope.uName;
        $scope.password=$scope.uPassword;

        if ($scope.username == 'sa' && $scope.password == 'sa') {
            $location.path('/Home');
            
        }
        else
            
        $scope.haserror = true;
        $scope.errorMessage = "invalid username or password";
        $scope.uName = '';
        $scope.uPassword = '';
        $scope.loginForm.$setPristine();
        };
        

   


}]);
app.controller('HomeCtrl', function ($scope) {
    $scope.msg = "you are in home page";
});
app.controller('EventCtrl', function ($scope) {
    $scope.msg = "You are in event msg";
});
app.controller('TeamCtrl', function ($scope) {



})

////Services
//app.factory('Ajaxservice', function ($http) {
//    var service = {};
//    service.getService = function (url, params) {
//       return  $http({
//            method: 'GET',
//            url: url,
//            datatype: 'json',
//            data: JSON.stringify(params)
//        })
//    },
//    service.postService = function (url, params) {
//       return $http({
//            method: 'POST',
//            url: url,
//            data: 'json',
//            datatype: JSON.stringify(params)
//        })

//    }

//    return service;
//});

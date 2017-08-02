var app = angular.module('ftms.controllers', ['ftms.Services', 'ngMaterial']);
app.controller('loginCtrl', ['$rootScope','$scope' ,'$location', 'Ajaxservice','Authentication', function ($rootScope,$scope,$location, Ajaxservice,Authentication) {

    $rootScope.title = "Login";
   
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
        $scope.user = {};
        $scope.user.username=$scope.uName;
        $scope.user.password=$scope.uPassword;
       
        if ($scope.user.username == 'sa' && $scope.user.password == 'sa') {
            //Authentication.setUser($scope.user);
            $rootScope.displayuser = $scope.user.username;
           
            //$cookie.displayuser = $scope.user.username;
            $location.path('/Home');
            //$cookie.isLoggedin = true;
            $rootScope.isLoggedin = true;
        }
        else {
            $scope.haserror = true;
            $scope.errorMessage = "invalid username or password";
            $scope.uName = '';
            $scope.uPassword = '';
            $scope.loginForm.$setPristine();
           
        }
        };
   
    
        $scope.tools = ['CTP', 'SMM', 'ADAM', 'TFS', 'NFS'];
        $scope.selectedTool = 'select Tool';
    
    $scope.dropdownSelected = function (tool) {
        $scope.selectedTool = tool;
    }
   


}]);
app.controller('HomeCtrl', ['$rootScope','$scope', '$location', 'Authentication', function ($rootScope,$scope, $loaction, Authentication) {
    //$scope.$watch(Authentication.isLoggedIn, function (oldvalue, newvalue) {
    //    if (!oldvalue && newvalue) {
    //        console.log('disconnect');
    //        $loaction.path('/');
    //    }
    //    if (oldvalue) {
    //        console.log('connect');
    //    }
    //})
    
    $scope.msg = "you are in home page";
    $rootScope.title = "Home";
}]);
app.controller('EventCtrl', function ($rootScope,$scope) {
    $scope.msg = "You are in event msg";
    $rootScope.title = "Events";
});
app.controller('TeamCtrl', function ($rootScope,$scope) {
    $rootScope.title = "Team";


})

app.controller('datepickerCtrl', function ($scope) {


  
   this.dob = new Date();
   this.minDate = new Date(this.dob.getFullYear()-50,this.dob.getMonth(),this.dob.getDate());
    this.maxDate = Date.now();
    
  


});


//


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
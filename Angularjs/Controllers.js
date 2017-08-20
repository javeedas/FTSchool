var app = angular.module('ftms.controllers', ['ftms.Services', 'ngMaterial']);
app.controller('loginCtrl', ['$rootScope', '$scope', '$location', 'Ajaxservice', function ($rootScope, $scope, $location, Ajaxservice) {

    $rootScope.title = "Login";

    $scope.validateUser = function () {
        $scope.haserror = false;
        $scope.user = {};
        $scope.user.username = $scope.uName;
        $scope.user.password = $scope.uPassword;

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
    //$scope.tools = ['CTP', 'SMM', 'ADAM', 'TFS', 'NFS'];
    $scope.selectedTool = 'select Tool';

    $scope.dropdownSelected = function (tool) {
        $scope.selectedTool = tool;
    }

    //Handling Checkboxes

    //Tools
    $scope.tools = ['CTP', 'SMM', 'ADAM', 'TFS', 'NFS'];
    //Selecte Tools
    $scope.selectedtools = ['CTP'];
    //Toggle selection for tool given by name
    $scope.toggleSelection=function toggleSelection(tool){
        var idx = $scope.selectedtools.indexOf(tool);

        if (idx > -1)
            $scope.selectedtools.splice(idx, 1);
        else
            $scope.selectedtools.push(tool);
    }


    //Adding User....
    $scope.addUser = function () {
        $scope.user = {};
        $scope.user.name = $scope.Name;
        $scope.user.username = $scope.userName;
        $scope.user.password = $scope.passWord;
        if ($scope.admin != '')
            $scope.user.role = $scope.Admin;
        else
            $scope.user.role = $scope.User;
        $scope.user.dob = $scope.dob;
        $scope.user.tool = $scope.selectedtools;
        var url = 'Ftms/AddUser';
        //$http({
        //    method: 'POST',
        //    url: 'http://localhost:52743/api/Ftms/AddUser',
        //    data: JSON.stringify($scope.user),
        //    datatype: 'json'
        //})

            Ajaxservice.postService(url,$scope.user).then(function (response) {

            // log data to the console so we can see
            console.log(response);

            $scope.successmsg = "User Added Successfully";
            $scope.Name = null;
            $scope.userName = null;
            $scope.passWord = null;
            $scope.dob = null;
            $scope.selectedtools = [];
            //$scope.selectedTool = "Select Tool";
            $scope.addUserForm.$setPristine()
            // stop the form from submitting and refreshing
            event.preventDefault();

        }, function (response) {
            $scope.errormsg = "Error occured while adding user";
            
        });




    }

    //Resetting Fields.....
    $scope.reset = function () {
        $scope.Name = null;
        $scope.userName = null;
        $scope.passWord = null;
        $scope.dob = null;
        $scope.selectedtools = [];
        $scope.addUserForm.$setPristine()
    }


}]);
app.controller('HomeCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $loaction) {
 
    $scope.msg = "you are in home page";
    $rootScope.title = "Home";
}]);
app.controller('EventCtrl', function ($rootScope, $scope) {
    $scope.msg = "You are in event msg";
    $rootScope.title = "Events";
});
app.controller('TeamCtrl',['$rootScope', '$scope', 'Ajaxservice', function ($rootScope, $scope, Ajaxservice) {
    $rootScope.title = "Team";
    $scope.GetTeam = function () {
        var url = 'TeamDetails';
        Ajaxservice.getService(url).then(function (response) {
            $scope.members = response.data;
            console.log(response.data);
        });
        
    }

    // Adding Member
    $scope.AddMember = function () {
        $scope.member = {};
        $scope.member.empId = $scope.empId;
        $scope.member.empName = $scope.empName;
        $scope.member.category = $scope.empDept;
        $scope.member.tool = $scope.empTool;
        $scope.member.designation = $scope.empDesig;
        $scope.member.dob = $scope.empDob;
        var url = 'AddMember';
        var params = $scope.member;
        Ajaxservice.postService(url, params).then(function (response) {
            console.log(response);
            $scope.empCreated = true;
            $scope.empId = null;
            $scope.empName = null;
            $scope.empDept = null;
            $scope.empDesig = null;
            $scope.empDob = null;
            $scope.empTool = null;
            $scope.addEmployeeForm.$setPristine();
            $scope.GetTeam();
        })
        , function () {

            $scope.eventNotCreated = true;
        }

    };
    //Deleting member
    $scope.DeleteMember = function (empid) {
        var url = 'Ftms/DeleteMember/empId/' + empid;  
        Ajaxservice.deleteService(url).then(function (response) {
            console.log(response);
            $scope.GetTeam();
            alert("member delted successfully");
        })
    }


}]);




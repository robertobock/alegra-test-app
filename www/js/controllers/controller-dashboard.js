angular.module('starter.controller-dashboard', [])

.controller('DashCtrl', function($scope, EnvVars, contacts, popups) {
    $scope.loaded = false;
    contacts.getContacts().then(manageResult, manageError);
    function manageResult(result){
        $scope.loaded = true;
        $scope.contacts = result;
        console.log("result is: "+result);
    }
    function manageError(error){
        $scope.loaded = true;
        $scope.contacts = null;
        var data = {
            title:"Error de usuario",
            message:error
        };
        popups.showAlertPopup(data);
        console.log("error is: "+error);
    }
});

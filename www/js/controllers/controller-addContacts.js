angular.module('starter.controller-addContact', [])

.controller('AddContactCtrl', function($scope, constants, objects,
    contacts, $stateParams, $ionicHistory,
    $filter) {
    $scope.isView = $stateParams && $stateParams.isView ? true : false;
    $scope.type = objects.getTypeObj();
    if($scope.isView){
        $scope.title = $filter('translate')(constants.texts.viewTitle);
        $scope.newContact = $stateParams.contact;
        if($stateParams.contact.type.indexOf(constants.types.provider)!=-1){
            $scope.type.provider=true;
        }
        else{
            $scope.type.provider=false;
        }
        if($stateParams.contact.type.indexOf(constants.types.client)!=-1){
            $scope.type.client=true;
        }
        else{
            $scope.type.client=false;
        }
    }
    else{
        $scope.title = $filter('translate')(constants.texts.creationTitle);
        $scope.newContact = objects.getCreateContactObj();
    }
    $scope.createContact = function(){
        if($scope.type.client){
            $scope.newContact.type.push(constants.types.client)
        }
        if($scope.type.provider){
            $scope.newContact.type.push(constants.types.provider)
        }
        contacts.createContact($scope.newContact).then(manageResult, manageError);
    }
    function manageResult(result){
        $ionicHistory.goBack()
        console.log(result);
    }

    function manageError(error){
        console.log(error);
    }
});

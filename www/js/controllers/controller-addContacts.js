angular.module('starter.controller-addContact', [])

.controller('AddContactCtrl', function($scope, constants, objects,
    contacts, $stateParams, $ionicHistory,
    $filter) {
    // ask if this view is called in "view" mode or in "creation" mode
    $scope.isView = $stateParams && $stateParams.isView ? true : false;
    $scope.type = objects.getTypeObj();

    if($scope.isView){
        $scope.title = $filter('translate')(constants.texts.viewTitle);
        $scope.newContact = $stateParams.contact;
        // checks if the contact is a provider, a client, both or neither
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
        // this line set the default model for this view
        $scope.newContact = objects.getCreateContactObj();
    }

    // this method creates a new contact
    $scope.createContact = function(){
        // check for the values of type
        if($scope.type.client){
            $scope.newContact.type.push(constants.types.client)
        }
        if($scope.type.provider){
            $scope.newContact.type.push(constants.types.provider)
        }
        // call service
        contacts.createContact($scope.newContact).then(manageResult, manageError);
    }

    // this function manages the success result of the creation call
    function manageResult(result){
        $ionicHistory.goBack()
        console.log(result);
    }
    // this function manages the fail result of the creation call
    function manageError(error){
        console.log(error);
    }
});

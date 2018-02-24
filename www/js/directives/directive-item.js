angular.module('starter.directive-item', [])

.directive('alContactItem', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/contact.html',
        scope: {
            contact: '=',
            index: '='
        },
        controller:contactManagement
    };
    function contactManagement($scope, contacts, popups, $state, $ionicLoading){
        // this method deletes the actual contact
        $scope.deleteContact = function($event, id){
            $event.stopPropagation();
            $ionicLoading.show();
            contacts.deleteContact(id).then(manageResult,manageError);
        }

        // this method manages the result of calling the deletion method when it success
        function manageResult(data){
            $scope.$emit("contactlist.updateList", {index:$scope.index});
            $ionicLoading.hide();
        }

        // this method manages the result of calling the deletion method when it fail
        function manageError(error){
            $ionicLoading.hide();
            var data = {
                title:"Error",
                message:error.data.message
            };
            popups.showAlertPopup(data);
        }

        //this method redirects to the create contact view in "view" mode (readonly elements)
        $scope.viewContact = function(){
            $state.go("app.addContact",{contact:$scope.contact,isView:true})
        }
    }
});

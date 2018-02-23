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
    function contactManagement($scope, contacts, popups, $state){

        $scope.deleteContact = function($event, id){
            $event.stopPropagation();
            contacts.deleteContact(id).then(manageResult,manageError);
        }
        function manageResult(data){
            $scope.$emit("contactlist.updateList", {index:$scope.index})
        }
        function manageError(error){
            var data = {
                title:"Error",
                message:error.data.message
            };
            popups.showAlertPopup(data);
        }

        $scope.viewContact = function(){
            $state.go("app.addContact",{contact:$scope.contact,isView:true})
        }
    }
});

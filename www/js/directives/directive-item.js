angular.module('starter.directive-item', [])

.directive('alContactItem', function($q, $timeout, $http, EnvVars, headers) {
    return {
        restrict: 'E',
        templateUrl: 'templates/contact.html',
        scope: {
            contact: '='
        },
        controller:contactManagement
    };
    function contactManagement($scope){
        console.log("contact is: "+$scope.contact);
    }
});

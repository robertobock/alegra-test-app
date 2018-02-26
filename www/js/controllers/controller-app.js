angular.module('starter.controller-app', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    $scope.allSelected = true;
    $scope.clients= false;
    $scope.providers = false;
    // this method sets the seleted image on menu bar
    $scope.selecThis = function(position){
        if(position == 1){
            $scope.allSelected = true;
            $scope.clients= false;
            $scope.providers = false;
        }
        else if(position == 2){
            $scope.allSelected = false;
            $scope.clients= true;
            $scope.providers = false;
        }else{
            $scope.allSelected = false;
            $scope.clients= false;
            $scope.providers = true;
        }
    }
});

angular.module('starter.controller-dashboard', [])

.controller('DashCtrl', function($scope, EnvVars, contacts, popups, $ionicLoading, $state) {
    $scope.loaded = false;
    var moreItems = true;
    //$ionicLoading.show();

    $scope.loadMore = function() {
        $scope.moreItems = true;
        contacts.getContacts().then(manageResult, manageError);
    };

    $scope.doRefresh= function() {
        contacts.getContacts().then(manageResult, manageError);
    };

    $scope.moreDataCanBeLoaded = function(){
        return moreItems;
    }
    var resultAux;
    function manageResult(result){
        $scope.contacts = result;
        moreItems = false;
        $scope.$broadcast('scroll.infiniteScrollComplete');
        $scope.$broadcast('scroll.refreshComplete');
    }

    function manageError(error){
        $scope.loaded = true;
        $scope.contacts = null;
        var data = {
            title:"Error de usuario",
            message:error
        };
        $scope.$broadcast('scroll.infiniteScrollComplete');
        $scope.$broadcast('scroll.refreshComplete');
        moreItems = false;
        popups.showAlertPopup(data);
        console.log("error is: "+error);
    }

    $scope.createContact = function(){
        $state.go("app.addContact");
    }
});

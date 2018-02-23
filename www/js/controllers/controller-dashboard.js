angular.module('starter.controller-dashboard', [])

.controller('DashCtrl', function($scope, EnvVars, contacts,
    popups, $ionicLoading, $state) {
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

    $scope.$on('$ionicView.enter', function() {
        if($scope.loaded){
            $scope.loadMore();
        }
    });

    $scope.moreDataCanBeLoaded = function(){
        return moreItems;
    }
    var resultAux;
    function manageResult(result){
        $scope.contacts = result;
        moreItems = false;
        $scope.loaded = true;
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

    $scope.$on("contactlist.updateList",function(event, data){
        $scope.contacts.splice(data.index, 1);
    });
});

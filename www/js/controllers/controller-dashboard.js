angular.module('starter.controller-dashboard', [])

.controller('DashCtrl', function($scope, EnvVars, contacts,
    popups, $ionicLoading, $state,
        $timeout, constants, $stateParams,
            $filter) {
    // if it is the first time this view is loaded
    $scope.firstLoad = true;
    // variable to know if there are more items to be loaded
    var moreItems = true;
    $scope.searchbar={
        term:""
    };
    var type = $stateParams.type;
    $scope.title = $filter('translate')($stateParams.title);
    //variable to count the actual position of items to be downloaded from the server
    var countIndex = 0;
    // max quantity of contacts to load
    var limit = constants.maxItems;
    //variable to know if right now the app is pulling to refresh, this avoid the loading icon from inifinite scroll
    $scope.isRefreshing = false;
    //this method is used to load more items when infinite scroll excecutes
    $scope.loadMore = function() {
        if($scope.contacts){
            countIndex += $scope.contacts.length;
        }
        contacts.getContacts($scope.searchbar.term, countIndex, limit, type).then(infiniteScrollSuccess, infiniteScrollFail);
    };

    // clear the index of items call
    function clearIndex(){
        moreItems = true;
        countIndex = 0;
    }

    //this method is used to load more items when pull to refresh excecutes
    $scope.doRefresh= function() {
        $scope.isRefreshing = true;
        clearIndex();
        contacts.getContacts($scope.searchbar.term, countIndex, limit, type).then(pullSuccess, pullFail);
    };

    // this method is launched each time the user enters the all items view
    $scope.$on('$ionicView.beforeEnter', function() {
        $scope.doRefresh();
        $scope.showAdd = true;
    });

    // this method determines if there is more data to be loaded
    $scope.moreDataCanBeLoaded = function(){
        return moreItems;
    }

    // This function manages the succes call of pull to refresh
    function pullSuccess(result){
        $scope.contacts = result;
        if(result.length < limit){
            moreItems = false;
        }
        $scope.isRefreshing = false;
        manageStatus();
    }
    // This function manages the fail call of pull to refresh
    function pullFail(error){
        var data = {
            title:$filter('translate')("userError"),
            message:error
        };
        popups.showAlertPopup(data);
        manageStatus();
    }
    // This function manages the succes call of infinite scroll
    function infiniteScrollSuccess(result){
        if(result.length<limit){
            moreItems = false;
        }
        if($scope.contacts){
            $scope.contacts = $scope.contacts.concat(result);
        }
        else {
            $scope.contacts = result;
        }
        manageStatus();
    }

    // This function manages the fail call of infinite scroll
    function infiniteScrollFail(error){
        var data = {
            title:$filter('translate')("userError"),
            message:error
        };
        popups.showAlertPopup(data);
        manageStatus();
    }

    // this function manages the different statuses of the pull to refresh and infinite scroll
    function manageStatus(){
        $scope.firstLoad = false;
        $scope.searching = false;
        $scope.$broadcast('scroll.infiniteScrollComplete');
        $scope.$broadcast('scroll.refreshComplete');
    }

    // this method manages the success result of consulting the list of contacts
    function manageResult(result){
        $scope.contacts = result;
        manageStatus();
    }
    // this method manages the failed result of consulting the list of contacts
    function manageError(error){
        $scope.contacts = null;
        var data = {
            title:$filter('translate')("userError"),
            message:error
        };
        popups.showAlertPopup(data);
        manageStatus();
    }

    // this method redirects the flow of the to the view "add contacts"
    $scope.createContact = function(){
        $state.go("app.addContact");
    }

    // this event is called when a contact is deleted from this view, the emiter is in "directive-item.js"
    $scope.$on("contactlist.updateList",function(event, data){
        $scope.contacts.splice(data.index, 1);
    });

    // this event is called when the user scrolls down
    $scope.$on("contactlist.showSubHeader",function(event, data){
        $scope.slideHeader = true;
    });

    // this event is called when the user scrolls up
    $scope.$on("contactlist.hideSubHeader",function(event, data){
        $scope.slideHeader = false;
    });

    // this event is called when the user scrolls down
    $scope.$on("contactlist.showAddButton",function(event, data){
        $scope.showAdd = true;
    });

    // this event is called when the user scrolls up
    $scope.$on("contactlist.hideAddButton",function(event, data){
        $scope.showAdd = false;
    });

    // to check if there are new characters on search bar
    var timeout;
    $scope.searchTerm = function(){
        if(!timeout){
            timeout = $timeout(function () {
                timeout = null;
                $scope.doRefresh();
            }, 500);
        }

    }
});

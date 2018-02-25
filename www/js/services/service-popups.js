angular.module('starter.service-popups', [])
.factory('popups', function($ionicPopup, $q) {
    return {
        showAlertPopup : function(data){
            var alertPopup = $ionicPopup.alert({
                title: data.title,
                template: data.message
            });

            alertPopup.then(function(res) {
                console.log('Sure!');
            });

        },
        showMessage:function(){

        },
        showConfirm:function(data){
            var promise = $q.defer();
            var confirmPopup = $ionicPopup.confirm({
                title: data.title,
                template: data.message
            });
            confirmPopup.then(function(res) {
                if(res) {
                    promise.resolve();
                } else {
                    promise.reject();
                }
            });
            return promise.promise;
        }
    };
});

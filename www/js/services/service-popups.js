angular.module('starter.service-popups', [])
.factory('popups', function($ionicPopup) {
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

        }
    };
});

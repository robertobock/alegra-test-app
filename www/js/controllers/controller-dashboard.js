angular.module('starter.controller-dashboard', [])

.controller('DashCtrl', function($scope, EnvVars, $translate) {
     $translate;
    console.log(EnvVars);
    console.log("encoded: ",btoa(EnvVars.userMail+":"+EnvVars.token));
});

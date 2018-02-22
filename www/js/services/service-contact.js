angular.module('starter.service-contacts', [])

.factory('contacts', function($q, $timeout, $http, EnvVars, headers) {
    return {
        getContacts : function(){
            var caller = $q.defer();
            var req = {
             method: 'GET',
             url: EnvVars.contactUrl,
             headers: {
               'Content-Type': headers.contentType,
               'Authorization': headers.basic+btoa(EnvVars.userMail+":"+EnvVars.token)
             }
            }
            $http(req).then(manageResult, manageError);
            function manageResult(result){
                caller.resolve(result.data);
                console.log("call success")
            }
            function manageError(error){
                caller.reject(error);
                console.log("call fail")
            }
            return caller.promise;
        }
    };
});

angular.module('starter.service-contacts', [])

.factory('contacts', function($q, $timeout, $http, EnvVars, constants) {
    return {
        getContacts : function(){
            var caller = $q.defer();
            var req = {
             method: 'GET',
             url: EnvVars.contactUrl,
             headers: {
               'Content-Type': constants.headers.contentType,
               'Authorization': constants.headers.basic+btoa(EnvVars.userMail+":"+EnvVars.token)
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
        },
        createContact : function(body){
            var caller = $q.defer();
            var req = {
                method: 'POST',
                url: EnvVars.contactUrl,
                headers: {
                   'Content-Type': constants.headers.contentType,
                   'Authorization': constants.headers.basic+btoa(EnvVars.userMail+":"+EnvVars.token)
                },
                data:body
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
        },
        deleteContact: function(id){
            var caller = $q.defer();
            var req = {
                method: 'DELETE',
                url: EnvVars.contactUrl+id,
                headers: {
                   'Content-Type': constants.headers.contentType,
                   'Authorization': constants.headers.basic+btoa(EnvVars.userMail+":"+EnvVars.token)
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

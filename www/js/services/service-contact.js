angular.module('starter.service-contacts', [])

.factory('contacts', function($q, $timeout, $http, EnvVars, constants) {
    return {
        //this method returns all the contacts in the main view
        getContacts : function(query = "", start = 0, limit = constants.maxItems){
            var caller = $q.defer();
            var req = {
                method: 'GET',
                url: EnvVars.contactUrl,
                headers: {
                'Content-Type': constants.headers.contentType,
                'Authorization': constants.headers.basic+btoa(EnvVars.userMail+":"+EnvVars.token)
                },
                params: {
                    query: query,
                    start: start,
                    limit: limit
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
        // this method creates a contact
        // params: body
        // body contains the structure defined in https://developer.alegra.com/docs/crear-contacto
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
        // this methods deletes the contact given an id
        // params: id
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

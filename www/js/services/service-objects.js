.factory('objects', function($q, $timeout, $http, EnvVars, headers) {
    return {
        getCreateContactObj : function(){
            var createContact = {
                "id": "",
                "name": "",
                "identification": "",
                "email": "",
                "phonePrimary": "",
                "phoneSecondary": "",
                "fax": "",
                "mobile": "",
                "observations": "",
                "type" : [],
                "address" : {
                        "address" : "",
                        "city" : ""
                }
            }
            return caller.promise;
        }
    };
});

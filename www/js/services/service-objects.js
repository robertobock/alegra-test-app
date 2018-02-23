angular.module('starter.service-objects', [])
.factory('objects', function() {
    return {
        // Default prototype for an creation object
        getCreateContactObj : function(){
            var createContact = {
                id: "",
                name: "",
                identification: "",
                email: "",
                phonePrimary: "",
                phoneSecondary: "",
                fax: "",
                mobile: "",
                observations: "",
                type: [],
                address : {
                        address : "",
                        city : ""
                }
            }
            return createContact;
        },
        //default prototype for the type of contact
        getTypeObj:function(){
            var type = {
                client:"",
                provider:""
            }
            return type;
        }
    };
});

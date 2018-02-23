angular.module('starter.service-objects', [])
.factory('objects', function() {
    return {
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
        getTypeObj:function(){
            var type = {
                client:"",
                provider:""
            }
            return type;
        }
    };
});

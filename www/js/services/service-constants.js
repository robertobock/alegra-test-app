angular.module('starter.service-constants', [])
//some constants that will be used on the app
.constant("constants",
    {
        headers: {
            contentType:"application/json",
            basic:"Basic "
        },
        types:{
            provider:"provider",
            client:"client"
        },
        texts:{
            viewTitle:"contact",
            creationTitle:"createContact"
        },
        maxItems:6,
        views:{
            client:"client",
            provider:"provider"
        }
    }
);

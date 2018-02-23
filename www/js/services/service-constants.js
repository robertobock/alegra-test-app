angular.module('starter.service-constants', [])

.constant(
    "constants",
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
        }
    }

);

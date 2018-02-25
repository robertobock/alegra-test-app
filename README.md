# alegra-test-app
This Projects contains an ionic application that connects to alegra api and shows data

## Needed .env file
To run correctly the app and connect to the server you need to create and setup a .env file with the format above

    USER_TOKEN=ExamPleTokeN
    USER_MAIL=example@example.com
    CONTACTS_URL=url.to.contacts.api

Finally to be able to configure all the variables run in the console

    gulp ng-config

## Steps to correctly run the app
    First open the console and run

        npm install

    them run

        bower install

    Finally

        ionic serve

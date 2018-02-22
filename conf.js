// Shared env vars in all environments
var shared = {
    token: process.env.USER_TOKEN,
    userMail: process.env.USER_MAIL
};

var environments = {
    development: {
        EnvVars: shared
    },
    staging: {
        EnvVars: shared
    },
    production: {
        EnvVars: shared
    }
};
environments.production.buildpack  = process.env.BUILDPACK_URL;

module.exports = environments;

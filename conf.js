// Shared env vars in all environments
var shared = {
    apiKey: process.env.API_KEY
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

// cypress.config.js
const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({

  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 30000,
  chromeWebSecurity: false,
  userAgent: 'testing_agent',
  retries: 0,

  e2e: {
    baseUrl: '',
    specPattern: 'cypress/e2e/**/*.js',
    supportFile: 'cypress/support/e2e.js',

    async setupNodeEvents(on, config) {
      const result = await cloudPlugin(on, config);
      return result;
    },
  },

  env: {
    AUTH_USER: 'staging',
    AUTH_PASS: 'staging_pwd',

    placeOrder: false,
    ignore_JS_Errors: false,
    applyRules: false,

    backend_url: '/index.php/uber110blick',
    backend_user: 'admin',
    backend_passw: 'admin123',

    //****************************************** STAGE *****************************************************/

    // ***** STAGE ***** --> activate these when testing against stage
    // js_files_hostname: 'stage.plissee-experte.de',
    // js_files_url: '/js_minify/*.min.js',
    // js_files_url: '/js/dist/configurator_14.es.js',
    // pp_hostname: 'c.sandbox.paypal.com',  

    //********************************************** PRODUCTION *************************************************/

    // ***** PRODUCTION ***** --> activate these when testing against production
    js_files_hostname: '',
    js_files_url: '/js_minify/*.min.js',
    pp_hostname: 'c.paypal.com',


    //***********************************************************************************************/

    // equal for both STAGE and PRODUCTION 
    // --> do not change anything here
    p2_url: 'v1/r/d/b/p2',
  }
});
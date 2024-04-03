const { defineConfig } = require('cypress')

module.exports = defineConfig({

  "chromeWebSecurity": false,
  "experimentalSessionAndrigin": true,
   projectId: '9k5viv',
   chromeWebSecurity: false,
   experimentalModifyObstructiveThirdPartyCode: true,
   failOnStatusCode: false,
   redirectionLimit: 100,
   
 e2e: {
   supportFile: false,
   baseUrl: 'https://www.chick-fil-a.pr',  
   //baseUrl: 'https://www.chick-fil-astage.ca/', 
   comUrl: 'https://www.chick-fil-a.com/',
   orderPageUrl: 'https://order.chick-fil-a.ca/',
   watchForFileChanges: false,
   defaultCommandTimeout: 30000,    
   setupNodeEvents(on, config) {      
   },
 },
});

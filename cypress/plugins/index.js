// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/*module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}*/

/*const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const fs = require('fs')
const pdf = require('pdf-parse');

//use plugin "downloadFile" and "readPDF"
module.exports = (on, config) => {
  on('task', { downloadFile }),
  on('task', {
      readPDF(filename) {
        if (fs.existsSync(filename)) {
          let dataBuffer = fs.readFileSync(filename);
          return pdf(dataBuffer).then(function (data) {
            return data.text
          });
        }
        return null
      }
    })
}*/


const fs = require('fs')

// use plugin "readFileMaybe"
module.exports = (on, config) => {
  on('task', {
    readFileMaybe (filename) {
      if (fs.existsSync(filename)) {
        return fs.readFileSync(filename, 'utf8')
      }

      return null
    }
  })
}

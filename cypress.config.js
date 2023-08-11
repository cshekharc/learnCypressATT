const fs = require('fs');
const excelToJson = require('convert-excel-to-json');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio : true,
    setupNodeEvents(on, config) {
      on("task",{
        exeltoJson(filepath){
          const readFile = excelToJson({
              source : fs.readFileSync(filepath)
          })
          return readFile;
        }
      })
      // implement node event listeners here
    },
  },
});

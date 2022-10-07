const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

  module.exports = defineConfig({
    e2e: {
      async setupNodeEvents(on, config) {
        const bundler = createBundler({
          plugins: [createEsbuildPlugin(config)],
        });
  
        on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on, config);

        allureWriter(on, config);
        return config;
      },
      env: {
        allure: true,
        allureReuseAfterSpec: true
      },
      specPattern: "cypress/e2e/features/*.feature",
      watchForFileChanges: false,
      defaultCommandTimeout: 5000,
      pageLoadTimeout: 10000,
      waitForAnimations: true
    },
  });
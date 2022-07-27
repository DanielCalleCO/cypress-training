import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 20000
      config.responseTimeout = 20000
      return config;
    },
  },
});

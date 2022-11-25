import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: false,
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
  },
});

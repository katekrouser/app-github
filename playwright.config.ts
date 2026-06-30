import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm start', 
    url: 'http://localhost:4200/',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000, 
  },
  testDir: './tests',

  fullyParallel: true,
  workers: 2,

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'dev',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/',
      },
    },
    {
      name: 'staging',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4201/'
      },
    },
  ]
});
// @ts-check
const {defineConfig, devices} = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests/e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? process.env.CI : 0,
    workers: process.env.CI ? process.env.CI : 1,
    reporter: 'html',

    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },
        {
            name: 'firefox',
            use: {...devices['Desktop Firefox']},
        },
        {
            name: 'webkit',
            use: {...devices['Desktop Safari']},
        },
        // {
        //     name: 'Mobile Chrome',
        //     use: {...devices['Pixel 5']},
        // },
        // {
        //     name: 'Mobile Safari',
        //     use: {...devices['iPhone 12']},
        // },
    ],

    webServer: {
        command: 'npm run serve',
        url: 'http://127.0.0.1:8080',
        reuseExistingServer: !process.env.CI,
        stdout: 'ignore',
        stderr: 'pipe',
    },
    use: {
        baseURL: 'http://127.0.0.1:8080',
        trace: 'on-first-retry',
    },
});


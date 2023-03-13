import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const baseURL='https://chat.openai.com/';
const config: PlaywrightTestConfig = {
	testDir: './tests',
	/* Maximum time one test can run for. */
	timeout: 15 * 1000,
	expect: {
		/**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
		timeout: 30 * 1000
	},
	globalTimeout: 60 * 60 * 1000,
	/* Run tests in files in parallel */
	fullyParallel: false,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: 2,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 3 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: [['html'], ['allure-playwright']],
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	globalSetup: require.resolve('./tests/global-setup'),
	use: {
		/* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
		actionTimeout: 0,

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		baseURL,
		screenshot: 'only-on-failure',
		video: 'retain-on-failure',
		trace: 'retain-on-failure',
		storageState: 'storageState.json',
		headless: true,
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'firefox',
			use: {
				...devices['Desktop Firefox'],
				userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
			},
		}
	],

	/* Folder for test artifacts such as screenshots, videos, traces, etc. */
	// outputDir: 'test-results/',

	/* Run your local dev server before starting the tests */
	// webServer: {
	//   command: 'npm run start',
	//   port: 3000,
	// },
};

export default config;

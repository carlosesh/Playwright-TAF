import { test, expect } from './util';

import { home } from './pages';
test.describe('Accesibility', () => {

	test.beforeEach(async ({ page }) => {
		await home.goHere(page);
		await home.expectToBeHere(page);
	});

	test('it should show violations if any', async ({ makeAxeBuilder }, testInfo) => {
		const accessibilityScanResults = await makeAxeBuilder().analyze();

		await testInfo.attach('accessibility-scan-results', {
			body: JSON.stringify(accessibilityScanResults, null, 2),
			contentType: 'application/json'
		});

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

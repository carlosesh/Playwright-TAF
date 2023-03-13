import { Page } from '@playwright/test';
import { Categories } from '../../util';

const selectors = {
	[Categories.TODAYS_DEALS]: '//a[text()="Today\'s Deals"]'
} as const;

export async function clickOnCategory(page: Page, category: Categories, retries?: number) {
	if (retries == 0) {
		throw new Error(`Unable to find category ${category}`);
	}
	if (page.locator(selectors[category]).isVisible()) {
		await Promise.all([
			page.waitForNavigation(), //
			page.locator(selectors[category]).click(),
		]);
		return;
	}
	await Promise.all([
		page.waitForNavigation(), //
		await page.reload(),
	]);

	return await clickOnCategory(page, category, retries - 1);
}

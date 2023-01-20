import { Page } from '@playwright/test';

const selectors = {
	shop: '//span[@class="v-btn__content" and contains(., "Shop")]'
} as const;

export async function clickOnShop(page: Page) {
	await Promise.all([
		page.waitForNavigation(), //
		page.click(selectors.shop),
	]);
}

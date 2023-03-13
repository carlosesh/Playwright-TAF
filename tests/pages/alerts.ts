import { Page, expect } from '@playwright/test';

const selectors = {
	modal: '//div[contains(@role, "dialog")]',
	nextButton: '//button[contains(., "Next")]',
	doneButton: '//button[contains(., "Done")]'
} as const;

export async function expectModalToBeVisible(page: Page) {
	await expect(page.locator(selectors.modal)).toBeVisible();
}
async function clickOnNextButton(page: Page) {
	await page.click(selectors.nextButton);
}

async function clickOnDoneButton(page: Page) {
	await page.click(selectors.doneButton);
}

export async function dismissModalRecursively(page: Page) {
	if (await page.isVisible(selectors.modal)) {
		if (await page.isVisible(selectors.doneButton)) {
			await clickOnDoneButton(page);
			return;
		}
		await clickOnNextButton(page);
		await dismissModalRecursively(page);
	}
}


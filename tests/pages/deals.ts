import { expect, Page } from '@playwright/test';
import { Departments, Price, PrimePrograms } from '../util';

const selectors = {
	todaysDealsHeader: '//h1[text()="Today\'s Deals"]'
} as const;

export async function expectTodaysDealsHeaderToBeVisible(page: Page) {
	await expect(page.locator(selectors.todaysDealsHeader)).toBeVisible();
}

export async function checkBoxWithLabel(page: Page, label: PrimePrograms | Departments) {
	await page.getByLabel(label).first().check();
}

export async function expectCheckboxWithLabelToBeChecked(page: Page, checkboxType: PrimePrograms | Departments) {
	await expect(await page.getByLabel(checkboxType).first().isChecked()).toBeTruthy();
}

export async function clickOnPriceWithText(page: Page, price: Price) {
	await page.getByText(price).click();
}

export async function expectPriceTextToBeBoldedBySelectorAndDisplayed(page: Page, price: Price) {
	await expect(await page.getByText(price).getAttribute('class')).toEqual('a-text-bold');
}

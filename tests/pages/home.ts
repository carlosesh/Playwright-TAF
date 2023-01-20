import { Page, expect } from '@playwright/test';
import { ROUTES } from '../util';

const selectors = {
	signUpButton: '//span[text()=\'Sign up\']'
} as const;

export async function goHere(page: Page) {
	await page.goto(ROUTES.home.root);
}

export async function expectToBeHere(page: Page) {
	await expect(page).toHaveURL(ROUTES.home.root);
}

export async function clickSignUpButton(page: Page) {
	await Promise.all([
		page.waitForNavigation(), //
		page.click(selectors.signUpButton),
	]);
}

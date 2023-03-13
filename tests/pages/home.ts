import { Page, expect } from '@playwright/test';
import { ROUTES } from '../util';

const selectors = {
	signInButton: 'Sign in',
	accountGreeting:(name: string) => `Hello, ${name}`
} as const;

export async function goHere(page: Page) {
	await Promise.all([
		page.waitForNavigation(), //
		page.goto(ROUTES.home.root),
	]);
}

export async function expectToBeHere(page: Page) {
	await expect(page).toHaveURL(ROUTES.home.root);
}

export async function expectGreetingWithNameToBeVisible(page: Page, name: string) {
	await expect(page.getByText(selectors.accountGreeting(name))).toBeVisible();
}

export async function clickOnSignInButton(page: Page) {
	await page.getByText(selectors.signInButton).first().click();
}

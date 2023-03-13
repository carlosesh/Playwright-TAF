import { Page, expect } from '@playwright/test';

const selectors = {
	signInHeader: '//h1[contains(text(), "Sign in")]',
	emailInputField: '//input[@type="email"]',
	passwordInputField: '//input[@type="password"]',
	continueButton: 'input#continue',
	signInButton: 'input#signInSubmit'
} as const;

export async function expectSignInHeaderToBeVisible(page: Page) {
	await expect(page.locator(selectors.signInHeader)).toBeVisible();
}

export async function fillEmailInputField(page: Page, email: string) {
	await page.fill(selectors.emailInputField, email);
}

export async function fillPasswordInputField(page: Page, email: string) {
	await page.fill(selectors.passwordInputField, email);
}

export async function clickOnContinueButton(page: Page) {
	await page.click(selectors.continueButton);
}

export async function clickOnSignInButton(page: Page) {
	await page.click(selectors.signInButton);
}

export async function signInWithCredentials(page: Page, username: string, password: string) {
	await fillEmailInputField(page, username);
	await clickOnContinueButton(page);
	await fillPasswordInputField(page, password);
	await clickOnSignInButton(page);
}

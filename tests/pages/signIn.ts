import { Page, expect } from '@playwright/test';
import { ROUTES } from '../util';

const selectors = {
	welcomeHeader: 'Welcome to ChatGPT',
	emailInputField: '//input[@name="username"]',
	passwordInputField: '//input[@name="password"]',
	logInButton: '//button[contains(., "Log in")]',
	signUpButton: '//button[contains(., "Sign Up")]',
	logInContinueButton: '//button[contains(@class, "button-login-id")]',
	passwordContinueButton: '//button[contains(@class, "button-login-password")]'
} as const;

export async function goHere(page: Page) {
	await Promise.all([
		page.waitForURL(ROUTES.home.login), //
		page.goto(ROUTES.home.login),
		page.waitForLoadState('domcontentloaded')
	]);
}

export async function expectToBeHere(page: Page) {
	await expect(page).toHaveURL(ROUTES.home.login);
}

export async function expectWelcomeHeaderToBeVisible(page: Page) {
	await expect(page.getByText(selectors.welcomeHeader)).toBeVisible();
}

export async function fillEmailInputField(page: Page, email: string) {
	await page.fill(selectors.emailInputField, email);
}

export async function fillPasswordInputField(page: Page, email: string) {
	await page.fill(selectors.passwordInputField, email);
}

export async function clickOnLogInButton(page: Page) {
	await page.click(selectors.logInButton);
}

export async function clickOnLogInContinueButton(page: Page) {
	await page.locator(selectors.logInContinueButton).click();
}
export async function clickOnPasswordContinueButton(page: Page) {
	await page.locator(selectors.passwordContinueButton).click();
}

export async function signInWithCredentials(page: Page, username: string, password: string) {
	await clickOnLogInButton(page);
	await fillEmailInputField(page, username);
	await clickOnLogInContinueButton(page);
	await fillPasswordInputField(page, password);
	await clickOnPasswordContinueButton(page);
}

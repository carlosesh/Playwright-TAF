import { Page, expect } from '@playwright/test';

const selectors = {
	signUpHeader: '//h1[@data-msgid="Sign Up"]',
	emailInputField: '//input[@name="email"]',
	passwordInputField: '//input[@name="password"]',
	continueButton: '//button[@type="submit"]//span[text()="continue"]',
	signUpButton: '//button[@type="submit"]//span[text()="sign up to begin shopping"]',
	wouldYouLikeToContinueAs: (email: string ) => `//p[contains(., " Would you like to continue as ${email}? ")]`
} as const;

export async function expectSignUpHeaderToBeVisible(page: Page) {
	await expect(await page.waitForSelector(selectors.signUpHeader)).toBeTruthy();
}

async function expectWouldYouLikeMessageToBeDisplayed(page: Page, email: string) {
	await expect(await page.waitForSelector(selectors.wouldYouLikeToContinueAs(email))).toBeTruthy;
}

async function typeOnEmailInputField(page: Page, input: string) {
	await page.type(selectors.emailInputField, input);
}

async function typeOnPasswordInputField(page: Page, input: string) {
	await page.type(selectors.passwordInputField, input);
}

async function clickOnContinueButton(page: Page) {
	await page.click(selectors.continueButton);
}

async function clickOnSignUpButton(page: Page) {
	await page.click(selectors.signUpButton);
}

export async function registerWithEmail(page: Page, email: string, password: string) {
	await typeOnEmailInputField(page, email);
	await clickOnContinueButton(page);
	await expectWouldYouLikeMessageToBeDisplayed(page, email)
	await typeOnPasswordInputField(page, password);
	await Promise.all([
		page.waitForNavigation(), //
		clickOnSignUpButton(page),
	]);
}

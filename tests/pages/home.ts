import { Page, expect } from '@playwright/test';
import { ROUTES } from '../util';

const selectors = {
	chatGptHeader: '//h1[text()="ChatGPT"]',
	examplesCapabilitiesAndLimitations: '//h1/following-sibling::div',
	promptInput: '//textarea[@placeholder="Send a message."]',
	sendMessageButton: '//textarea[@placeholder="Send a message."]/following-sibling::button',
	stopGeneratingButton: '//div[contains(., "Stop generating")]',
	regenerateResponseButton: '//div[contains(., "Regenerate response")]',
	responseTextField: '(//p)[1]'
} as const;

export async function goHere(page: Page) {
	await Promise.all([
		page.waitForURL(ROUTES.home.root), //
		page.goto(ROUTES.home.root), //
		page.waitForLoadState('domcontentloaded')
	]);
}

export async function expectToBeHere(page: Page) {
	await expect(page).toHaveURL(ROUTES.home.root);
}

export async function expectChatGptHeaderToBeVisible(page: Page) {
	await expect(page.locator(selectors.chatGptHeader)).toBeVisible();
}

export async function expectExamplesCapabilitiesAndLimitationsToBeVisible(page: Page) {
	await expect(page.locator(selectors.examplesCapabilitiesAndLimitations)).toBeVisible();
}

async function fillPromptInput(page: Page, prompt: string) {
	await page.fill(selectors.promptInput, prompt);
}

async function clickSendMessageButton(page: Page) {
	await page.click(selectors.sendMessageButton);
}

export async function fillPromptInputAndClickSendMessageButton(page: Page, prompt: string) {
	await fillPromptInput(page, prompt);
	await clickSendMessageButton(page);
}

export async function waitForStopGeneratingButtonToBeVisible(page: Page) {
	await page.waitForSelector(selectors.stopGeneratingButton);
}

export async function waitForRegenerateResponseButtonToBeVisible(page: Page) {
	await page.waitForSelector(selectors.regenerateResponseButton);
}

export async function expectResponseTextFieldToContainText(page: Page, expectedText: string) {
	const expectedTextArray = expectedText.split(' ');
	for (const text of expectedTextArray) {
		await expect(page.locator(selectors.responseTextField)).toContainText(text);
	}
}

export async function expectErrorMessageToBeDisplayedByText(page: Page, expectedText: string) {
	await expect(page.getByText(expectedText)).toBeTruthy();
}

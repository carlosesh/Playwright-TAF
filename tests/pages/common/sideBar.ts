import { expect, Page } from '@playwright/test';

const selectors = {
	ellipsisButton: (username: string) => `//div[contains(., "${username}") and @data-headlessui-state]//following-sibling::div[contains(@class, "text-ellipsis ")]`,
	clearConversationButton: '//a[contains(., "Clear conversations")]',
	confirmClearConversationButton: '//a[contains(., "Confirm clear conversations")]',
	conversationList: 'li.relative',
} as const;

async function clickOnEllipsisButton(page: Page, username: string) {
	await page.click(selectors.ellipsisButton(username));
}

export async function clearConversations(page: Page, username: string) {
	await clickOnEllipsisButton(page, username);
	await page.click(selectors.clearConversationButton);
	await page.click(selectors.confirmClearConversationButton);
}

export async function clearConversationsIfAny(page: Page, username: string) {
	if (await getConversationListCount(page)) {
		await clearConversations(page, username);
	}
	await page.waitForSelector(selectors.conversationList, { state: 'hidden' });
}

async function getConversationListCount(page: Page) {
	return (await page.$$(selectors.conversationList)).length;
}

export async function expectConversationListCountToBe(page: Page, expectedCount: number) {
	expect(await getConversationListCount(page)).toBe(expectedCount);
}

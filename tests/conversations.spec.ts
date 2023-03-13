import { test } from '@playwright/test';
import { home } from './pages';
import { historicTestData, longTextData } from './parameterized-test-data';
test.describe('Conversations', () => {

	test.beforeEach(async ({ page }) => {
		await home.goHere(page);
		await home.expectToBeHere(page);
	});

	historicTestData.forEach(data => {
		test(`Prompt "${data.prompt}" fact "${data.fact}"`, async ({ page }) => {
			await home.fillPromptInputAndClickSendMessageButton(page, data.prompt);
			await home.waitForRegenerateResponseButtonToBeVisible(page);
			await home.expectResponseTextFieldToContainText(page, data.fact);
		});
	});

	test('it should throw error message on long input', async ({ page }) => {
		await home.fillPromptInputAndClickSendMessageButton(page, longTextData.prompt);
		await home.expectErrorMessageToBeDisplayedByText(page, longTextData.errorMessage);
	});
});

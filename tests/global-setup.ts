import * as fs from 'fs';
import * as playwright from '@playwright/test';
import { signIn, alerts, sideBar, home } from './pages/index';
import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
	const name = config.projects[0].name as 'firefox';
	const { baseURL, storageState } = config.projects[0].use;

	if (!storageState || !baseURL) {
		return;
	}

	const browser = await playwright[name].launch();
	const page = await browser.newPage({ baseURL });

	if (fs.existsSync(storageState as string)) {
		await fs.promises.unlink(storageState as string);
	}

	await signIn.goHere(page);
	await signIn.expectToBeHere(page);
	await signIn.signInWithCredentials(page, process.env.USERNAME, process.env.PASSWORD);
	await home.expectToBeHere(page);
	await alerts.expectModalToBeVisible(page);
	await alerts.dismissModalRecursively(page);
	await sideBar.clearConversationsIfAny(page, process.env.USERNAME);
	await sideBar.expectConversationListCountToBe(page, 0);
	await home.expectChatGptHeaderToBeVisible(page);
	await home.expectExamplesCapabilitiesAndLimitationsToBeVisible(page);

	await page.context().storageState({ path: storageState as string });

	await browser.close();
}

export default globalSetup;

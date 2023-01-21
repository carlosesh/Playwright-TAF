import * as fs from 'fs';
import * as playwright from '@playwright/test';
import { FullConfig } from '@playwright/test';
import { home, signUp, homeForYou } from './pages';

async function globalSetup(config: FullConfig) {
	const name = config.projects[0].name as 'chromium' | 'firefox' | 'webkit';
	const { baseURL, storageState } = config.projects[0].use;

	if (!storageState || !baseURL) {
		return;
	}

	const browser = await playwright[name].launch();
	const page = await browser.newPage({ baseURL });
	const email = `${new Date().getTime()}-ltk-tester@gc.io`;
	process.env.EMAIL = email;
	await home.goHere(page);
	await home.expectToBeHere(page);
	await home.clickSignUpButton(page);
	await signUp.expectSignUpHeaderToBeVisible(page);
	await signUp.registerWithEmail(page, email, 'testEmail123_0');
	await homeForYou.goHere(page);
	await homeForYou.expectToBeHere(page);

	if (fs.existsSync(storageState as string)) {
		await fs.promises.unlink(storageState as string);
	}

	await page.context().storageState({ path: storageState as string });

	await browser.close();
}

export default globalSetup;

import { expect, Page } from '@playwright/test';

export async function expectScreenshotToMatchSnapshot(page: Page) {
	expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.02 });
}

import { test } from '@playwright/test';
import { home } from './pages';
import {  expectScreenshotToMatchSnapshot } from './util';

test.describe('Layout', () => {
	test('it should be the same on every login', async ({ page }) => {
		await home.goHere(page);
		await home.expectToBeHere(page);
		await expectScreenshotToMatchSnapshot(page);
	});
});

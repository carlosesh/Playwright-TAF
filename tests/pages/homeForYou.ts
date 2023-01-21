import { Page, expect } from '@playwright/test';
import { ROUTES } from '../util';

export async function goHere(page: Page) {
	await page.goto(ROUTES.home.forYou);
}

export async function expectToBeHere(page: Page) {
	await expect(page).toHaveURL(ROUTES.home.forYou);
}

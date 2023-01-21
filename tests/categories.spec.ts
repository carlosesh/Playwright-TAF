import { test } from '@playwright/test';
import { homeForYou, navigationBar, categories } from './pages';

test.describe('Categories', () => {
	test('Can view all of LTK Categories', async ({ page }) => {
		await homeForYou.goHere(page);
		await homeForYou.expectToBeHere(page);
		await navigationBar.clickOnShop(page);
		await categories.expectToBeHere(page);
		await categories.expectLtkCategoriesHeaderToBeVisible(page);
		await categories.expectAllCategoriesToBeVisible(page);
	});
});

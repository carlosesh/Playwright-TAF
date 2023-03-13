import { test } from '@playwright/test';
import { deals, home, navigationBar } from './pages';
import { Categories } from './util';
import { todaysDealsTestData } from './parameterized-test-data';

test.describe('Todays Deals', () => {
	todaysDealsTestData.forEach(data => {
		test(`Filter ${data.department} by program ${data.primeProgram} and price ${data.price}`, async ({ page }) => {
			await home.goHere(page);
			await navigationBar.clickOnCategory(page, Categories.TODAYS_DEALS);
			await deals.expectTodaysDealsHeaderToBeVisible(page);
			// check prime program
			await deals.checkBoxWithLabel(page, data.primeProgram);
			await deals.expectCheckboxWithLabelToBeChecked(page, data.primeProgram);
			// check department type
			await deals.checkBoxWithLabel(page, data.department);
			await deals.expectCheckboxWithLabelToBeChecked(page, data.department);
			// click on products based on price
			await deals.clickOnPriceWithText(page, data.price);
			await deals.expectPriceTextToBeBoldedBySelectorAndDisplayed(page, data.price);
		});
	});
});

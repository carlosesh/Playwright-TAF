import { Page, expect } from '@playwright/test';
import { Categories, ROUTES } from '../util';

const selectors = {
	ltkCategoriesHeader: 'LTK Categories',
	categories: {
		[Categories.LTK_FIND]: '//a[contains(@class, "category-item")]//p[contains(., "LTK Find")]',
		[Categories.WINTER_TRENDS]: '//a[contains(@class, "category-item")]//p[contains(., "Winter Trends")]',
		[Categories.LTK_U]: '//a[contains(@class, "category-item")]//p[contains(., "LTK-U")]',
		[Categories.HOME]: '//a[contains(@class, "category-item")]//p[contains(., "Home")]',
		[Categories.DEAL_ALERT]: '//a[contains(@class, "category-item")]//p[contains(., "Deal Alert")]',
		[Categories.UNDER_50]: '//a[contains(@class, "category-item")]//p[contains(., "Under $50")]',
		[Categories.UNDER_100]: '//a[contains(@class, "category-item")]//p[contains(., "Under $100")]',
		[Categories.STYLE_TIPS]: '//a[contains(@class, "category-item")]//p[contains(., "Style Tips")]',
		[Categories.BEAUTY]: '//a[contains(@class, "category-item")]//p[contains(., "Beauty")]',
		[Categories.FITNESS]: '//a[contains(@class, "category-item")]//p[contains(., "Fitness")]',
		[Categories.CURVES]: '//a[contains(@class, "category-item")]//p[contains(., "Curves")]',
		[Categories.SHOPPABLE_VIDEO]: '//a[contains(@class, "category-item")]//p[contains(., "Shoppable Video")]',
		[Categories.WORKWEAR]: '//a[contains(@class, "category-item")]//p[contains(., "Workwear")]',
		[Categories.SWIM]: '//a[contains(@class, "category-item")]//p[contains(., "Swim")]',
		[Categories.TRAVEL]: '//a[contains(@class, "category-item")]//p[contains(., "Travel")]',
		[Categories.SHOE_CRUSHES]: '//a[contains(@class, "category-item")]//p[contains(., "Shoe Crushes")]',
		[Categories.IT_BAGS]: '//a[contains(@class, "category-item")]//p[contains(., "It Bags")]',
		[Categories.BABY]: '//a[contains(@class, "category-item")]//p[contains(., "Baby")]',
		[Categories.BUMP]: '//a[contains(@class, "category-item")]//p[contains(., "Bump")]',
		[Categories.KIDS]: '//a[contains(@class, "category-item")]//p[contains(., "Kids")]',
		[Categories.FAMILY]: '//a[contains(@class, "category-item")]//p[contains(., "Family")]',
		[Categories.MENS]: '//a[contains(@class, "category-item")]//p[contains(., "Mens")]',
		[Categories.WEDDINGS]: '//a[contains(@class, "category-item")]//p[contains(., "Weddings")]',
		[Categories.EUROPE]: '//a[contains(@class, "category-item")]//p[contains(., "Europe")]',
		[Categories.BRASIL]: '//a[contains(@class, "category-item")]//p[contains(., "Brasil")]',
	}
} as const;

export async function goHere(page: Page) {
	await page.goto(ROUTES.home.categories);
}

export async function expectToBeHere(page: Page) {
	await expect(page).toHaveURL(ROUTES.home.categories);
}

export async function expectLtkCategoriesHeaderToBeVisible(page: Page) {
	await expect(page.getByText(selectors.ltkCategoriesHeader)).toBeVisible();
}

export async function expectAllCategoriesToBeVisible(page: Page) {
	for (const category in selectors.categories) {
		await expect(page.locator(selectors.categories[category])).toBeVisible();
	}
}

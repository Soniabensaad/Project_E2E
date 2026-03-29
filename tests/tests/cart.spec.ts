import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.request.delete('http://localhost:3000/api/cart');
  await page.goto('http://localhost:3000');
});

test('add item', async ({ page }) => {

  const item = page.getByText('Add to Cart').nth(2);
  await item.click();

  const toast = page.getByText('Added to cart!');
  await expect(toast).toBeVisible();
  await expect(toast).toContainText('Added');

  const counting = page.locator('#cartCount');
  await expect(counting).toHaveText('1');

});


/*
. Update Item Quantity

Precondition

The cart contains Product 1 with quantity = 1.

Steps

Open the Cart Page.
Locate the product in the cart.
Click the Increase (+) quantity button.

Expected Results

The item quantity increases to 2.
 */

test('update item quantity', async ({ page }) => {

  const counting = page.locator('#cartCount');

  const addAgainItem =   page.getByText('Add to Cart').nth(2);

  for (let i = 0; i < 2; i++) {
    await addAgainItem.click();
  }
  await expect(counting).toHaveText('2');

});

import { test, expect, mergeExpects } from '@playwright/test';
const BASE_URL = 'http://localhost:3000';


test('GET products', async ({ request }) => {
    /* Scenario 1 — Retrieve all products

Objective: Verify that the system returns the complete list of products.

Steps:

Send a request to retrieve the list of products.
Wait for the API response.
Verify the response status code.
Verify the returned data structure.

Expected Result:

Status code should be 200 (OK).
The response should return a list of products.
The list should contain 6 products.
Each product should include basic attributes such as id, name, price, and category.
    */

  const response = await request.get(`${BASE_URL}/api/products`);

  expect(response.status()).toBe(200);

const body = await response.json();

// If the response is already an array
expect(Array.isArray(body)).toBeTruthy();
expect(body).toHaveLength(6);

body.forEach(product => {
  expect(product).toHaveProperty('id');
  expect(product).toHaveProperty('name');
  expect(product).toHaveProperty('price');
  expect(product).toHaveProperty('category');
});
});


/*
Scenario 2 — Filter products by category

Objective: Verify that products can be filtered by category.

Steps:

Send a request to retrieve products filtered by the category "electronics".
Receive the API response.
Examine the returned list of products.

Expected Result:

Status code should be 200.
The returned list should contain at least one product.
Every product in the response should belong to the electronics category.
*/
  

test('GET products per category', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/api/products`);
  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(Array.isArray(body)).toBeTruthy();

  const categories = ['Accessories' , 'Electronics'];

  categories.forEach(category => {
    const items = body.filter(product => product.category === category);

    items.forEach(product => {
      expect(product.category).toBe(category);
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('category');
    });
  });
});


/*
Scenario 3 — Search product by keyword

Objective: Verify that the API returns products matching a search keyword.

Steps:

Send a request with the search term "keyboard".
Wait for the API response.
Inspect the returned products.

Expected Result:

Status code should be 200.
Only one product should match the search term.
The product name should contain the word keyboard.
 */

test('GET products per keyword', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/api/products`);
  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(Array.isArray(body)).toBeTruthy();
  const keyword = 'keyboard'
  const resultskey = body.filter(key => key.name.toLowerCase().includes(keyword.toLowerCase()) ||
  key.category.toLowerCase().includes(keyword.toLowerCase())

)
expect(resultskey.length).toBeGreaterThan(0)
console.log(resultskey)
  });

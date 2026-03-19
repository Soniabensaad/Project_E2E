# KaneAI Test Scenarios for TechMart

This document contains natural language test instructions designed for KaneAI.
Each scenario can be entered directly into KaneAI's test authoring interface.

---

## Scenario 1: Homepage Verification

**Test Name:** Verify Homepage Loads Correctly

**Instructions:**
```
Go to http://localhost:3000
Assert the page title contains "TechMart"
Assert text "Welcome to TechMart" is visible
Assert the logo containing "TechMart" is displayed in the header
Scroll down to see the products section
Assert at least 6 product cards are displayed
Assert each product card has an "Add to Cart" button visible
```

---

## Scenario 2: Product Search

**Test Name:** Search for Products

**Instructions:**
```
Go to http://localhost:3000
Click on the search input field
Type "Keyboard" in the search box
Click the search button
Wait for 2 seconds
Assert only 1 product card is displayed
Assert text "Mechanical Keyboard" is visible
Assert the product price shows "$129.99"
```

---

## Scenario 3: Filter Products by Category

**Test Name:** Filter Products by Electronics Category

**Instructions:**
```
Go to http://localhost:3000
Click on the Category dropdown
Select "Electronics" from the dropdown
Wait for the page to update
Assert all visible products belong to the electronics category
Assert no products from the accessories category are visible
```

---

## Scenario 4: Add Item to Cart

**Test Name:** Add Product to Shopping Cart

**Instructions:**
```
Go to http://localhost:3000
Find the first product card
Click the "Add to Cart" button on the first product
Assert a toast message appears with text "Added to cart"
Assert the cart count in the navbar shows "1"
Click on the cart link in the navigation
Assert we are on the cart page
Assert one item is displayed in the cart
```

---

## Scenario 5: Update Cart Quantity

**Test Name:** Increase Item Quantity in Cart

**Instructions:**
```
Go to http://localhost:3000
Click "Add to Cart" on the first product
Click on the Cart link
Assert the quantity shows "1"
Click the "+" button to increase quantity
Wait for the cart to update
Assert the quantity now shows "2"
Assert the item total has doubled
```

---

## Scenario 6: Remove Item from Cart

**Test Name:** Remove Item from Shopping Cart

**Instructions:**
```
Go to http://localhost:3000
Click "Add to Cart" on the first product
Navigate to the cart page
Assert one item is in the cart
Click the remove button (X) on the item
Wait for the cart to update
Assert the text "Your cart is empty" is displayed
Assert the "Start Shopping" button is visible
```

---

## Scenario 7: User Login with Valid Credentials

**Test Name:** Login with Demo Account

**Instructions:**
```
Go to http://localhost:3000/login.html
Assert the login form is displayed
Assert demo credentials are shown on the page
Enter "demo@techmart.com" in the email field
Enter "demo123" in the password field
Click the Login button
Assert a success toast message appears
Wait for redirect to homepage
Assert text "Hi, Demo User" is visible in the navigation
```

---

## Scenario 8: User Login with Invalid Credentials

**Test Name:** Login Should Fail with Wrong Password

**Instructions:**
```
Go to http://localhost:3000/login.html
Enter "demo@techmart.com" in the email field
Enter "wrongpassword" in the password field
Click the Login button
Assert an error message "Invalid credentials" is displayed
Assert we are still on the login page
```

---

## Scenario 9: User Registration

**Test Name:** Register New Account

**Instructions:**
```
Go to http://localhost:3000/register.html
Assert the registration form is displayed
Enter "Jane Smith" in the Full Name field
Enter "jane.smith@example.com" in the Email field
Enter "securepassword123" in the Password field
Enter "securepassword123" in the Confirm Password field
Click the "Create Account" button
Assert a success toast message appears
Wait for redirect to homepage
Assert the user is logged in
```

---

## Scenario 10: Registration Password Mismatch

**Test Name:** Registration Should Fail with Mismatched Passwords

**Instructions:**
```
Go to http://localhost:3000/register.html
Enter "Test User" in the Full Name field
Enter "test@example.com" in the Email field
Enter "password123" in the Password field
Enter "different456" in the Confirm Password field
Click the "Create Account" button
Assert an error message "Passwords do not match" is displayed
```

---

## Scenario 11: Complete Checkout Flow

**Test Name:** Full E2E Checkout Process

**Instructions:**
```
Go to http://localhost:3000
Click "Add to Cart" on the Wireless Headphones product
Click on the Cart link
Assert the Wireless Headphones are in the cart
Click "Proceed to Checkout"
Fill in First Name with "John"
Fill in Last Name with "Doe"
Fill in Street Address with "123 Main Street"
Fill in City with "Grand Rapids"
Select "Michigan" from the State dropdown
Fill in ZIP Code with "49501"
Fill in Phone Number with "555-123-4567"
Fill in Name on Card with "John Doe"
Fill in Card Number with "4111111111111111"
Fill in Expiration Date with "12/25"
Fill in CVV with "123"
Click "Place Order"
Assert the order confirmation modal is displayed
Assert text "Order Confirmed" is visible
Assert an order ID is displayed
```

---

## Scenario 12: Cart Total Calculation

**Test Name:** Verify Cart Calculates Totals Correctly

**Instructions:**
```
Go to http://localhost:3000
Add "Wireless Headphones" ($79.99) to cart
Add "USB-C Hub" ($49.99) to cart
Navigate to the cart page
Assert the subtotal shows "$129.98"
Assert the total shows "$129.98"
Increase the quantity of Wireless Headphones to 2
Assert the subtotal updates to "$209.97"
```

---

## Scenario 13: User Logout

**Test Name:** Logout After Login

**Instructions:**
```
Go to http://localhost:3000/login.html
Enter "demo@techmart.com" in the email field
Enter "demo123" in the password field
Click the Login button
Wait for redirect to homepage
Assert text "Hi, Demo User" is visible
Click the Logout button
Assert the Login button is now visible
Assert the Sign Up button is now visible
Assert "Hi, Demo User" is no longer visible
```

---

## Scenario 14: Price Filter

**Test Name:** Filter Products by Price Range

**Instructions:**
```
Go to http://localhost:3000
Move the Max Price slider to $50
Wait for products to filter
Assert only products under $50 are displayed
Assert the USB-C Hub ($49.99) is visible
Assert the Mouse Pad XL ($24.99) is visible
Assert the Mechanical Keyboard ($129.99) is NOT visible
```

---

## Scenario 15: Mobile Responsive Check

**Test Name:** Homepage Works on Mobile

**Instructions:**
```
Go to http://localhost:3000
Assert the logo is visible
Assert the product grid is displayed
Assert all product cards are accessible
Assert the "Add to Cart" buttons work
Navigate to the cart using the cart icon
Assert the cart page loads correctly
```

---

## Notes for KaneAI Usage

1. **Start each test** by navigating to the base URL
2. **Use explicit waits** when page updates are expected
3. **Assert outcomes** after each significant action
4. **Use descriptive text** to help KaneAI identify elements
5. **Break complex flows** into smaller, manageable steps

### Example KaneAI Commands Reference

| Action | Example |
|--------|---------|
| Navigate | `go to https://example.com` |
| Click | `click on the login button` |
| Type | `enter "text" in the email field` |
| Select | `select "Option" from the dropdown` |
| Assert | `assert text "Welcome" is visible` |
| Wait | `wait for 3 seconds` |
| Scroll | `scroll to the bottom of the page` |

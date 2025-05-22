import { isCartItem, isProduct } from "../validation.js"
const exampleProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
}

const exampleCartObject = {
	id: 2001,
	amount: 1,
	item: exampleProduct
}

describe('Validation', () => {

	test('it returns true for a valid cart object', () => {
    const result = isCartItem(exampleCartObject);
    expect(result).toBe(true);
	});
	
	test('it returns false for invalid cart objects', () => {
    const invalidCartObject = { id: 2002, amount: 1 };
    const result = isCartItem(invalidCartObject);
    expect(result).toBe(false);
	});
	
	test('it returns true for a valid product', () => {
    const result = isProduct(exampleProduct);
    expect(result).toBe(true);
	});
	
	test('it returns false for an invalid product', () => {
    const invalidProduct = { id: 1002, price: 100 };
    const result = isProduct(invalidProduct);
    expect(result).toBe(false);
	});
})

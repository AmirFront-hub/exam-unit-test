import { addToCart, getCartItemCount, clearCart, removeFromCart, editCart, getItem, getTotalCartValue } from "../cart.js"
import { isCartItem } from "../validation"


describe('Cart', () => {
	beforeEach(() => {
		clearCart()
	})
	
	test('addToCart lägger till en ny produkt i kundvagnen', () => {
		const itemCountBefore = getCartItemCount()
		const input = { id: 1002, name: 'Vattenpistol', price: 40 }
		addToCart(input)
		const itemCountAfter = getCartItemCount()
		expect(itemCountAfter).toBe(itemCountBefore + 1)
	})


	test('removeFromCart tar bort en produkt från kundvagnen', () => {
		clearCart();
		const input = { id: 1002, name: 'Vattenpistol', price: 40 }
		addToCart(input)
		const itemCountAfterAdd = getCartItemCount()
		expect(itemCountAfterAdd).toBe(1)

		const cartItem = getItem(0)
		removeFromCart(cartItem.id)
		const itemCountAfterRemove = getCartItemCount()
		expect(itemCountAfterRemove).toBe(0)
	})

  	test("getTotalCartValue ska returnera total summan av alla produkter", () => {
    const input1 = { id: 1008, name: "Vattenpistol", price: 40 };
    const input2 = { id: 1005, name: "Hopprep", price: 60 };

    addToCart(input1);
    addToCart(input2);

    expect(getTotalCartValue()).toBe(100);
  	});
})



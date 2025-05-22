// importera här
import { addToCart, getCartItemCount, clearCart, removeFromCart, editCart, getItem, getTotalCartValue } from "../cart.js"
import { isCartItem } from "../validation"


describe('Cart', () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		clearCart()
	})


	// -------------------------------------------------- //
	// Skriv dina testfall här
	
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

		// hämnta ID ifrån cart producten (borde vara 2002 )
		const cartItem = getItem(0)
		removeFromCart(cartItem.id)
		const itemCountAfterRemove = getCartItemCount()
		expect(itemCountAfterRemove).toBe(0)
	})

	// -------------------------------------------------- //
})



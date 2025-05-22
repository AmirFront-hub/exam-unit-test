/*
Din uppgift:
- skriv testfall för alla funktionerna nedan i cart.test.js (RED)
- skriv kod här för att implementera funktionerna (GREEN)

Tips:
- börja med att identifiera VAD som ska testas.
- om du testar t.ex. removeFromCart får du använda addToCart i början av testet. Den kommer nämligen ha sina egna tester

*/
// function getItem(index)
// function getTotalCartValue()
// function editCart(itemId, newValues)
// -------------------------------------------------- //

import { isCartItem, isProduct } from "./validation.js"

let cart = []
let idCounter = 2002
// -------------------------------------------------- //


// Din kod börjar här
// Du får en funktion att börja med

function clearCart(){
		cart.length = 0;
	}

function getCartItemCount() {
	return cart.length;
}

function addToCart(newItem) {
	if( !isProduct(newItem) ) {
		return false
	}

	const cartItem = { id: idCounter, amount: 1, item: newItem }
	idCounter++
	cart.push(cartItem)
}

function editCart(itemId, newValues) {
    const item = cart.find(c => c.id === itemId);
    if (item) {
        Object.assign(item, newValues);
    }
}

function removeFromCart(itemId) {
    const index = cart.findIndex(c => c.id === itemId);
    if (index !== -1) {
        cart.splice(index, 1);
    }
}

function getItem(index) {
    return cart[index];
}

function getTotalCartValue() {
    return cart.reduce((sum, cartItem) => sum + (cartItem.item.price * cartItem.amount), 0);
}



export { addToCart, getCartItemCount, clearCart, removeFromCart, editCart, getItem, getTotalCartValue }

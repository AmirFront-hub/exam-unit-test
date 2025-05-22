function isCartItem(maybeCartItem) {
    return (
        typeof maybeCartItem === 'object' &&
        typeof maybeCartItem.id === 'number' &&
        typeof maybeCartItem.amount === 'number' &&
        isProduct(maybeCartItem.item)
    );
}

function isProduct(maybeProduct) {
    return (
        typeof maybeProduct === 'object' &&
        typeof maybeProduct.id === 'number' &&
        typeof maybeProduct.name === 'string' &&
        typeof maybeProduct.price === 'number'
    );
}


export { isCartItem, isProduct }

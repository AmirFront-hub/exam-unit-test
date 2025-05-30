function isCartItem(maybeCartItem) {
  if (typeof maybeCartItem !== "object" || maybeCartItem === null) {
    return false;
  } else if (
    typeof maybeCartItem.amount !== "number" ||
    typeof maybeCartItem.item !== "object" ||
    typeof maybeCartItem.id !== "number"
  ) {
    return false;
  }
  return true;
}

function isProduct(maybeProduct) {
  if (typeof maybeProduct !== "object" || maybeProduct === null) {
    return false;
  } else if (
    typeof maybeProduct.name !== "string" ||
    typeof maybeProduct.price !== "number" ||
    typeof maybeProduct.id !== "number"
  ) {
    return false;
  }
  return true;
}


export { isCartItem, isProduct }

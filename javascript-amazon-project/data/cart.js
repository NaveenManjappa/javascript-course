export const cart = [];

export function addToCart(productId) {
  
  let matchingItem;
      //check if product is already there in the cart
      cart.forEach(cartItem => {
        if(productId === cartItem.productId){
          matchingItem = cartItem;
        }
      });

      if(matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity:1
        });
  
      }
}
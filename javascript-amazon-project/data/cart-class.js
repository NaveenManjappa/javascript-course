class Cart { // a class is basically an object generator
  cartItems;
  #localStorageKey;

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;   

    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
  
    if(!this.cartItems) {
      this.cartItems = [
        {
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
        },
        {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId: '2'
        }
      ];
    }
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    
    let matchingItem;
        //check if product is already there in the cart
        this.cartItems.forEach(cartItem => {
          if(productId === cartItem.productId){
            matchingItem = cartItem;
          }
        });
  
        if(matchingItem) {
          matchingItem.quantity += 1;
        } else {
          this.cartItems.push({
            productId: productId,
            quantity:1,
            deliveryOptionId: '1'
          });  
        }
  
        this.saveToStorage();
  }

  removeFromCart(productId) {
    const newCart = [];
  
    cart.forEach(cartItem => {
      if(cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
  
    this.cartItems = newCart;
  
    this.saveToStorage();
  }

  updateDeliveryOption(productId,deliveryOptionId) {
    let matchingProduct;
    this.cartItems.forEach(cartItem => {
      if(cartItem.productId === productId)
          matchingProduct = cartItem;
    });
  
    matchingProduct.deliveryOptionId = deliveryOptionId;
  
    this.saveToStorage();
  }

}

const cart = new Cart('cart-oop');//instance of a class
//cart.#localStorageKey = 'gg';
const businessCart = new Cart('cart-business');

cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);












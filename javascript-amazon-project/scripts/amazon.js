import { cart,addToCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

let productsHTML = '';
products.forEach(product => {
  productsHTML += `
      <div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img src="images/ratings/rating-${product.rating.stars * 10}.png" alt="" class="product-rating-stars">
            <div class="product-rating-count">${product.rating.count }</div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" alt="">
            Added
          </div>

          <button class="add-to-cart-button primary-button js-add-to-cart" data-product-id ="${product.id}">
            Add to Cart
          </button>

      </div>
  `;
});

// console.log(productsHTML);

document.querySelector('.js-products-grid')
  .innerHTML = productsHTML;

function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach(cartItem => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity')
      .innerHTML = cartQuantity;
      
    console.log('cart',cart);
    console.log('cartQuantity',cartQuantity);
}

document.querySelectorAll('.js-add-to-cart')
  .forEach(btnEl => {
    btnEl.addEventListener('click',() => {
      //console.log(btnEl.dataset.productName);//it gives all the data attributes attached to the element
    const productId = btnEl.dataset.productId;

    addToCart(productId);
    
    updateCartQuantity();

    });
  });
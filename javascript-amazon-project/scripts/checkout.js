import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

//async it makes a function return a promise
async function loadPage() {
  console.log('load page');
  try {    
    //throw {msg:'error'};
    await loadProductsFetch();//can use await only inside an async function

    const value = await new Promise((resolve,reject) => {
      //throw 'error2';
      loadCart(() => {
          //reject('error3');
          resolve('value3');
        });
    });

  }
  catch (error) {
    console.log('Unexpected error. Please try again later.',error);
  }
  
  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();
console.log('loading');

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve('value2');
    });
  })
]).then((values) => {

  console.log('values',values);
  renderOrderSummary();
  renderPaymentSummary();

});

*/

/*

new Promise((resolve) => {
  console.log('Start promise');
  loadProducts(() => {
    console.log('Finished loading');
    resolve('value1');
  });

}).then((value) => {
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

console.log('other step');
*/

/*

loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });  
});

*/

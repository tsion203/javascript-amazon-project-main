import { loadProducts, loadProductsFetch } from "../data/products.js";
import {renderOrderSummary} from "./Checkout/OrderSummary.js";
import { renderPaymentSummary } from "./Checkout/PaymentSummary.js";
import { loadCart } from "../data/cart.js";

Promise.all(
    [loadProductsFetch(), 
    new Promise ((resolve) => {
        loadCart(() => {
        resolve();
    });
})

]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

/*
new Promise ( (resolve) => {
    loadProducts( () => {
        resolve("value1");
    })

}).then( (value) => {
    console.log(value);
    return new Promise (  (resolve) => {
        loadCart(() => {
        resolve();
    })
})

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
//loadProducts(() => {});
*/

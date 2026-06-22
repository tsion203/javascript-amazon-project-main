import { loadProducts, loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./Checkout/OrderSummary.js";
import { renderPaymentSummary } from "./Checkout/PaymentSummary.js";
import { renderCheckoutHeader } from "./Checkout/checkoutHeader.js";
import { loadCart,loadCartFetch } from "../data/cart.js";
import '../data/exercise.js'; 

async function loadPage(){
    await loadProductsFetch();
    await loadCartFetch();

    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
}
 loadPage()
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

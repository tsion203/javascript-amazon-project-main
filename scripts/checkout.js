import { loadProducts, loadProductsFetch } from "../data/products.js";
import {renderOrderSummary} from "./Checkout/OrderSummary.js";
import { renderPaymentSummary } from "./Checkout/PaymentSummary.js";
import { loadCart } from "../data/cart.js";

async function loadPage(){
    await loadProductsFetch();
    await new Promise((resolve) => {
        loadCart(() => {
            resolve();
        })
    });
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

import { loadProducts } from "../data/products.js";
import {renderOrderSummary} from "./Checkout/OrderSummary.js";
import { renderPaymentSummary } from "./Checkout/PaymentSummary.js";
loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});


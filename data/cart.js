export let cart;
loadFromStorage();
export function loadFromStorage(){
    cart = JSON.parse(localStorage.getItem('cart'));
    if(!cart){
    cart = [];
    }
}

function saveToStorage(){
    localStorage.setItem("cart",JSON.stringify(cart));
}

export function updateQuantity( productId, newQuantity) {
    let matchingItem;
        cart.forEach((cartItem) => {
            if(productId=== cartItem.productId){
                matchingItem = cartItem;
            }
        });
     if(matchingItem){
                matchingItem.quantity += newQuantity;
            }
            else{
                cart.push({
                    productId: productId,
                    quantity: newQuantity,
                    deliveryOptionId: '1'
                });
            }
            saveToStorage();

}
export function addTocart(productId){
     let matchingItem;
        cart.forEach((cartItem) => {
            if(productId=== cartItem.productId){
                matchingItem = cartItem;
            }
        });
        const selectedValue = Number(document.querySelector(`.js-quantity-selector-${productId} select`).value);
  
            if(matchingItem){
                matchingItem.quantity +=selectedValue;
            }
            else{
                cart.push({
                    productId: productId,
                    quantity: selectedValue,
                    deliveryOptionId: '1'
                });
            }
            saveToStorage();
        }
export function removeFromCart(productId){
        const newCart =[];
        cart.forEach((cartItem) =>{
            if(cartItem.productId !== productId){
                newCart.push(cartItem);
            }
        } )
        cart = newCart;
        saveToStorage();
}

export  function updateCartQuantity(){
    let cartQuantity= 0;
   cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
   })
   document.querySelector(".js-cart-quantity").innerHTML = cartQuantity; 
}
 export function updateDeliveryOption(productId, deliveryOptionId){
        let matchingItem;
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;
     saveToStorage();
}
export function resetCart(){
    cart= [];
    saveToStorage();
}
/* export async function loadCartFetch(){
    const response = await fetch("https://supersimplebackend.dev/cart")
     const message = await response.text();
     console.log(text);
     return text
} */
/* export function loadCart(fun){
    const xhr = new XMLHttpRequest();

    xhr.addEventListener( "load", () => {
       
       fun(); 
    });
    xhr.open("GET", "https://supersimplebackend.dev/cart");
    xhr.send();
};  */

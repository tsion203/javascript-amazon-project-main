import {addTocart,cart,loadFromStorage} from '../../data/cart.js';

function setupQuantitySelector(productId, value = '1') {
  const wrapper = document.createElement('div');
  wrapper.className = `js-quantity-selector-${productId}`;

  const select = document.createElement('select');
  const option = document.createElement('option');
  option.value = value;
  option.textContent = value;
  select.appendChild(option);
  select.value = value;

  wrapper.appendChild(select);
  document.body.appendChild(wrapper);
}

describe('test suite: addToCart', () => {
    it("adds an exisiting product to the cart" , () => {
         spyOn(localStorage, 'setItem');
         spyOn(localStorage, 'getItem').and.callFake(  () => {
        return JSON.stringify([{
            productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity:1,
            deliveryOptionId:'1'
        }]);
      });
      loadFromStorage();
      setupQuantitySelector('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', '1');
      addTocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
     expect(cart[0].quantity).toEqual(2);

  });
  it("adds a new product to the cart" , () => {
      spyOn(localStorage, 'setItem');
      spyOn(localStorage, 'getItem').and.callFake(  () => {
        return JSON.stringify([]);
      });
      loadFromStorage();
      setupQuantitySelector('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', '1');
      addTocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
     expect(cart.length).toEqual(1);
  });
})

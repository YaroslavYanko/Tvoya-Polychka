import { makeVar } from "@apollo/client";

const CART_STATE_LS_KEY = "cart_state";

const getCartStateFromLocalStorage = () => {
  try {
    const state = localStorage.getItem(CART_STATE_LS_KEY) ?? "{}";

    return JSON.parse(state);
  } catch (e) {
    return [];
  }
};

const saveCartState = (cart) => {
  //Зберігаєм сам state
  cartState(cart);

  //Відправляєм state в localStorage
  localStorage.setItem(CART_STATE_LS_KEY, JSON.stringify(cart));
};

export const cartState = makeVar(getCartStateFromLocalStorage());

export const addItemToCart = (id) => {
  const cart = { ...cartState() };
  
  if (cart[id]) {
    cart[id] += 1;
  } else {
    cart[id] = 1;
  }
  saveCartState(cart);


};

export const changeCartItemAmount = (id, amount) => {
  const cart = { ...cartState() };

  if (amount === 0) {
    remoceItemFromCart(id);
    return;
  }

  cart[id] = amount;
  
  saveCartState(cart);
};

export const remoceItemFromCart = (id) => {
  const cart = { ...cartState() };

  delete cart[id];

  saveCartState(cart);
};

//Очистити Масив з замовленнями
export const cleanCart = () =>{
  saveCartState({})
}
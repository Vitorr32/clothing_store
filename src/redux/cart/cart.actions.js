import * as types from './cart.types';

export const toogleCartHidden = () => ({
  type: types.TOOGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: types.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: types.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: types.CLEAR_ITEM_FROM_CART,
  payload: item
});

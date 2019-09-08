import * as types from './cart.types';

export const toogleCartHidden = () => ({
  type: types.TOOGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: types.ADD_ITEM,
  payload: item
});

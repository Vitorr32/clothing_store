import * as types from './cart.types';
import * as utils from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case types.ADD_ITEM:
      return {
        ...state,
        cartItems: utils.addItemToCart(state.cartItems, action.payload)
      };
    case types.REMOVE_ITEM:
      return {
        ...state,
        cartItems: utils.removeItemFromCart(state.cartItems, action.payload)
      };
    case types.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case types.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export default cartReducer;

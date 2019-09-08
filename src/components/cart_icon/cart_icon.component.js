import React from 'react';
import { connect } from 'react-redux';

import { toogleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart_icon.styles.scss';

const CartIcon = () => (
  <div className='cart_icon'>
    <ShoppingIcon className='shopping_icon' />
    <span className='item_count'>0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);

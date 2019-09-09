import React from 'react';

import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import './Checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout_item/checkout_item.component';

const Checkout = ({ cartItems, totalValue }) => (
  <div className='checkout'>
    <div className='checkout_header'>
      <div className='header_block'>
        <span>Product</span>
      </div>
      <div className='header_block'>
        <span>Description</span>
      </div>
      <div className='header_block'>
        <span>Quantity</span>
      </div>
      <div className='header_block'>
        <span>Price</span>
      </div>
      <div className='header_block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className='total'>
      <span>TOTAL: ${totalValue}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);

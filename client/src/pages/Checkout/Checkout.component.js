import React from 'react';

import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import './Checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout_item/checkout_item.component';
import StripeCheckoutButton from '../../components/stripe_button/stripe_button.component';

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

    <div className='test_warning'>
      <b>DO NOT</b> put your real credit card info in the form, this site was
      made as a portfolio project and does not sell any real product <br />
      *If you want to see the checkout working, please use the following test
      credit card for payments*
      <br />
      Number: 4242 4242 4242 4242 <br /> Expiration Date: 01/20 <br /> CVV: 123
    </div>

    <StripeCheckoutButton price={totalValue} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);

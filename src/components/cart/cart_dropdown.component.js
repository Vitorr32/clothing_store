import React from 'react';

import './cart_dropdown.styles.scss';
import CustomButton from '../custom_button/custom_button.component';

const CartDropdown = () => (
  <div className='cart_dropdown'>
    <div className='cart_items'></div>
    <CustomButton>GO TO CHEKCOUT</CustomButton>
  </div>
);

export default CartDropdown;

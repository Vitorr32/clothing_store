import React from 'react';

import './custom_button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...props }) => (
  <button
    className={`${isGoogleSignIn ? 'google_sign_in' : ''} custom_button`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;

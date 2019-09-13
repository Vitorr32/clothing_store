import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_dGCCNs69tM6LzYFhgFmcWeS100xZu6ms5P';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('Payment successful');
      })
      .catch(error => {
        console.log('Error on payment: ', JSON.parse(error));
        alert(
          'There was a issue with your payment, make sure you are using the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Store'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel={'Pay Now'}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_NWLi8FhaVzhSi909PTB8hc9m00s5dul3TR';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(response => {
        alert('Payment Successful');
      })
      .catch(error => {
        console.error('Payment Error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please make sure to use the given credit card',
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='SkyBeat Clothing Ltd.'
      billingAddress
      shippingAddress
      img='https://svgshare.com/i/CUz.jpg'
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

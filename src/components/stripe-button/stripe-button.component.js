import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


export const StripeCheckoutButton = ( { price } ) => {
  const priceForStripe = price * 100
  const publishableKey = "pk_test_51IbQjOBh1y6UvEl1LtdEyeeuWTAAkeNRwgd5IyaQAHbnuExOkV0rEhoqQjqJOilT7GZTTQioBjBJrn3zqmMSdvJS00taYtautU"
  const onToken = ( token ) => {
    console.log( token )
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Course shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price $${ price }`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
      
    
  )
}

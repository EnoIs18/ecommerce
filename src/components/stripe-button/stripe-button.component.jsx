import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const  StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey =               'pk_test_51JXa5IJgF4PBpCQ4BjaFARVLVxdMQSGCKKYKvSG8MLT6CbOHpkXAlrDSUj34O6GOzKwDZuja7VPepGCXROKQwGqV00SO1IH3U0'
const onToken = token => {
    console.log(token)
    alert('Payment successful')
}
return (
<StripeCheckout 
label = 'Pay now'
name = 'CRWN clothing'
billingAddress
shippingAddress
image ='https://svgshare.com/i/CUz.svg'
description ={`Your total is $${price}`}
amount ={priceForStripe}
panelLabel='Pay now'
token={onToken}
stripeKey={publishableKey}
/>
)
}
export default StripeCheckoutButton
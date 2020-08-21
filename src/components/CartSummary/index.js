import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {Button, Segment, Divider} from 'semantic-ui-react'

export default function (props) {
  const {
    handleCheckout,
    items,
    display_price: {
      with_tax: {amount, currency, formatted},
    },
  } = props;

    const [totalPrice, settotalPrice] = useState(0)
    useEffect(() => {
      let price = 0;
      if(!!items.length) {
        items.forEach((item) => {
          price = item.price + price
        })
      }
      console.log('totalPrice', price)
      settotalPrice(price)
    }, [items])
    
  return (
  <div>
    <Divider />
    <Segment clearing size="large">
      <span>
        <strong>Sub total:</strong>
        {/* {` ${formatted}`} */}
        {` ${totalPrice}`}
      </span>
      <StripeCheckout
        name="Gatsby Store"
        amount={amount}
        currency={currency || 'GBP'}
        stripeKey={process.env.STRIPE_PUBLISHABLE_KEY || ''}
        shippingAddress={false}
        billingAddress
        zipCode
        token={handleCheckout}
        reconfigureOnUpdate={false}
        triggerEvent="onClick"
      >
        <Button color="black" floated="right">
          Check out
        </Button>
      </StripeCheckout>
    </Segment>
  </div>
  )}

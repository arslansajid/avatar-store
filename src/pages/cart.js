/* eslint-disable camelcase */
import React, {useState, useContext, useEffect} from 'react'
import SEO from '../components/SEO'
import CartItemList from '../components/CartItemList'
import CartSummary from '../components/CartSummary'
import CartContext from '../components/Context/CartContext'
import Layout from '../components/Layout'

const Moltin = require('../../lib/moltin')

const Cart = ({location}) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [completed, setCompleted] = useState(false)
  const [meta, setMeta] = useState({})
  const [cartId, setCartId] = useState({})
  const {updateCartCount, cartItems, removeFromCart} = useContext(CartContext)

  async function getCartItems() {
    const cartIdLocal = await localStorage.getItem('mcart')
    await Moltin.getCartItems(cartIdLocal).then(({data, meta}) => {
      setItems(data)
      setCartId(cartIdLocal)
      setMeta(meta)
      setLoading(false)
    })
    // setTimeout(() => setLoading(false), 200)
  }

  useEffect(() => {
    getCartItems()
  }, [])

  const handleCheckout = async data => {
    const cartId = await localStorage.getItem('mcart')
    const customerId = localStorage.getItem('mcustomer')

    const {
      id: token,
      email,
      card: {
        name,
        address_line1: line_1,
        address_city: city,
        address_country: country,
        address_state: county,
        address_zip: postcode,
      },
    } = data

    const customer = customerId || {name, email}

    const address = {
      first_name: name.split(' ')[0],
      last_name: name.split(' ')[1] || '',
      line_1,
      city,
      county: county || '',
      country,
      postcode,
    }

    try {
      const {
        data: {id},
      } = await Moltin.checkoutCart(cartId, customer, address)
      await Moltin.payForOrder(id, token, email)
      setCompleted(true)
      updateCartCount(0, cartId)
    } catch (e) {
      console.log(e)
    }
  }

  const handleRemoveFromCart = (itemId, item) => {
    console.log("###############", item)
    // Moltin.removeFromCart(itemId, cartId).then(({data, meta}) => {
    //   const total = data.reduce((a, c) => a + c.quantity, 0)
    //   updateCartCount(total, cartId)
    //   setItems(data)
    //   setMeta(meta)
    // })
    removeFromCart(item);
  }

  // let totalPrice = 0;

  // useEffect(() => {
  //   totalPrice = !!cartItems.length ? cartItems.length === 1 ? cartItems[0].price : cartItems.reduce((x, y) => x.price + y.price) : 0;
  //   console.log('totalPrice', totalPrice)
  // }, [cartItems])
  
  const rest = {completed, items, loading, cartId}

  return (
    <Layout location={location}>
      <SEO title="Cart" />
      <CartItemList
        {...rest}
        items={cartItems}
        removeFromCart={item => removeFromCart(item)}
      />
      {!loading && !completed && (
        <CartSummary items={cartItems} {...meta} handleCheckout={handleCheckout} />
      )}
    </Layout>
  )
}

export default Cart

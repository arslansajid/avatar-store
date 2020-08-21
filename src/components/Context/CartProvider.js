import React, {useState, useEffect} from 'react'
import CartContext from './CartContext'

const CartProvider = ({children}) => {
  const [cartId, setCartId] = useState(null)
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    console.log("item", item)
    // const cartCountResult = Number(cartCount) + Number(quantity)
    // localStorage.setItem(
    //   'mdata',
    //   JSON.stringify({cartId, cartCount: cartCountResult}),
    // )
    // setCartCount(cartCountResult)
    setCartItems([...cartItems, item])
  }

  const removeFromCart = (item) => {
    console.log("remove", item)
    console.log("remove", cartItems)
   let updatedArray = cartItems.filter(x => x._id === item._id);
   setCartItems([...updatedArray])
   console.log("removeFromCart", updatedArray)
  }

  const updateCartCount = (cartCount, cartId) => {
    localStorage.setItem('mdata', JSON.stringify({cartId, cartCount}))
    setCartCount(cartCount)
  }

  useEffect(() => {
    const cartId = localStorage.getItem('mcart')

    // Note: Instead of localStorage you can use moltin api & Moltin.getCartItems(cartId) instead
    const mdata = localStorage.getItem('mdata')

    if ((cartId && !mdata) || !cartId) {
      const cartId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, () =>
        // eslint-disable-next-line no-bitwise
        ((Math.random() * 16) | 0).toString(16),
      )
      localStorage.setItem('mcart', cartId)
      localStorage.setItem('mdata', JSON.stringify({cartId, cartCount: 0}))
      setCartId(cartId)
    } else {
      const data = localStorage.getItem('mdata')
      const parsedData = JSON.parse(data)
      setCartCount(parsedData.cartCount || 0)
    }
    console.log("cartItems", cartItems)
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartId,
        cartCount,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

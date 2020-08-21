/* eslint-disable camelcase */
import React from 'react'
import {Link} from 'gatsby'
import {Item, Button, Loader, Message, Responsive} from 'semantic-ui-react'

export default ({items, removeFromCart, loading, completed}) => {
  console.log("@Q!@#", items)
  if (loading) return <Loader active inline="centered" />

  if (completed)
    return (
      <Message success>
        <Message.Header>Your placed!</Message.Header>
        <p>Congratulations. Your order and payment has been accepted.</p>
      </Message>
    )

  if (items.length === 0)
    return (
      <Message warning>
        <Message.Header>Your cart is empty</Message.Header>
        <p>
          You will need to add some items to the cart before you can checkout.
        </p>
      </Message>
    )
  const mapCartItemsToItems = items =>
    items.map((item, index) => {
      const imageUrl = item.gallery[0].url || '/static/moltin-light-hex.svg'

      const DesktopItemImage = () => (
        <Item.Image
          src={imageUrl}
          alt={name}
          size="small"
          style={{background: '#f2f2f2'}}
        />
      )
      const MobileItemImage = () => (
        <Item.Image
          src={imageUrl}
          alt={name}
          size="small"
          style={{background: 'none'}}
        />
      )

      return {
        childKey: item.ID,
        header: (
          <Item.Header>
            {/* <Link to={`/product/${item.ID}/`}> */}
              {item.name}
              {/* </Link> */}
          </Item.Header>
        ),
        image: (
          <React.Fragment>
            <Responsive as={MobileItemImage} {...Responsive.onlyMobile} />
            <Responsive
              as={DesktopItemImage}
              minWidth={Responsive.onlyTablet.minWidth}
            />
          </React.Fragment>
        ),
        meta: `1 x ${item.price}`,
        description: 'Some more information goes here....',
        // extra: (
        //   <Button
        //     basic
        //     icon="remove"
        //     floated="right"
        //     onClick={() => {
        //       console.log("########### in list", item)
        //       removeFromCart(item)}
        //   }
        //   />
        // ),
      }
    })
  return <Item.Group divided items={mapCartItemsToItems(items)} />
}

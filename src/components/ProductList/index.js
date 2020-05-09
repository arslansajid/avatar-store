import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
// import {watchItems} from "../../../static/api"

const mapProductsToItems = watchItems =>
  watchItems.map((item, index) => {
    const price = item.price || null
    return {
      as: Link,
      to: `/product/${item.ID}/`,
      state: { frameId: item.ID },
      childKey: item.id,
      image: (
        <Image
        size="large"
        src={item.gallery[0].url}
        alt="I love Lamp"
      />
      ),
      header: item.name,
      meta: <Card.Meta style={{color: 'dimgray'}}>{item.price}</Card.Meta>,
    }
  })

// export default ({watchItems}) => (
//   <Card.Group items={mapProductsToItems(watchItems)} itemsPerRow={3} stackable />
// )

const ProductList = (props) => {
  return (
    <Card.Group items={mapProductsToItems(props.products)} itemsPerRow={3} stackable />
  )
}

export default ProductList;
/* eslint-disable camelcase */
import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import {watchItems} from "../../../static/api"

const mapProductsToItems = watchItems =>
  watchItems.map((item, index) => {
    const price = item.price || null
    return {
      as: Link,
      to: `/product/${item.id}/`,
      childKey: item.id,
      image: (
        // <Image>
        //   <Img sizes={{width: 125, height: 125}} alt={item.name} />
        // </Image>
        <Image
        size="large"
        src={item.image}
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

const ProductList = () => {
  return (
    <Card.Group items={mapProductsToItems(watchItems)} itemsPerRow={3} stackable />
  )
}

export default ProductList;
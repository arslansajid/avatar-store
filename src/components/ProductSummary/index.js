import React from 'react'
import Img from 'gatsby-image'

import ImageSource from "../../images/Image.jpg" 

import {Item, Label, Image} from 'semantic-ui-react'

import AddToCart from '../AddToCart'

export default ({id, name, meta, sku, mainImage}) => (
  <Item.Group>
    <Item style={{alignItems: 'center'}}>
      <Item.Image size="large" src={ImageSource} alt="I love Lamp">
        {/* <Img
          style={{width: '250px'}}
          // sizes={mainImage.childImageSharp.sizes}
          src={Image}
          alt={name}
        /> */}
      </Item.Image>
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Description>
          <p>{meta.display_price.with_tax.formatted}</p>
          <Label>{`SKU: ${sku}`}</Label>
        </Item.Description>
        <Item.Extra>
          <AddToCart productId={id} />
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

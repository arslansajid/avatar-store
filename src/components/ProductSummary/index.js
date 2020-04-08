import React from 'react'
import Img from 'gatsby-image'
import ImageGallery from 'react-image-gallery';

import ImageSource from "../../images/Image.jpg" 

import {Item, Label, Image} from 'semantic-ui-react'

import AddToCart from '../AddToCart'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default ({id, name, meta, sku, mainImage}) => (
  <Item.Group>
    <Item style={{alignItems: 'center'}}>
      <Item.Image size="huge" src={ImageSource} alt="I love Lamp">
        {/* <Img
          style={{width: '250px'}}
          // sizes={mainImage.childImageSharp.sizes}
          src={Image}
          alt={name}
        /> */}
        <div className="gallery-container">
        <ImageGallery
          items={images}
          thumbnailPosition={'left'}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </div>
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

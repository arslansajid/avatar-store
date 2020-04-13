import React, {useEffect, useState} from 'react'
import Img from 'gatsby-image';
import ImageGallery from 'react-image-gallery';

import ImageSource from "../../images/Image.jpg" 

import {Item, Label, Image} from 'semantic-ui-react'

import AddToCart from '../AddToCart'
import isBrowser from "../../utils/isBrowser";

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

const ProductSummary = ({id, name, meta, sku, mainImage}) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if(isBrowser()) {
      setWidth(window.innerWidth);
      }
  }, [width])

  return (
    <div className="container-fluid p-0">
      <div className="row my-3">
        <div className="col-lg-8 p-0">
          <div className="gallery-container">
            <ImageGallery
              items={images}
              thumbnailPosition={!!width && width < 768 ? 'bottom' : 'left'}
              // thumbnailPosition={'left'}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
        </div>
        <div className="col-lg-4">
        <Item.Content>
          <Item.Header className="my-3">{name}</Item.Header>
            <Item.Description>
              <p>{meta.display_price.with_tax.formatted}</p>
              <Label className="my-2">{`SKU: ${sku}`}</Label>
            </Item.Description>
            <Item.Extra>
              <AddToCart productId={id} />
            </Item.Extra>
          </Item.Content>
        </div>
      </div>
  </div>
  )
}

export default ProductSummary;
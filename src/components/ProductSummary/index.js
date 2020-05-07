import React, {useEffect, useState} from 'react'
import Img from 'gatsby-image';
import ImageGallery from 'react-image-gallery';
import {Item, Label, Image, Button} from 'semantic-ui-react'
import {Link} from 'gatsby';
import AddToCart from '../AddToCart'
import isBrowser from "../../utils/isBrowser";
import './index.css';

import Loadable from "@loadable/component";
const Touch = Loadable(() => import("./touch"));

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


const ProductSummary = (props) => {
  const [width, setWidth] = useState(0);
  const [positionArray, setPositionArray] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    console.log("STATE $$$$$$$$$$$$", props)
    if(isBrowser()) {
      setWidth(window.innerWidth);
      }
  }, [width, positionArray, setSelected])

  const onDragStart = (e) => {
    // e.preventDefault();
    setSelected(e.target.id);
  }

  const onDragOver = (e) => {
    e.preventDefault();
    // console.log(e.target.id)
  }

  return (
    <div className="container-fluid p-0">
      <h3 className="mt-3 mb-5">Select Frame:</h3>
      <div className="row my-3">
        <div className="col-lg-8 p-0">
          <div className="gallery-container">
            <ImageGallery
              items={images}
              thumbnailPosition={!!width && width < 768 ? 'bottom' : 'left'}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
        </div>
        <div className="col-lg-4">
        <Item.Content>
          <Item.Header className="my-3">{props.product.name}</Item.Header>
            <Item.Description>
              <p>{props.product.price} $</p>
              <Label className="my-2">{`SKU: ${props.product.name}`}</Label>
            </Item.Description>
            <Item.Extra>
              <AddToCart productId={props.product.ID} />
              <Link to="/create-avatar">
                <Button className="ui red color mt-3">Create Avatar</Button>
              </Link>
            </Item.Extra>
          </Item.Content>
        </div>
      </div>
  </div>
  )
}

export default ProductSummary;
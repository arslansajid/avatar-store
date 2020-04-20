import React, {useEffect, useState} from 'react'
import Img from 'gatsby-image';
import ImageGallery from 'react-image-gallery';

import {Item, Label, Image} from 'semantic-ui-react'

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

const assets = [
  {
    image: 'pants.svg'
  },
  {
    image: 'body.svg'
  },
  {
    image: 'body2.svg'
  },
  {
    image: 'shirt.svg'
  },
  {
    image: 'shirt2.svg'
  },
  {
    image: 'bg1.svg'
  },
  {
    image: 'bg2.svg'
  },
  {
    image: 'heart.png'
  }
]

const ProductSummary = ({id, name, meta, sku, mainImage}) => {
  const [width, setWidth] = useState(0);
  const [positionArray, setPositionArray] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    console.log("STATE $$$$$$$$$$$$", positionArray, selected)
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

  // const getRelativeCoordinates = (event, referenceElement) => {
  //   referenceElement = document.getElementById(referenceElement);

  //   const position = {
  //     x: event.pageX,
  //     y: event.pageY
  //   };
  
  //   const offset = {
  //     left: referenceElement.offsetLeft,
  //     top: referenceElement.offsetTop
  //   };
  
  //   let reference = referenceElement.offsetParent;
  
  //   while(reference){
  //     offset.left += reference.offsetLeft;
  //     offset.top += reference.offsetTop;
  //     reference = reference.offsetParent;
  //   }

  //   positionArray[selected] = { 
  //     x: position.x - offset.left,
  //     y: position.y - offset.top,
  //   };

  //   setPositionArray([...positionArray])

  //   console.log("############", positionArray)

  // }

  return (
    <div className="container-fluid p-0">
      <div className="row my-3">
        <div className="col-lg-8 p-0">
          <div className="gallery-container" id="gallery-container"
            // onDragOver={(e) => onDragOver(e)}
            // onDrop={(e) => getRelativeCoordinates(e, "gallery-container")}
          >
            <ImageGallery
              items={images}
              thumbnailPosition={!!width && width < 768 ? 'bottom' : 'left'}
              // thumbnailPosition={'left'}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
          <div className="avatar-container">
            {/* <p id="haha" onDragStart={(e) => handleDrag(e)} draggable>HAHHAHAHAH</p> */}
            {
              assets.map((item, index) => {
                return (
                  <div key={index} className='asset-container'>
                    <Touch>
                    <img
                      className='asset-image'
                      id={index}
                      style={!!positionArray && positionArray[index] ? {position: 'absolute', left: positionArray[index].x, top: positionArray[index].y}: {}}
                      onDragStart={(e) => onDragStart(e)}
                      draggable
                      src={require(`../../images/${item.image}`)}
                    />
                    </Touch>
                  </div>
                )
              })
            }
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
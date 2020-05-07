/* eslint-disable */
import React, { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import {Loader} from "semantic-ui-react";
import ProductSummary from '../components/ProductSummary'
import ProductAttributes from '../components/ProductAttributes'
import Layout from '../components/Layout'
import { fetchFrameById } from '../Api'

import '../styles/filters.css';
import '../styles/global.css';
import '../styles/slider.css';
import '../styles/productPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-image-gallery/styles/css/image-gallery.css";

const ProductPageTemplate = (props) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('ProductPageTemplate PROPS:', props)
    const frameId = props.location.state.frameId;
    setLoading(true);
    fetchFrameById(frameId)
    .then((res) => {
      setProduct(res.data[0]);
      setLoading(false);
    })
    .catch((err) => {
      console.log("ERROR FETCHING FRAME", err);
      setLoading(false);
    })
  }, [])

  return (
    <Layout location={props.location}>
      <SEO /* title={slug} */ />
      {
        loading
        ?
        <Loader active inline="centered" size="big" />
        :
        <>
          <ProductSummary product={product} />
          {/* <ProductAttributes {...product} /> */}
        </>
      }
    </Layout>
  )
}

export default ProductPageTemplate;
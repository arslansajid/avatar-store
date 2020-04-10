import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import get from 'lodash/get'
import { Image, Header, Button } from 'semantic-ui-react'
import ProductList from '../components/ProductList'
import FilterSidebar from '../components/FilterSidebar/DesktopFilterSidebar'
import MobileFilterTopbar from '../components/FilterSidebar/MobileFilterTopbar'
import SEO from '../components/SEO'
import logo from '../images/ill-short-dark.svg'
import heart from '../images/heart.png'
import Layout from '../components/Layout'

import '../styles/landing.css';
import '../styles/filters.css';
import '../styles/global.css';
import '../styles/slider.css';
import '../styles/productPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-image-gallery/styles/css/image-gallery.css";

const StoreIndex = ({ location }) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMoltinProduct {
        edges {
          node {
            id
            name
            description
            mainImageHref
            meta {
              display_price {
                with_tax {
                  amount
                  currency
                  formatted
                }
              }
            }
            mainImage {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  `)

  const siteTitle = get(data, 'site.siteMetadata.title')
  const products = get(data, 'allMoltinProduct.edges')
  const filterProductsWithoutImages = products.filter(v => v.node.mainImageHref)
  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}
      >
        <Header.Content
          style={{
            width: '60%',
            margin: '0 auto',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: '10vw'
          }}
        >I
          <Image style={{width: '15vw', height: '12vw'}} src={heart} alt="logo" />
          AVATAR
          {/* <p>I LOVE AVATAR</p> */}
        </Header.Content>
      </Header>
      <div className="ui grid">
        <MobileFilterTopbar />
        <div className="four wide tablet four wide computer only column">
          <FilterSidebar />
        </div>
        <div className="twelve wide tablet twelve wide computer sixteen wide mobile column">
          <ProductList products={filterProductsWithoutImages} />
        </div>
      </div>
    </Layout>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  }
}

export default StoreIndex

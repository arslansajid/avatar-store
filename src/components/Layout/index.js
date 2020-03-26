import React from 'react'
import Headroom from 'react-headroom'
import {Container} from 'semantic-ui-react'
import Footer from '../Footer'
import Header from '../Header'
import 'semantic-ui-css/semantic.min.css'

const Layout = ({location, children}) => (
  <>
    <Headroom
      upTolerance={10}
      downTolerance={10}
      style={{zIndex: '20', height: '6.5em'}}
    >
      <Header location={location} />
    </Headroom>
    <Container style={styles.container}>{children}</Container>
    <Footer />
  </>
)

const styles = {
  container: {
    // paddingLeft: '2vw',
    // paddingRight: '2vw',
  }
}
export default Layout;
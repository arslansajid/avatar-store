import React from 'react'
import Headroom from 'react-headroom'
import { Container } from 'semantic-ui-react'
import Footer from '../Footer'
import Header from '../Header'
import 'semantic-ui-css/semantic.min.css'
import axios from "axios";
import Cookie from 'js-cookie';

const token = Cookie.get('family_portrait_access_token');
if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

  const Layout = ({ location, children }) => {
    return (
      <>
        <Headroom
          upTolerance={10}
          downTolerance={10}
          style={{ zIndex: '20', height: '6.5em' }}
        >
          <Header location={location} />
        </Headroom>
        <Container style={styles.container}>{children}</Container>
        <Footer />
      </>
    )
  }

  const styles = {
    container: {
    }
  }
  export default Layout;

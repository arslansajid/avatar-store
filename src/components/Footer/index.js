import React from 'react'
import { Link } from 'gatsby'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

const twitterLink = (
  <a href="https://twitter.com/parmsang" alt="twitter link">
    Twitter
  </a>
)
const facebookLink = (
  <a href="https://facebook.com/" alt="facebook link">
    Facebook
  </a>
)
const emailLink = (
  <a href="mailto:john@doe.com" alt="email link">
    Email
  </a>
)

const Footer = () => (
  <Segment
    vertical
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="About" />
            <List>
              <List.Item as={Link} to="/privacy/">
                Privacy
              </List.Item>
              <List.Item as={Link} to="/terms/">
                Terms
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Services" />
            <List>
              <List.Item as={Link} to="/">
                Our Products
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Footer Header</Header>
            <p>
              Lorem ipsizzle dolizzle sit amizzle, fo shizzle my nizzle adipiscing
              elizzle. Pizzle mah nizzle velizzle, owned volutpizzle, mammasay mammasa
              mamma oo sa quizzle, my shizz uhuh ... yih!, shit. Pellentesque nizzle for
              sure. erizzle. Cool shiznit dolizzle dapibizzle turpis tempizzle tempor.
    </p>
            <List horizontal style={{ display: 'flex' }}>
              <List.Item
                icon="twitter"
                style={{ display: 'flex' }}
                content={twitterLink}
              />
              <List.Item
                icon="facebook"
                style={{ display: 'flex' }}
                content={facebookLink}
              />
              <List.Item
                icon="mail"
                style={{ display: 'flex' }}
                content={emailLink}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer

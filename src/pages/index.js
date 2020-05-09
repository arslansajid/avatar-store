import React, { useEffect } from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from 'gatsby'
import { Icon, Button } from 'semantic-ui-react'
import Parallax from '../components/parallax';
import { getUserProfile } from '../Api';

import '../styles/landing.css';
import '../styles/filters.css';
import '../styles/global.css';
import '../styles/slider.css';
import '../styles/productPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-image-gallery/styles/css/image-gallery.css";

const Home = ({ location }) => {
  // useEffect(() => {
  //   getUserProfile()
  //   .then((res) => {
  //     console.log("USER DATA !", res.data)
  //   })
  //   .catch((error) => {
  //     console.log("ERROR FETCHING USER DATA !", error.data.message)
  //   })
  // }, [])

  return (
    <>
      <Header location={location} />
      <SEO title="Home" />
      <Parallax />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">How it works!</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </h5>
                <br />
                <Button
                  className="ui red button"
                  onClick={e => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="description">
                    <h4 className="info-title">Beautiful Gallery</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="ui red button"  >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button className="ui red button"  >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="ui red button"  >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="ui red button"  >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Let's talk about us</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("../images/heart.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      

                      onClick={e => e.preventDefault()}
                    >
                      <Icon name={"facebook"} />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      

                      onClick={e => e.preventDefault()}
                    >
                      <Icon name={"twitter"} />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      

                      onClick={e => e.preventDefault()}
                    >
                      <Icon name={"google"} />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("../images/heart.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      

                      onClick={e => e.preventDefault()}
                    >
                      <Icon name={"facebook"} />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      

                      onClick={e => e.preventDefault()}
                    >
                      <Icon name={"twitter"} />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      

                      onClick={e => e.preventDefault()}
                    >
                      {/* <i className="fa fa-linkedin" /> */}
                      <Icon name={"google"} />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("../images/heart.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      

                      onClick={e => e.preventDefault()}
                    >
                      <Icon name={"facebook"} />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      

                      onClick={e => e.preventDefault()}
                    >
                      <Icon name={"twitter"} />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      

                      onClick={e => e.preventDefault()}
                    >
                      <Icon name={"google"} />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <Icon name={"user"} />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <Icon name={"mail"} />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="ui red button mt-3">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home

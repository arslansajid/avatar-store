import React, { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import isBrowser from "../utils/isBrowser";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'gatsby'
import { Modal, ModalHeader, ModalBody, ModalFooter, Container, Row } from 'reactstrap';
import { Card, Image, Button, Divider, Input, Dropdown, Icon } from "semantic-ui-react";
import { bodylist, hairlist, pantslist, topslist, shoeslist } from "../svg-template/svg_templatelist";
import { bodylist_man, hairlist_man, pantslist_man, shoeslist_man, shirtslist_man } from "../svg-template/svg_url_templatelist_man";

import '../styles/avatar.css';

const friendOptions = [
  {
    key: '0',
    text: 'Body',
    value: 'Body',
  },
  {
    key: '2',
    text: 'Hair',
    value: 'Hair',
  },
  {
    key: '4',
    text: 'Top',
    value: 'Top',
  },
  {
    key: '5',
    text: 'Bottom',
    value: 'Bottom',
  },
  {
    key: '6',
    text: 'Shoes',
    value: 'Shoes',
  },
];

const CreateAvatar = ({ location }) => {
  const [width, setWidth] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [showNameModal, setShowNameModal] = useState(false);
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [name, setName] = useState(null);
  const [editEntity, setEditEntity] = useState('Body');
  const [selectedBody, setSelectedBody] = useState(null);
  const [selectedHair, setSelectedHair] = useState(null);
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);
  const [selectedShoes, setSelectedShoes] = useState(null);

  useEffect(() => {
    console.log("selectedBody", selectedBody);
    if(isBrowser()) {
      setWidth(window.innerWidth);
      }
  }, [selectedBody])

  const resetSelection = () => {
    setGender(null);
    setAge(null);
    setName(null);
    setEditEntity('Body')
    setSelectedBody(null);
    setSelectedHair(null);
    setSelectedTop(null);
    setSelectedBottom(null);
    setSelectedShoes(null);
  }
  
  const createAnotherAvatar = () => {
    setShowModal(true);
    resetSelection();
  }

  const renderFemaleSelectionContainer = (editEntity) => {
    if (editEntity === 'Body') {
      return (
        <div className="row">
          {bodylist.map((item, index) => {
            return (
              <div onClick={() => setSelectedBody(item)} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
                <div className={`selection-card ${item === selectedBody ? "selected" : ""}`}>
                  <img src={item} />
                </div>
              </div>
            )
          })}
        </div>
      )
    } else if (editEntity === 'Hair') {
      return (
        <div className="row">
          {hairlist.map((item, index) => {
            return (
              <div onClick={() => setSelectedHair(item)} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
                <div className={`selection-card ${item === selectedHair ? "selected" : ""}`}>
                  <img src={item} />
                </div>
              </div>
            )
          })}
        </div>
      )
    } else if (editEntity === 'Top') {
      return (
        <div className="row">
          {topslist.map((item, index) => {
            return (
              <div onClick={() => setSelectedTop(item)} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
                <div className={`selection-card ${item === selectedTop ? "selected" : ""}`}>
                  <img src={item} />
                </div>
              </div>
            )
          })}
        </div>
      )
    } else if (editEntity === 'Bottom') {
      return (
        <div className="row">
          {pantslist.map((item, index) => {
            return (
              <div onClick={() => setSelectedBottom(item)} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
                <div className={`selection-card ${item === selectedBottom ? "selected" : ""}`}>
                  <img src={item} />
                </div>
              </div>
            )
          })}
        </div>
      )
    } else if (editEntity === 'Shoes') {
      return (
        <div className="row">
          {shoeslist.map((item, index) => {
            return (
              <div onClick={() => setSelectedShoes(item)} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
                <div className={`selection-card ${item === selectedShoes ? "selected" : ""}`}>
                  <img src={item} />
                </div>
              </div>
            )
          })}
        </div>
      )
    }
  }

  const renderMaleSelectionContainer = (editEntity) => {
    if (editEntity === 'Body') {
      return (
        <div className="row">
          {bodylist_man.map((item, index) => {
            return (
              <div onClick={() => setSelectedBody(item)} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
                <div className={`selection-card ${item === selectedBody ? "selected" : ""}`}>
                  <img src={item} />
                </div>
              </div>
            )
          })}
        </div>
      )
    } else if (editEntity === 'Hair') {
      return (
        <div className="row">
          {hairlist_man.map((item, index) => {
            return (
              <div onClick={() => setSelectedHair(item)} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
                <div className={`selection-card ${item === selectedHair ? "selected" : ""}`}>
                  <img src={item} />
                </div>
              </div>
            )
          })}
        </div>
      )
    } else if (editEntity === 'Top') {
      return (
        <div className="row">
          {shirtslist_man.map((item, index) => {
            return (
              <div onClick={() => setSelectedTop(item)} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
                <div className={`selection-card ${item === selectedTop ? "selected" : ""}`}>
                  <img src={item} />
                </div>
              </div>
            )
          })}
        </div>
      )
    } else if (editEntity === 'Bottom') {
      return (
        <div className="row">
          {pantslist_man.map((item, index) => {
            return (
              <div onClick={() => setSelectedBottom(item)} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
                <div className={`selection-card ${item === selectedBottom ? "selected" : ""}`}>
                  <img src={item} />
                </div>
              </div>
            )
          })}
        </div>
      )
    } else if (editEntity === 'Shoes') {
      return (
        <div className="row">
          {shoeslist_man.map((item, index) => {
            return (
              <div onClick={() => setSelectedShoes(item)} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
                <div className={`selection-card ${item === selectedShoes ? "selected" : ""}`}>
                  <img src={item} />
                </div>
              </div>
            )
          })}
        </div>
      )
    }
  }

  const bodyImageSource = !!selectedBody ? selectedBody: gender === "male" ? require('../images/body.svg') : require('../images/body2.svg');

  return (
    <>
      <Header location={location} />
      <SEO title="Create Avatar" />
      {!showModal && (
        <Container className="my-2" fluid>
          <Row>
            <div className="col-6 text-center">
              <h3>{name}</h3>
              <div
                onClick={() => setShowNameModal(true)}
                className="name-link">
                Change Name
              </div>
              <div className="avatar" style={width <= 768 ? {minHeight: '400px'} : {minHeight: '700px'} }>
              {
                selectedHair && (
                  <img className="hair-image" src={selectedHair} alt="avatar-hair" />
                )
              }
              {
                selectedTop && (
                  <img className="top-image" src={selectedTop} alt="avatar-top" />
                )
              }
              <img className="body-image" src={bodyImageSource} alt="avatar-body" />
              {
                selectedBottom && (
                  <img className="bottom-image" src={selectedBottom} alt="avatar-bottom" />
                )
              }
              {
                selectedShoes && (
                  <img className="shoes-image" src={selectedShoes} alt="avatar-shoes" />
              )}
              </div>
            </div>
            <div className="col-6">
              <Dropdown
                fluid
                selection
                options={friendOptions}
                value={editEntity}
                onChange={(event, data) => setEditEntity(data.value)}
              />
              {gender === "male" ? renderMaleSelectionContainer(editEntity) : renderFemaleSelectionContainer(editEntity)}
            </div>
          </Row>

          <Divider />

          <div className="row justify-content-center">
            <Button onClick={() => createAnotherAvatar()} color='red'>
              <Icon name='heart' />
              Create Another Avatar
          </Button>
            <Button color='green'>
              <Icon name='save' />
              Print Avatar
          </Button>
          </div>

        </Container>
      )}
      {/* <p>Gender: {gender}</p>
        <p>Age: {age}</p>
        <p>Name: {name}</p> */}
      {
        showModal && (
          <Modal
            size={"lg"}
            fade={false}
            backdrop={"static"}
            isOpen={showModal} toggle={() => setShowModal(!showModal)}>
            <ModalHeader>Create Avatar</ModalHeader>
            <ModalBody>
              <div className="d-flex align-items-center">
                <h4 className="text-center mr-4 mb-0">Name:</h4>
                <Input onChange={(e) => setName(e.target.value)} placeholder='Enter Name...' size="large" />
              </div>
              <Divider />
              <div className="d-flex justify-content-around">
                <Card className={gender === "male" ? "selected mb-2" : "mb-2"} onClick={() => setGender('male')}>
                  <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                  <Card.Content>
                    <Card.Header>Male</Card.Header>
                  </Card.Content>
                </Card>
                <Card className={gender === "female" ? "selected mb-2 mt-0" : "mb-2 mt-0"} onClick={() => setGender('female')}>
                  <Image src='https://react.semantic-ui.com/images/avatar/large/kristy.png' />
                  <Card.Content>
                    <Card.Header>Female</Card.Header>
                  </Card.Content>
                </Card>
              </div>
              <Divider />
              <div className="d-flex align-items-center">
                <h4 className="text-center mr-4 mb-0">Select Age:</h4>
                <div className="d-flex justify-content-around">
                  <Button onClick={() => setAge('adult')} size="large" className="ui red color mt-3 mr-3">Adult</Button>
                  <Button onClick={() => setAge('child')} size="large" className="ui blue color mt-3">Child</Button>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setShowModal(false)} disabled={!(!!age && !!gender && !!name)} size="large" className="ui green color mt-3">Next</Button>
            </ModalFooter>
          </Modal>
        )
      }
      {
        showNameModal && (
          <Modal
            centered
            backdrop={"static"}
            isOpen={showNameModal} toggle={() => setShowNameModal(!showNameModal)}>
            <ModalHeader toggle={() => setShowNameModal(!showNameModal)}>Edit Name</ModalHeader>
            <ModalBody>
              <div className="d-flex align-items-center">
                <h4 className="text-center mr-4 mb-0">Name:</h4>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name...' size="large" />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setShowNameModal(false)} size="large" className="ui green color mt-3">Save</Button>
            </ModalFooter>
          </Modal>
        )
      }
      <Footer />
    </>
  )
}

export default CreateAvatar;

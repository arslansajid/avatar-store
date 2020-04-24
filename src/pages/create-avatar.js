import React, { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'gatsby'
import { Modal, ModalHeader, ModalBody, ModalFooter, Container, Row } from 'reactstrap';
import { Card, Image, Button, Divider, Input, Dropdown, Icon } from "semantic-ui-react";
import Loadable from "@loadable/component";

const EditAvatar = Loadable(() => import("../components/EditAvatar"));
import '../styles/avatar.css';

const CreateAvatar = ({ location }) => {
  const [showModal, setShowModal] = useState(true);
  const [showNameModal, setShowNameModal] = useState(false);
  const [gender, setGender] = useState(null);
  const [name, setName] = useState(null);
  const [avatarCount, setAvatarCount] = useState([])

  const saveForm = () => {
    setShowModal(false);
    const newAvatar = {
      name,
      gender,
    }
    setAvatarCount([...avatarCount, newAvatar]);
  }
  
  const createAnotherAvatar = () => {
    setShowModal(true);
  }

  const deleteAvatar = (index) => {
    const duplicateArray = avatarCount.slice();
    duplicateArray.splice(index, 1);
    setAvatarCount([...duplicateArray])
  }

  return (
    <>
      <Header location={location} />
      <SEO title="Create Avatar" />
      {!showModal && (
        <Container className="my-2" fluid>
          <Row className="justify-content-center">
            {avatarCount.map((avatar, index) => {
              return (
                <div key={index} className="col-4 text-center">
                <EditAvatar
                  index={index}
                  name={avatar.name}
                  gender={avatar.gender}
                  setShowNameModal={setShowNameModal}
                  deleteAvatar={deleteAvatar}
                />
                </div>
              )
              })
            }
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
              {/* <Divider />
              <div className="d-flex align-items-center">
                <h4 className="text-center mr-4 mb-0">Select Age:</h4>
                <div className="d-flex justify-content-around">
                  <Button onClick={() => setAge('adult')} size="large" className="ui red color mt-3 mr-3">Adult</Button>
                  <Button onClick={() => setAge('child')} size="large" className="ui blue color mt-3">Child</Button>
                </div>
              </div> */}
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => saveForm()} disabled={!(!!gender && !!name)} size="large" className="ui green color mt-3">Next</Button>
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

import React, { useEffect, useState, useRef } from 'react'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'gatsby'
import { Modal, ModalHeader, ModalBody, ModalFooter, Container, Row } from 'reactstrap';
import { Card, Image, Button, Divider, Input, Dropdown, Icon } from "semantic-ui-react";
import Loadable from "@loadable/component";
import ReactToPrint from 'react-to-print';
import { fetchAssetByGender } from "../Api/index"

const EditAvatar = Loadable(() => import("../components/EditAvatar"));
import '../styles/avatar.css';

import { bodylist, hairlist, pantslist, topslist, shoeslist } from "../svg-template/svg_templatelist";
import { bodylist_man, hairlist_man, pantslist_man, shoeslist_man, shirtslist_man } from "../svg-template/svg_url_templatelist_man";

const svgOptions = [
  {
    key: '0',
    text: 'Body',
    value: 'body',
  },
  {
    key: '2',
    text: 'Hair',
    value: 'hair',
  },
  {
    key: '4',
    text: 'Top',
    value: 'top',
  },
  {
    key: '5',
    text: 'Bottom',
    value: 'bottom',
  },
  {
    key: '6',
    text: 'Shoes',
    value: 'shoes',
  },
];

const CreateAvatar = ({ location }) => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showNameModal, setShowNameModal] = useState(false);
  const [printAvatarModal, setPrintAvatarModal] = useState(false);
  const [gender, setGender] = useState(null);
  const [name, setName] = useState(null);
  const [avatarData, setAvatarData] = useState([]);
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);

  //avatar particulars
  const [editEntity, setEditEntity] = useState('body');
  const [selectedBody, setSelectedBody] = useState(null);
  const [selectedHair, setSelectedHair] = useState(null);
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);
  const [selectedShoes, setSelectedShoes] = useState(null);
  const [assets, setAssets] = useState(null);
  const componentRef = useRef();

  useEffect(() => {
    console.log("avatarData", avatarData);
    console.log("selectedAvatarIndex", selectedAvatarIndex);
  }, [avatarData, selectedAvatarIndex])

  const saveForm = () => {
    setShowModal(false);
    const newAvatar = {
      name,
      gender,
      key: `${selectedAvatarIndex}_${name}_${gender}`,
      text: name,
      value: name,
    }
    setAvatarData([...avatarData, newAvatar]);
    if(avatarData.length >= 1) {
      setSelectedAvatarIndex(selectedAvatarIndex + 1)
      setEditEntity("body")
    }
    fetchAsset(gender, editEntity);
  }

  const fetchAsset = (gender, type) => {
    setAssets([]);
    fetchAssetByGender(gender, type)
    .then((res) => {
      console.log("ASSETS RESPONSE!", res);
      setAssets(res.data.items);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log("ERROR FETCHING ASSETS!", err);
    })
  }

  const handleEditEntityDropdown = (value) => {
    setEditEntity(value)
    const EDIT_ENTITY = String(value).toLowerCase();
    fetchAsset(gender, EDIT_ENTITY);
  }
  
  const createAnotherAvatar = () => {
    setShowModal(true);
  }

  const deleteAvatar = () => {
    if(confirm("Are you sure you want to delete this avatar?")) {
      const duplicateArray = avatarData.slice();
      duplicateArray.splice(selectedAvatarIndex, 1);
      setAvatarData([...duplicateArray])
      setSelectedAvatarIndex(selectedAvatarIndex === 0 ? 0 : selectedAvatarIndex - 1);
    }
  }

  const updateAvatar = (index, entity, value) => {
    avatarData[index] = Object.assign(avatarData[index], {[entity]: value})
    setAvatarData([...avatarData]);
  }

  const resetSelection = () => {
    // setGender(null);
    // setAge(null);
    // setName(null);
    setEditEntity('body')
    setSelectedBody(null);
    setSelectedHair(null);
    setSelectedTop(null);
    setSelectedBottom(null);
    setSelectedShoes(null);

    updateAvatar(selectedAvatarIndex, "body", null)
    updateAvatar(selectedAvatarIndex, "hair", null)
    updateAvatar(selectedAvatarIndex, "top", null)
    updateAvatar(selectedAvatarIndex, "bottom", null)
    updateAvatar(selectedAvatarIndex, "shoes", null)
  }

  const handleNameDropdown = (selectedName) => {
    console.log("selectedName", selectedName);
    var itemIndex = avatarData.findIndex(item => item.value === selectedName);
    console.log("itemIndex", itemIndex)
    setSelectedAvatarIndex(itemIndex);
    setEditEntity('body');
    fetchAsset(avatarData[itemIndex].gender, 'body');
  }

  // const renderFemaleSelectionContainer = (editEntity) => {
  //   if (editEntity === 'Body') {
  //     return (
  //       <div className="row">
  //         {bodylist.map((item, index) => {
  //           return (
  //             <div onClick={() => {updateAvatar(selectedAvatarIndex, "body", item); setSelectedBody(item)}} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
  //               <div className={`selection-card ${item === avatarData[selectedAvatarIndex].body ? "selected" : ""}`}>
  //                 <img src={item} />
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //   } else if (editEntity === 'Hair') {
  //     return (
  //       <div className="row">
  //         {hairlist.map((item, index) => {
  //           return (
  //             <div onClick={() => {updateAvatar(selectedAvatarIndex, "hair", item); setSelectedHair(item)}} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
  //               <div className={`selection-card ${item === selectedHair ? "selected" : ""}`}>
  //                 <img src={item} />
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //   } else if (editEntity === 'Top') {
  //     return (
  //       <div className="row">
  //         {topslist.map((item, index) => {
  //           return (
  //             <div onClick={() => {updateAvatar(selectedAvatarIndex, "top", item); setSelectedTop(item)}} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
  //               <div className={`selection-card ${item === selectedTop ? "selected" : ""}`}>
  //                 <img src={item} />
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //   } else if (editEntity === 'Bottom') {
  //     return (
  //       <div className="row">
  //         {pantslist.map((item, index) => {
  //           return (
  //             <div onClick={() => {updateAvatar(selectedAvatarIndex, "bottom", item); setSelectedBottom(item)}} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
  //               <div className={`selection-card ${item === selectedBottom ? "selected" : ""}`}>
  //                 <img src={item} />
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //   } else if (editEntity === 'Shoes') {
  //     return (
  //       <div className="row">
  //         {shoeslist.map((item, index) => {
  //           return (
  //             <div onClick={() => {updateAvatar(selectedAvatarIndex, "shoes", item); setSelectedShoes(item)}} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
  //               <div className={`selection-card ${item === selectedShoes ? "selected" : ""}`}>
  //                 <img src={item} />
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //   }
  // }

  // const renderMaleSelectionContainer = (editEntity) => {
  //   if (editEntity === 'Body') {
  //     return (
  //       <div className="row">
  //         {bodylist_man.map((item, index) => {
  //           return (
  //             <div onClick={() => {updateAvatar(selectedAvatarIndex, "body", item); setSelectedBody(item)}} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
  //               <div className={`selection-card ${item === avatarData[selectedAvatarIndex].body ? "selected" : ""}`}>
  //                 <img src={item} />
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //   } else if (editEntity === 'Hair') {
  //     return (
  //       <div className="row">
  //         {hairlist_man.map((item, index) => {
  //           return (
  //             <div onClick={() => {updateAvatar(selectedAvatarIndex, "hair", item); setSelectedHair(item)}} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
  //               <div className={`selection-card ${item === selectedHair ? "selected" : ""}`}>
  //                 <img src={item} />
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //   } else if (editEntity === 'Top') {
  //     return (
  //       <div className="row">
  //         {shirtslist_man.map((item, index) => {
  //           return (
  //             <div onClick={() => {updateAvatar(selectedAvatarIndex, "top", item); setSelectedTop(item)}} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
  //               <div className={`selection-card ${item === selectedTop ? "selected" : ""}`}>
  //                 <img src={item} />
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //   } else if (editEntity === 'Bottom') {
  //     return (
  //       <div className="row">
  //         {pantslist_man.map((item, index) => {
  //           return (
  //             <div onClick={() => {updateAvatar(selectedAvatarIndex, "bottom", item); setSelectedBottom(item)}} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
  //               <div className={`selection-card ${item === selectedBottom ? "selected" : ""}`}>
  //                 <img src={item} />
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //   } else if (editEntity === 'Shoes') {
  //     return (
  //       <div className="row">
  //         {shoeslist_man.map((item, index) => {
  //           return (
  //             <div onClick={() => {updateAvatar(selectedAvatarIndex, "shoes", item); setSelectedShoes(item)}} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
  //               <div className={`selection-card ${item === selectedShoes ? "selected" : ""}`}>
  //                 <img src={item} />
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //   }
  // }

  return (
    <>
      <Header location={location} />
      <SEO title="Create Avatar" />
      {!!avatarData.length ? (
        <Container className="my-2" fluid>
          <Row className="justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 text-center">
              <EditAvatar
                name={avatarData[selectedAvatarIndex].name}
                gender={avatarData[selectedAvatarIndex].gender}
                editEntity={editEntity}
                setShowNameModal={setShowNameModal}
                deleteAvatar={deleteAvatar}
                updateAvatar={updateAvatar}
                assets={assets}
                body={avatarData[selectedAvatarIndex].body}
                hair={avatarData[selectedAvatarIndex].hair}
                top={avatarData[selectedAvatarIndex].top}
                bottom={avatarData[selectedAvatarIndex].bottom}
                shoes={avatarData[selectedAvatarIndex].shoes}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 text-center">
              <div className="row control-row">
                <div className="col-6 col-lg-6 col-md-6">
                <Dropdown
                  fluid
                  selection
                  className="mt-2"
                  options={avatarData}
                  value={avatarData[selectedAvatarIndex].name}
                  onChange={(event, data) => handleNameDropdown(data.value)}
                />
                </div>
                {/* for mobile only */}
                <div className="mobile-controls col-6 col-lg-6 col-md-6">
                  <button onClick={() => resetSelection()} className="ui icon button blue mt-2">
                    <Icon name='undo' />
                  </button>
                  <button onClick={() => createAnotherAvatar()} className="ui icon button green mt-2">
                    <Icon name='add' />
                  </button>
                  <button onClick={() => deleteAvatar()} className="ui icon button red mt-2">
                    <Icon name='delete' />
                  </button>
                </div>
                {/* for desktop only */}
                <div className="col-6 col-lg-6 col-md-6 d-none d-lg-block d-md-block">
                  <Button className="mt-2" size="medium" onClick={() => resetSelection()} color='blue'>
                    <Icon name='undo' />
                    Reset
                  </Button>
                  <Button className="mt-2" size="medium" onClick={() => createAnotherAvatar()} color='green'>
                    <Icon name='add' />
                    Add
                  </Button>
                  <Button className="mt-2" disabled={avatarData.length === 1} size="medium" onClick={() => deleteAvatar()} color='red'>
                    <Icon name='delete' />
                    Delete
                  </Button>
                </div>
              </div>
              <Dropdown
                fluid
                selection
                className="mt-3"
                options={svgOptions}
                value={editEntity}
                onChange={(event, data) => handleEditEntityDropdown(data.value)}
              />
              <div className="svgs-container">
                {/* {avatarData[selectedAvatarIndex].gender === "male" ? renderMaleSelectionContainer(editEntity) : renderFemaleSelectionContainer(editEntity)} */}
                <div className="row">
                  {!!assets && assets.length > 0 ?
                    assets.map((item, index) => {
                      let IMAGE_URL = item.gallery[0].url;
                      return (
                        <div onClick={() => {updateAvatar(selectedAvatarIndex, String(editEntity).toLowerCase(), IMAGE_URL); setSelectedBody(IMAGE_URL)}} key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 selection-card-container">
                          <div className={`selection-card ${item === avatarData[selectedAvatarIndex].body ? "selected" : ""}`}>
                            <img src={IMAGE_URL} />
                          </div>
                        </div>
                      )
                    })
                    :
                    <div className="loading-container">
                      <h3>Loading...</h3>
                    </div>
                  }
                </div>
              </div>
            </div>
          </Row>

          <Divider />

          <div className="row justify-content-center">
            <Button onClick={() => setPrintAvatarModal(true)} color='green'>
              <Icon name='save' />
              Print Avatar
            </Button>
          </div>

        </Container>
      ) :
      !showModal && (
        <div className="text-center mt-2">
          <Button primary onClick={() => setShowModal(!showModal)}>Create Avatar</Button>
          <Button secondary onClick={() => window.history.back()}>Go Back</Button>
        </div>
      )
    }
      {
        showModal && (
          <Modal
            size={"lg"}
            fade={false}
            backdrop={"static"}
            isOpen={showModal} toggle={() => setShowModal(!showModal)}>
            <ModalHeader toggle={() => setShowModal(!showModal)}>Create Avatar</ModalHeader>
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
      {/* {
        showNameModal && (
          <Modal
            centered
            backdrop={"static"}
            isOpen={showNameModal} toggle={() => setShowNameModal(!showNameModal)}>
            <ModalHeader toggle={() => setShowNameModal(!showNameModal)}>Edit Name</ModalHeader>
            <ModalBody>
              <div className="d-flex align-items-center">
                <h4 className="text-center mr-4 mb-0">Name:</h4>
                <Input value={avatarData[selectedAvatarIndex].name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name...' size="large" />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setShowNameModal(false)} size="large" className="ui green color mt-3">Save</Button>
            </ModalFooter>
          </Modal>
        )
      } */}
      {
        printAvatarModal && (
          <Modal
            centered
            size={"lg"}
            backdrop={"static"}
            isOpen={printAvatarModal} toggle={() => setShowNameModal(!printAvatarModal)}>
            <ModalHeader toggle={() => setPrintAvatarModal(!printAvatarModal)}>Print Avatars</ModalHeader>
            <ModalBody>
              <div className="container" ref={componentRef}>
                <div className="row justify-content-center">
                  {
                    avatarData.map((avatar, index) => {
                      return (
                        <div key={index} className="col-4 text-center">
                          <EditAvatar
                            name={avatar.name}
                            gender={avatar.gender}
                            editEntity={editEntity}
                            setShowNameModal={setShowNameModal}
                            deleteAvatar={deleteAvatar}
                            updateAvatar={updateAvatar}
                            body={avatar.body}
                            hair={avatar.hair}
                            top={avatar.top}
                            bottom={avatar.bottom}
                            shoes={avatar.shoes}
                            staticHeight={false}
                          />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <ReactToPrint
                trigger={() => <Button onClick={() => setPrintAvatarModal(false)} size="large" className="ui green color mt-3">Print</Button>}
                content={() => componentRef.current}
              />
            </ModalFooter>
          </Modal>
        )
      }
      <Footer />
    </>
  )
}

export default CreateAvatar;

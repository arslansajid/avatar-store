import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import isBrowser from "../../utils/isBrowser";
import { Dropdown, Button, Icon } from "semantic-ui-react";
import { bodylist, hairlist, pantslist, topslist, shoeslist } from "../../svg-template/svg_templatelist";
import { bodylist_man, hairlist_man, pantslist_man, shoeslist_man, shirtslist_man } from "../../svg-template/svg_url_templatelist_man";

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

const EditAvatar = (props) => {
    const [width, setWidth] = useState(0);
    const [editEntity, setEditEntity] = useState('Body');
    const [selectedBody, setSelectedBody] = useState(null);
    const [selectedHair, setSelectedHair] = useState(null);
    const [selectedTop, setSelectedTop] = useState(null);
    const [selectedBottom, setSelectedBottom] = useState(null);
    const [selectedShoes, setSelectedShoes] = useState(null);

    const {index, name, gender, setShowNameModal, deleteAvatar} = props;

    useEffect(() => {
        if(isBrowser()) {
            setWidth(window.innerWidth);
        }
		// set resize listener
		window.addEventListener('resize', handleResize);
	
		// clean up function
		return () => {
		  // remove resize listener
		  window.removeEventListener('resize', handleResize);
		}
      }, [])
      
      const handleResize = e => {
            setWidth(window.innerWidth);
            console.log("WIDTH: #####", window.innerWidth)
      }
      
      const resetSelection = () => {
        // setGender(null);
        // setAge(null);
        // setName(null);
        setEditEntity('Body')
        setSelectedBody(null);
        setSelectedHair(null);
        setSelectedTop(null);
        setSelectedBottom(null);
        setSelectedShoes(null);
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

      const bodyImageSource = !!selectedBody ? selectedBody: gender === "male" ? require('../../images/body.svg') : require('../../images/body2.svg');

    return (
        <div className="">
              <h3>{name}</h3>
              <div
                onClick={() => setShowNameModal(true)}
                className="name-link">
                Change Name
              </div>
              <div className="avatar" style={width <= 768 ? {minHeight: '215px'} : {minHeight: '500px'} }>
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
              <Dropdown
                fluid
                selection
                className="mt-3"
                options={friendOptions}
                value={editEntity}
                onChange={(event, data) => setEditEntity(data.value)}
              />
              {gender === "male" ? renderMaleSelectionContainer(editEntity) : renderFemaleSelectionContainer(editEntity)}
                <div className="d-flex justify-content-center my-3">
                    <Button size="medium" onClick={() => deleteAvatar(index)} color='red'>
                        <Icon name='delete' />
                        Delete
                    </Button>
                    <Button size="medium" onClick={() => resetSelection()} color='blue'>
                        <Icon name='undo' />
                        Reset
                    </Button>
                </div>
            </div>
    )
}

EditAvatar.propTypes = {
    editEntity: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
};

EditAvatar.defaultProps = {
    editEntity: 'Body',
    gender: 'male'
};

export default EditAvatar;
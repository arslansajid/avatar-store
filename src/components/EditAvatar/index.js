import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import isBrowser from "../../utils/isBrowser";
import { Dropdown, Button, Icon } from "semantic-ui-react";

const EditAvatar = (props) => {
    const {editEntity, name, gender, setShowNameModal, deleteAvatar, updateAvatar, body, hair, top, bottom, shoes} = props;

    const [width, setWidth] = useState(0);

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

      const bodyImageSource = !!body ? body: gender === "male" ? require('../../images/body.svg') : require('../../images/body2.svg');

    return (
        <div className="">
              <h3>{name}</h3>
              {/* <div
                onClick={() => setShowNameModal(true)}
                className="name-link">
                Change Name
              </div> */}
              <div className="avatar" style={width <= 768 ? {minHeight: '480px'} : {minHeight: '700px'} }>
              {
                hair && (
                  <img className="hair-image" src={hair} alt="avatar-hair" />
                )
              }
              {
                top && (
                  <img className="top-image" src={top} alt="avatar-top" />
                )
              }
              <img className="body-image" src={bodyImageSource} alt="avatar-body" />
              {
                bottom && (
                  <img className="bottom-image" src={bottom} alt="avatar-bottom" />
                )
              }
              {
                shoes && (
                  <img className="shoes-image" src={shoes} alt="avatar-shoes" />
              )}
              </div>
                {/* <div className="d-flex justify-content-center my-3">
                    <Button size="medium" onClick={() => deleteAvatar(index)} color='red'>
                        <Icon name='delete' />
                        Delete
                    </Button>
                    <Button size="medium" onClick={() => resetSelection()} color='blue'>
                        <Icon name='undo' />
                        Reset
                    </Button>
                </div> */}
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
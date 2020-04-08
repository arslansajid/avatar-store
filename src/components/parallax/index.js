import React from 'react';
import './index.css';
import {Button} from "semantic-ui-react";
import {Link} from 'gatsby'

const Parallax = () => {

  return (
    <div className="Parallax">
      <div className="heading-container">
      <Link to="/avatar-store">
        <Button className="ui red color">Go to Home</Button>
      </Link>
      </div>
    </div>
  );
}

export default Parallax;

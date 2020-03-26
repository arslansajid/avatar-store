import React from 'react'
import {Image} from 'semantic-ui-react'

import moltin from '../../images/moltin-light-hex.svg.svg'
import heart from '../../images/heart.png'

const Logo = () => (
  <Image
    size="mini"
    src={heart}
    style={{marginRight: '1.5em'}}
    alt="I love Lamp"
  />
)

export default Logo

import React from 'react';
import {ReactComponent as MenuIcon} from '../../../images/open-menu.svg'

import './MobileToggle.css';

const mobileToggle = props => (
  <button className="mobile-toggle" onClick={props.onOpen}>
    <MenuIcon className="mobile-toggle__icon"/>
  </button>
);

export default mobileToggle;

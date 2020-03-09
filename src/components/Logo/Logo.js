import React from 'react';
import { ReactComponent as BackPack } from '../../images/backpack.svg';

import './Logo.css';

const logo = props => <h1 className="logo">
    <BackPack className="logo-image"/>
    Travel Tips
</h1>;

export default logo;

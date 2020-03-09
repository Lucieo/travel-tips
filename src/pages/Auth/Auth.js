import React from 'react';

import './Auth.css';

const auth = props => {
    return(
        <div className="auth__wrapper">
            <section className="auth-form">
                {props.children}
            </section>
        </div>
    )
};

export default auth;

import React from 'react';
import './NotMatched.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
const NotMatched = () => {
    const banIcon = <FontAwesomeIcon icon={faBan} />
    const url = document.location.href;
    return (
        <div className="container">
            <div className="not-matched-style">
                <h3 className="d-flex align-items-center"><span className="ban-icon mr-3">{banIcon}</span> This URL Page Can't Be Found</h3>
                <p><small>No web page was found for the web address : {url}</small></p>
                <p>HTTP ERROR 404</p>
            </div>
        </div>
    );
};

export default NotMatched;
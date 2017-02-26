import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');


const Menu = ({ linkTo, faIcon, menuTitle, onMenuClick, menuKey, activePathname }) => {

    return (
        <li className={activePathname === linkTo ? "active" : ""}>
            <Link to={linkTo}>
                <FontAwesome name={faIcon} />
                <span>{menuTitle}</span>
            </Link>
        </li>
    )
}

Menu.propTypes = {
    linkTo: PropTypes.string,
    faIcon: PropTypes.string,
    menuTitle: PropTypes.string,
    menuKey: PropTypes.string
};

export default Menu;

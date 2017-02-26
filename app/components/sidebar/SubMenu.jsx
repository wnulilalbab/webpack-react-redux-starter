import React, { PropTypes } from 'react';
import { Link } from 'react-router';
var FontAwesome = require('react-fontawesome');


const SubMenu = ({ linkTo, menuTitle }) =>
    <li>
        <Link to={linkTo}>
            <span>{menuTitle}</span>
        </Link>
    </li>;

SubMenu.propTypes = {
    linkTo: PropTypes.string,
    faIconType: PropTypes.string,
    menuTitle: PropTypes.string
};

export default SubMenu;

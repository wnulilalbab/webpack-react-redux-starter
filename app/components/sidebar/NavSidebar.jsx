import React, { PropTypes } from 'react';

const NavSidebar = ({ children }) =>
    <nav role="navigation">
        <ul className="nav">
            {children}
        </ul>
    </nav>;

NavSidebar.propTypes = {
    children: PropTypes.array
};

export default NavSidebar;

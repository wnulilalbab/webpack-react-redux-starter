import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';
const FontAwesome = require('react-fontawesome');
import {connect} from "react-redux";

import Menu from '../components/sidebar/Menu';
import MenuAccordion from '../components/sidebar/MenuAccordion';
import SubMenu from '../components/sidebar/SubMenu';
import NavSidebar from '../components/sidebar/NavSidebar';
import * as sidebarAction from '../actions/sidebarAction';

const SidebarPanel = ({ children, sidebar, setActive, accordionToggle, activePathname }) =>

    <div className="sidebar-panel offscreen-left ps-container ps-active-y">
        <div className="brand">
            <a className="brand-logo">
                <span>bwa center</span>
            </a>
        </div>
        <NavSidebar>

            <Menu linkTo="/article"
                activePathname={activePathname}
                menuKey="article"
                faIcon="address-book-o"
                menuTitle="Address Book"/>

            <Menu linkTo="/"
                activePathname={activePathname}
                menuKey="dashboard"
                faIcon="tachometer"
                menuTitle="Dashboards"/>

            <MenuAccordion faIcon="bandcamp"
                menuTitle="Menu Accordion"
                isActive={true} >

                <SubMenu linkTo="/"
                    menuTitle="Sub Menu 1"/>

                <SubMenu linkTo="/"
                    menuTitle="Sub Menu 2"/>

            </MenuAccordion>

            <MenuAccordion faIcon="bell"
                menuTitle="Apps"
                isActive={false} >

                <SubMenu linkTo="/"
                    menuTitle="Calendar"/>

                <SubMenu linkTo="/"
                    menuTitle="Gallery"/>

            </MenuAccordion>

        </NavSidebar>
    </div>;


// <div className="ps-scrollbar-x-rail">
//     <div className="ps-scrollbar-x" ></div>
// </div>
// <div className="ps-scrollbar-y-rail">
//     <div className="ps-scrollbar-y"></div>
// </div>

SidebarPanel.propTypes = {
    children: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
        activePathname: state.routing.locationBeforeTransitions.pathname
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (menuKey) => {
            dispatch(sidebarAction.setActive(menuKey));
        },
        accordionToggle: (menuKey) => {
            dispatch(sidebarAction.setActive(menuKey));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarPanel);

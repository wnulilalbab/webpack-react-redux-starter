import React, { PropTypes } from 'react';
import { Link } from 'react-router';
var FontAwesome = require('react-fontawesome');

var MenuAccordion = React.createClass({
    getInitialState() {
        return {isOpen: false};
    },

    accordionToggle(){
        this.setState({isOpen: !this.state.isOpen});
    },

    render(){
        const {children, faIcon, menuTitle} = this.props;
        return (
            <li className={"menu-accordion "+ (this.state.isOpen ? "open" : "")}>
                <a onClick={this.accordionToggle}>
                    <FontAwesome name={faIcon}/>
                    <div className="expand-indicator-icon">
                        <FontAwesome name="arrow-circle-right" />
                    </div>
                    <span>{menuTitle}</span>
                </a>
                <ul className="sub-menu">
                    {children}
                </ul>
            </li>
        )
    }
});

MenuAccordion.propTypes = {
    children: PropTypes.array,
    faIcon: PropTypes.string,
    menuTitle: PropTypes.string,
    isActive: PropTypes.bool,
};

export default MenuAccordion;

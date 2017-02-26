import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import SidebarPanel from './SidebarPanel';
var FontAwesome = require('react-fontawesome');

const App = ({ children }) =>
    <div className="app layout-fixed-header">
        <SidebarPanel />
        <div className="main-panel">
            <div className="header navbar">
                <ul className="nav navbar-nav hidden-xs">
                   <li>
                      <a className="small-sidebar-toggle ripple" data-toggle="layout-small-menu">
                          <FontAwesome name="bars" />
                      </a>
                   </li>
               </ul>
            </div>
            <div className="main-content">
                <div className="page-title">
                    <div className="title">Title Title Title</div>
                    <div className="sub-title">Subtitle subtitle</div>
                </div>
                <p>Sizing</p>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card card-block bg-white">
                            <h4 className="card-title">Special title treatment</h4>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="javascript:;" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card card-block bg-white">
                            <h4 className="card-title">Special title treatment</h4>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="javascript:;" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card bg-white">
                            <div className="card-header">
                                Default portlet
                            </div>
                            <div className="card-block">
                                <p>Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-white">
                            <div className="card-header bg-primary text-white">
                                Primary portlet
                            </div>
                            <div className="card-block">
                                <p>Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-white">
                            <div className="card-header bg-success text-white">
                                Success portlet
                            </div>
                            <div className="card-block">
                                <p>Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="content-footer"/>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;

import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const App = ({ children }) =>
    <div>
        <h1>Coba Router</h1>
        { children }
        <footer>
            <Link to="/">About Page</Link>
            <Link to={{pathname: "/hallo", query: {showAge: true} }}>Hallo page</Link>
            <Link to={{pathname: "/article"}}>Article page</Link>
        </footer>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;

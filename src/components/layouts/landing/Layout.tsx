import React from 'react';
import PropTypes from 'prop-types';
import Nav from "./Nav";
import Footer from "./Footer";
import "./Layout.scss";

const Layout = ({children}) => {
    return (
        <div className="container-fluid p-0 layout-container">
            <Nav />
            {children}
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired
};

export default Layout;

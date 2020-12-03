import React from 'react';
import PropTypes from 'prop-types';
import Nav from "./Nav";

const Layout = ({children}) => {
    return (
        <>
            <Nav/>
            {children}
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired
};

export default Layout;

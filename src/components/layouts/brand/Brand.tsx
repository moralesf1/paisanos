import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../../img/The_Simpsons_Logo.png";
import "./Brand.scss";

const Brand = () => {
    return (
        <Link to="/" className="navbar-brand custom-navbar-brand">
            <img src={logo} alt="The simpson" className="brand-img" />
        </Link>
    );
};

export default Brand;

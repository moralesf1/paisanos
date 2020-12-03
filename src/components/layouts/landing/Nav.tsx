import React from 'react';
import {Link} from "react-router-dom";
import Brand from "../brand/Brand";
import "./Nav.scss";
import Collapse from "../../elements/hoc/Collapse";

const Nav = props => {
    let {handleNavCollapse, isNavCollapsed} = props;

    return (
        <header className="navbar navbar-expand-lg navbar-light custom-navbar">
            <Brand />
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`${isNavCollapsed ? 'collapse': ''} navbar-collapse custom-collapse`} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/quotes" className="nav-link">Frases</Link>
                    </li>
                    <li className="nav-item">
                        <a href="/#" className="nav-link">Personajes</a>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary my-2 my-sm-0 custom-nav-button" type="submit">Iniciar sesión</button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Collapse(Nav);

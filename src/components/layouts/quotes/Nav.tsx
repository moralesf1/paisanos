import React from 'react';
import { Link } from 'react-router-dom';
import SearchQuotesInput from "../../elements/searchInput/SearchQuotesInput";
import Brand from "../brand/Brand";
import "./Nav.scss";
import Collapse from "../../elements/hoc/Collapse";

const Nav = (props) => {

    let {handleNavCollapse, isNavCollapsed} = props;

    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <Brand />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`${isNavCollapsed ? 'collapse': ''} navbar-collapse custom-search-collapse`} id="mainMenu">
                <form className="navbar-form ml-auto d-none d-lg-block">
                    <SearchQuotesInput />
                </form>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" href="#">Inicio</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" href="#">Frases</Link>
                    </li>
                    <li className="nav-item">
                    <button className="btn btn-primary my-2 my-sm-0 custom-search-button" type="submit">Iniciar sesión</button>
                </li>
                </ul>

            </div>
        </header>
    );
};

export default Collapse(Nav);

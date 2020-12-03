import React, {Component} from 'react';
import Layout from "../layouts/landing/Layout";
import "./Landing.scss";
import {Link} from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <Layout>
                <div className="col-12 landing-container">
                    <span className="hero-text-container text-center">
                        <h2 className="hero-text">
                            ¡Encontrá las frases de tus personajes favoritos!
                        </h2>
                        <Link to="/quotes" className="btn btn-primary custom-btn">Buscar</Link>
                    </span>
                </div>
            </Layout>
        );
    }
}

export default Landing;
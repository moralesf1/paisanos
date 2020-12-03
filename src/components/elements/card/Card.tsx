import React from 'react';
import PropTypes from 'prop-types';
import "./Card.scss";

const Card = ({image, title, content}) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-xl-3 custom-card">
            <div className="card">
                <img src={image} alt={title} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <p className="card-text">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Card;

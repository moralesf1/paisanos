import React from 'react';
import frink from '../../../img/professor-frink.png';
import './noResults.scss';

const NoResults = () => {
    return (
        <div className="col-12 col-lg-10 no-result">
            <img src={frink} alt="" className="frink-img"/>
        </div>
    );
};

export default NoResults;

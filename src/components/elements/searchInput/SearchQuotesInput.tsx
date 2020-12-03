import React from 'react';
import PropTypes from 'prop-types';
import Search from "../hoc/Search";
import "./SearchQuotesInput.scss";

const SearchQuotesInput = props => {
    function onkeypress(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            let query = event.target.value;
            props.resetRequest();
            props.filterQuotes(query);
        }
    }

    return (
        <>
            <input className="form-control mr-sm-2 search-quotes-input" type="text" placeholder="Buscar" aria-label="Buscar" onKeyPress={onkeypress}/>
        </>
    );

};

SearchQuotesInput.propTypes = {
    fetchQuotes: PropTypes.func.isRequired,
};

export default Search(SearchQuotesInput);

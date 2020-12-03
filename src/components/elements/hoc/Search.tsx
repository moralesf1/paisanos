import React from 'react';
import {connect} from "react-redux";
import {fetchQuotes, filterQuotes, resetRequest} from "../../../actions/quotes";

const Search = (Child) => {
    const SearchQuotes = (props) => {
        return <Child {...props} />;
    }

    SearchQuotes.displayName = "SearchQuotes(Child)";

    return connect(null, {fetchQuotes, filterQuotes, resetRequest})(SearchQuotes);
}

export default Search;
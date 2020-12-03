import React from 'react';
import SearchQuotesInput from "../elements/searchInput/SearchQuotesInput";

const QuotesMobileSearch = () => {
    return (
        <div className="row d-block d-lg-none">
            <div className="col-12 mobile-filter">
                <SearchQuotesInput />
            </div>
        </div>
    );
};

export default QuotesMobileSearch;

import React, {Component} from 'react';
import "./SideFilters.scss";
import {connect} from "react-redux";
import Search from "../elements/hoc/Search";

interface ISideFilters {
    quotes: Array<any>
    fetchQuotes: Function
    filterQuotes: Function
    resetRequest: Function
}

class SideFilters extends Component<ISideFilters> {
    render() {
        //
        return (
            <div className="col-3 col-xl-2 d-none d-lg-block side-filter-container">
                <div className="row side-filter-row">
                <div className="col-8 offset-2">
                    <ul className="list-unstyled">
                        <li>
                            <h5 className="list-title">Personajes</h5>
                        </li>
                        {this.renderFilterNames()}
                    </ul>
                </div>
            </div>
            </div>
        );
    }

    renderFilterNames() {
        let {quotes} = this.props;
        let names = quotes.map((quote) => quote.character);
        names = [...new Set(names)];
        return names.map((name) => <li key={name}> <span className="characters-filter" onClick={() => this.filterClick(name)}>{name}</span></li>);
    }

    filterClick(name) {
        this.props.resetRequest();
        this.props.filterQuotes(name.toLowerCase());
    }
}

const mapStateToProps = (state: any) => {
    return {
        quotes: state.quotes.data
    }
};

export default Search(connect(mapStateToProps)(SideFilters));
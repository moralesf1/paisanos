import React, {Component} from 'react';
import Card from "../elements/card/Card";
import {connect} from "react-redux";
import "./QuotesContainer.scss";
import QuotesMobileSearch from "./QuotesMobileSearch";

interface IQuotesContainer {
    quotes: Array<any>
    query: string
}

class QuotesContainer extends Component<IQuotesContainer> {
    render() {
        let {quotes} = this.props;
        return (
            <div className={"col-12 col-lg-9 col-xl-10"}>
                <QuotesMobileSearch />
                <div className="row">
                    <div className="col-12 result-legend">
                        {this.showResultsLegend()}
                    </div>
                </div>
                <div className="row">
                    {quotes.map((quote: any, index) => <Card key={index} image={quote.image} title={quote.character} content={quote.quote} />)}
                </div>
            </div>
        );
    }

    showResultsLegend() {
        let {quotes, query} = this.props;
        if (quotes.length) {
            return `Mostrando 1 - ${quotes.length} ${query !== "" ? `resultados para "${query}"` : ""}`;
        }
    }
}

const mapStateToProps = (state: any) => {
    return {
        query: state.quotes.query
    }
};

export default connect(mapStateToProps)(QuotesContainer);
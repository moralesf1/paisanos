import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchQuotes, IFetchQuotesParams} from "../../actions/quotes";
import {LIMIT_QUOTES, MAX_REQUEST} from "../../constants/quotes";
import Layout from "../layouts/quotes/Layout";
import SideFilters from "./SideFilters";
import QuotesContainer from "./QuotesContainer";
import NoResults from "../elements/noResults/NoResults";

interface IQuotes {
    match:any // prop agregada para obtener parámetros por url
    fetchQuotes: Function
    quotes: Array<object>
    maxRequest: number
    query: string
    fetching: boolean
}

class Quotes extends Component<IQuotes> {
    render() {
        let {quotes, fetching} = this.props;
        return (
            <Layout>
                <div className="container-fluid pt-4 pt-lg-0">
                    <div className={"row"}>
                        <SideFilters />
                        {quotes.length || fetching ? <QuotesContainer quotes={quotes} /> : <NoResults />}
                    </div>
                </div>
            </Layout>
        );
    }

    componentDidMount() {
        let {query} = this.props;

        this.props.fetchQuotes({query: query});
    }

    componentDidUpdate(prevProps: Readonly<IQuotes>, prevState: Readonly<{}>, snapshot?: any) {
        let {quotes, maxRequest, fetching} = this.props;
        let {query} = this.props;
        /**
         * la api nos retorna un maximo de 10 quotes
         * a pesar de que enviamos como parámetro count=15
         * se realiza un chequeo del limite requerido
         * de ser menor al limite se traen mas quotes
         *
         * se le agrego un MAX_REQUEST debido a que la api
         * bloquea los request después de llamarla una determinada
         * cantidad de veces
         */
        if (!fetching && quotes.length < LIMIT_QUOTES && maxRequest < MAX_REQUEST) {
            let requiredLimit = LIMIT_QUOTES - quotes.length;
            this.props.fetchQuotes({query: query, limit: requiredLimit, append: true});
        }
    }
}

const mapStateToProps = (state: any) => {
    return {
        quotes: state.quotes.data,
        maxRequest: state.quotes.maxRequest,
        query: state.quotes.query,
        fetching: state.quotes.fetching
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
      fetchQuotes: (params: IFetchQuotesParams) => dispatch(fetchQuotes(params))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
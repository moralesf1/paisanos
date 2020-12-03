import {
    API_URL,
    APPEND_QUOTES,
    FETCHED_QUOTES,
    FETCHING_QUOTES,
    LIMIT_QUOTES,
    RESET_REQUEST
} from "../constants/quotes";

export interface IFetchQuotesParams {
    query?: string
    limit?: number
    append?: boolean
}

export const fetchQuotes = ({query = "", limit = LIMIT_QUOTES, append = false}: IFetchQuotesParams) => {
    return (dispatch: any, getState: Function) => {
        let state = getState();
        let stateData = [];
        dispatch(fetchingQuotes());
        if (append) {
            stateData = state.quotes.data;
        }
        quotesRequest({query,limit})
        .then((quotes) => {
            if (quotes !== undefined) {
                let filteredQuotes = filterQuotesByQuery(quotes, query);
                let uniquesQuotesObject = uniquesQuotes(filteredQuotes, stateData);
                if (append) {
                    dispatch(appendQuotes(uniquesQuotesObject));
                } else {
                    dispatch(quotesFetched(uniquesQuotesObject, query));
                }
            }
        });
    };
};

export const filterQuotes = (query) => {
  return (dispatch: any, getState: Function) => {
      dispatch(fetchingQuotes());
      if (query === "") {
          dispatch(quotesFetched([], query));
      } else {
          let currentQuotes = getState().quotes.data;
          let filteredQuotes = filterQuotesByQuery(currentQuotes, query);
          dispatch(quotesFetched(filteredQuotes, query));
      }
  }
};

const quotesRequest = ({query = "", limit = LIMIT_QUOTES}: IFetchQuotesParams) => {
    let url = new URL(API_URL);
    url.search = new URLSearchParams({"count": limit.toString()}).toString();
    return fetch(url.toString())
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    })
    .then((quotes) => {
        return quotes;
    })
    .catch((error) => {
       console.error(error);
    });
};

const fetchingQuotes = () => ({
    type: FETCHING_QUOTES
});

export const resetRequest = () => ({
    type: RESET_REQUEST
});

const quotesFetched = (quotes: any, query: string) => ({
   type: FETCHED_QUOTES,
   payload: {
       quotes,
       query
   }
});

const appendQuotes = (quotes: any) => ({
    type: APPEND_QUOTES,
    payload: quotes
});


const filterQuotesByQuery = (quotes: Array<any>, query: string) => quotes.filter((quote) => {
    return quote.character.toLowerCase().indexOf(query) !== -1;
});

const uniquesQuotes = (newQuotes: any, oldQuotes: any) => {
   let flatterQuotes = oldQuotes.map((quote) => quote.quote);
    return newQuotes.filter((quote) => !flatterQuotes.includes(quote.quote));
};
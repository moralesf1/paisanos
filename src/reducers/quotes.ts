import {APPEND_QUOTES, FETCHED_QUOTES, FETCHING_QUOTES, RESET_REQUEST} from "../constants/quotes";

const initialState = {
    fetching: true,
    data: [],
    maxRequest: 1,
    query: ""
};

function quotes (state = initialState, action: any) {
    switch (action.type) {
        case FETCHING_QUOTES:
            return {
                ...state,
                fetching: true,
            };
        case FETCHED_QUOTES:
            return {
                ...state,
                fetching: false,
                data: action.payload.quotes,
                query: action.payload.query
            };
        case APPEND_QUOTES:
            return {
                ...state,
                fetching: false,
                data: [...state.data, ...action.payload],
                maxRequest: ++state.maxRequest
            };
        case RESET_REQUEST:
            return {
                ...state,
                maxRequest: initialState.maxRequest
            };
        default:
            return state;
    }
};

export default quotes;
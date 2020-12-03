import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import reducers from '../reducers';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * param1: middleware necesario para hacer llamadas asincronas en el actionCreator (actions folder)
 * param2: herramienta para debuggear aplicaciones de react en el devTool del navegador
 */
const composedEnhancers = compose(applyMiddleware(thunk), composeEnhancers());

export const store = createStore(reducers, {}, composedEnhancers);
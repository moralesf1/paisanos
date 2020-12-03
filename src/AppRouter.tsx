import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.scss';
import './scss/bootstrap.scss'
import {Provider} from "react-redux";
import {store} from "./store";
import Landing from "./components/landing/Landing";
import Quotes from "./components/quotes/Quotes";

function AppRouter() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path={"/quotes/:query?"} component={Quotes}></Route>
                    <Route exact path={"/"} component={Landing}></Route>
                    <Route exact render={() => <Redirect to={{pathname: "/"}} />} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default AppRouter;

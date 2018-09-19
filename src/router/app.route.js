import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {Blog, Home, Maps} from './lazy';
import NotFound from './../components/NotFound/NotFound';

class AppRoute extends Component {
    render() {
        const history = createHistory();
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/maps" component={Maps} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default AppRoute;
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import View from '../views/View';
import PostDetailView from '../views/post/PostDetailView';
import { Error404View } from '../views/error/Error404View';

class RouterApp extends Component {
    render() {
        let { location } = this.props;
        return (
            <Switch>
                <Route exact path="/" component={View} />
                <Route exact path="/:category" component={View} />
                <Route path="/:category/:postId" component={PostDetailView} />
                <Route render={() => <Error404View location={location} />} />
            </Switch>
        )
    }
}
export default RouterApp
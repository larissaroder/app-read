import React from 'react';
import { Route, Switch } from 'react-router-dom';
import View from '../views/View';
import PostDetailView from '../views/post/PostDetailView';
import { Error404View } from '../views/error/Error404View';

export const RouterApp = () => (
    <Switch>
        <Route exact path="/" component={View} />
        <Route exact path="/:category" component={View} />
        <Route path="/:category/:postId" component={PostDetailView} />
        <Route render={() => <Error404View location={this.props.location} />} />
    </Switch>
);
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './containers/home/HomeContainer';
import Businesses from './containers/businesses/BusinessesContainer';

export default class Router extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/queuemehub"/>)}/>
                <Route path="/queuemehub" component={Home}/>
                <Route path="/businesses" component={Businesses}/>
            </Switch>
        )
    }
}
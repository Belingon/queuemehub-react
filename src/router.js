import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Thing from './containers/thing/ThingContainer';

export default class Router extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/queuemehub"/>)}/>
                <Route path="/queuemehub" component={Thing}/>
            </Switch>
        )
    }
}
import React from 'react';
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';

import Songs from './components/songs';
import  Stories  from './components/stories';
import Joudi from './components/story';


import Home from './components/home';



// 

const routing = (
    <Router>
        <React.StrictMode>
            <Switch>
           
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route  path="/stories" component={Stories}/>    
                <Route path="/:id" component={Joudi}/>               
            </Switch>
            
            
        </React.StrictMode>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



import React, { Component } from 'react';
import '../styles/AppStyle.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeadNav from '../HeadNav.jsx';
import Home from '../Home.jsx';
import App from '../App.jsx';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App-header">
          <HeadNav />
          <div className="container">
            <Home />
            <Switch>
              <Route exact path="/" Component={App} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

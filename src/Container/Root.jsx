import React, { Component } from 'react';
import '../styles/AppStyle.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeadNav from '../Components/HeadNav.jsx';
import CardHome from '../Components/CardlHome.jsx';
import App from '../Components/App.jsx';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App-header">
          <HeadNav />
          <br />
          <div className="container">
            <CardHome />
            <Switch>
              <Route exact path="/" Component={App} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

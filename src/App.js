// Code modified 2017-05-23 by Jaroslav Siroic
// My github: https://github.com/jaroslavsiroic

import React, { Component } from 'react';

import './App.css';

import LoginContainer from './components/Login';
import OrdersContainer from './components/Orders'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onLoginClick(data) {
    console.log(data);
    console.log('lets say that user logged in...');
    this.setState({isLoggedIn: true});
  }

  render() {
    const { isLoggedIn } = this.state;
    const View = isLoggedIn ? <OrdersContainer/> : <LoginContainer onLoginClick={this.onLoginClick} />;
    return (
      <div className="App">
        <div className="App-header">

          <div className="row heading">
            <div className="col col-xs-2"></div>
            <div className="col col-xs-8 title"><b>Yellow Hammock</b></div>

          </div>
        </div>
        { View }
      </div>
    );
  }
}

export default App;

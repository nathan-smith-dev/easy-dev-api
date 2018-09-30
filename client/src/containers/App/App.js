import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../../pages/Home/Home';
import * as authActions from '../../store/actions/authActions';
import GradientStripe from '../../components/default/GradientStripe';
import Navbar from '../../containers/Navbar/Navbar';
import appLogo from '../../assets/temp-logo.png';

class App extends Component {

  render() {
    const navItems = [
      { text: 'Item 1', path: '/item1' },
      { text: 'Item 2', path: '/item2' },
      { text: 'Item 3', path: '/item3' },
    ];

    return (
      <div>
        <GradientStripe />
        <BrowserRouter>
          <div>
            <Navbar 
              breakpoint={768} 
              sidebar={<div>Sidebar</div>}
              navItems={navItems}
              logo={appLogo}
            />
            <Route 
              exact
              path="/"
              component={Home}
            />
            <Route 
              exact
              path="/placeholder"
              component={PlaceHolder}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

class PlaceHolder extends Component {
  render() {
    return (
      <div>
        <h3>Placeholder route</h3>
      </div>
    );    
  }
};

export default connect(null, authActions)(App);

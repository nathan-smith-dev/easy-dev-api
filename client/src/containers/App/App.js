import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../../pages/Home/Home';
import * as authActions from '../../store/actions/authActions';

import GradientStripe from '../../components/default/GradientStripe';

class App extends Component {
  componentDidMount() { 
    // this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <GradientStripe />
        <BrowserRouter>
          <div>
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

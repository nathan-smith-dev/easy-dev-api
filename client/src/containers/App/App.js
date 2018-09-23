import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../routes/Home/Home';

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
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

export default App;

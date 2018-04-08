import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Orders from './Orders/Orders.js';

class App extends Component {
  render() {
    return (
      <div>
        <Orders color='rgb(117, 63, 51)' width= "300px" fontsize= "24px"></Orders>
      </div>
    );
  }
}

export default App;

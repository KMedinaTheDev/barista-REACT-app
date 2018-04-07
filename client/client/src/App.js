import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {users:[]}
  
  componentDidMount(){
    fetch('/api/orders', {
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    })
    .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          // <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Barista App">Users</h1>
        </header>
        {this.state.users.map(user =>
            <div key={user.name}>{user.msg}</div>
          )}
      </div>
    );
  }
}

export default App;

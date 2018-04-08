import React, { Component } from 'react';
import './Orders.css';

class Orders extends Component {
  state = {users:[]}

  componentDidMount(){
    fetch('/api/orders',{
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(users => this.setState({ users }));
  }
  render() {
    const defaultStyle = {
      color: "white",
      borderColor: "black",
      borderSize: 1,
      borderStyle: "solid"
    }
    const style = {
      ...defaultStyle,
      margin: 100,
      padding: 20,
      backgroundColor: this.props.color,
      width: this.props.width,
      fontSize: this.props.fontsize,
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Users</h1>
        </header>
        {this.state.users.map(user =>
            <div style = {style} key={user.username}> {user.name} {user.order} {user.size} {user.cream} {user.milk} {user.sugar}</div>
          )}
      </div>
    );
  }
}

export default Orders;

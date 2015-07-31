import React, { Component } from 'react';
import { RouteHandler, Link } from 'react-router';

export default class App extends Component {
  render(){
    return (
      <div>
        <h1>Universal Hot Stack</h1>
        <Link to="/hello">Hello</Link>
        <Link to="/home">Home</Link>
        <RouteHandler/>
      </div>
    )
  }
}

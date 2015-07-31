import React from 'react';
import {Route} from 'react-router';
import App from './app';
import Hello from './hello';
import Home from './home';

export default (
  <Route handler={App}>
    <Route path="hello" handler={Hello}/>
    <Route path="home" handler={Home}/>
  </Route>
);

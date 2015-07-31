import React from 'react';
import {Route} from 'react-router';
import App from './app';
import Hello from './hello';

export default (
  <Route handler={App}>
    <Route path="hello" handler={Hello}/>
  </Route>
);

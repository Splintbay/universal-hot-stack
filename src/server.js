import express from 'express';
import React from 'react';
import config from './config';
import api from './api/api';
import Html from './html';
import Hello from './hello';

const app = new express();

app.get('/', (req, res) => {
  res.send('<!doctype html>\n' +
      React.renderToString(<Html component={<Hello />}/>));
});

if(config.port){
  app.listen(config.port, (err) => {
    if(err) {
      console.log(err);
    } else {
      api().then(() => {
        console.info('==> Server is listening');
        console.info('==> %s running on port %s, API on port %s', config.app.name, config.port, config.apiPort);
      });
    }
  });
}

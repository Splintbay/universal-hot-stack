import express from 'express';
import React from 'react';
import Router from "react-router";
import routes from './views/routes';
import serveStatic from 'serve-static';
import path from 'path';

import config from './config';
import api from './api/api';
import Html from './html';

const app = new express();

app.use(serveStatic(path.join(__dirname, '..', 'static')));

app.use((req, res) => {
  console.info('Request for %s received', req.path);
  Router.run(routes, req.url, Handler => {
   res.send('<!doctype html>\n' +
       React.renderToString(<Html component={<Handler />}/>));
 });
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

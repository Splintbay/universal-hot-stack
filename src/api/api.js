import express from 'express';
import config from '../config';

const app = new express();

export default function api() {
  return new Promise((resolve) => {
    app.get('/', (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ title: 'Universal Hot Stack API!' }, null, 3));
    });

    app.listen(config.apiPort);
    resolve();
  });
}

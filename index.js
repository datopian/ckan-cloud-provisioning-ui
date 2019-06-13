'use strict';

const express = require('express');
const proxy = require('express-http-proxy');
const rootDir = './dist/ckan-cloud-provisioning-ui/';
const backend = process.env.BACKEND || 'api:8000';
const app = express();

function proxyOpts(prefix) {
  return {
    proxyReqPathResolver: function(req) {
      let ret = prefix + req.url;
      ret = ret.replace('/?', '?');
      ret = ret.replace(/\/$/, '');
      return ret;
    }
  }
}

app.set('port', process.env.PORT || 8000);
app.use('/api', proxy(backend, proxyOpts('/api')));
app.use('/auth', proxy(backend, proxyOpts('/auth')));
app.use('/', express.static(rootDir, {
  maxAge: '1d',
}));

app.use(express.static(rootDir))

app.listen(app.get('port'), function() {
  console.log('Listening port ' + app.get('port'));
});

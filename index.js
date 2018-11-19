'use strict';

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8000);
app.use(express.static('dist/ckan-cloud-provisioning-ui/'))

app.listen(app.get('port'), function() {
  console.log('Listening port ' + app.get('port'));
});

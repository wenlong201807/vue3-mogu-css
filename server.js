var express = require('express');
var app = express();
const hostname = 'localhost';
const port = 3002;
app.use(express.static('./dist'));
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/#/mall/home`);
});

var app = require('../app');
var http = require('http');

var server = http.createServer(app);
app.set('port', port);
var port = normalizePort(process.env.PORT || '3000');
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}
server.listen(port);




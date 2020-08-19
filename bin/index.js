const app = require('../server');

//Config http server
const server = require('http').Server(app);
const port = 8080;

//Server listening
server.listen(process.env.PORT || port);
console.log(`Running on port ${port}`);
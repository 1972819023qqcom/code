const express = require('express');
const expressStatic = require('express-static');


var server = express();
server.listen(8080);

server.use(expressStatic("./page"))                     //去哪里找静态文件
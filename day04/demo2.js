const express = require('express');

var server = express();
server.listen(8080);
server.use("/",function (req,res) {
    res.send("hellosenduse")
    res.end()
})














const express = require("express");
var server = express();

// 链式操作

server.use("/",function (req,res,next) {
    console.log(1);
    next();
})
server.use("/",function (req,res) {
    console.log(2);
})

server.listen(8080);


























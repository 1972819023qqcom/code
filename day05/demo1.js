const express = require("express");
const  expressStatic = require("express-static");
var server = express();
server.use("/",function (req,res,next) {
    /*res.send("haha");
    res.end();*/
    next();
})
server.use("/",function (req,res) {
    res.send("haha1");
    console.log(req.query);
})

server.listen(8080);


























const express = require("express");
const  myBodyParser = require("zhongjianjian");
var  server = express();

server.use(myBodyParser());
server.use("/",function (req,res) {
    console.log(req.body);
    res.send("23333");
    res.end()
})
server.listen(8080)
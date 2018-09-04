const express = require("express");
const queryString = require("querystring");
// const bodyParser = require("body-parser");

var server = express();
// server.use(bodyParser.urlencoded());
var str ="";
// 中间件
// { user: 'admin', pass: '123456' }
//user=admin&pass=123456
// { user: 'admin', pass: '123456' }
server.use("/",function (req,res,next) {
    req.on("data",function (haha) {
        str+=haha;
    })
    req.on("end",function () {
        // req.body=str;
        req.body=queryString.parse(str);
        next();
    })
})
server.use("/",function (req,res) {
    console.log(req.body);
    res.send("cheng")
    res.end();
})
server.listen(8080);


























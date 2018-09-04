/**/
const express = require('express');

var server = express();
server.listen(8080);

//get post use
// /根目录

server.use("/",function (req,res) {
    // res.write("hello");
    res.send("hellosend")
    res.end()
})
server.use("/a.html",function (req,res) {//发起请求
    // res.write("hello");
    res.send("页面/a.html")
    res.end()
})

server.use("/b.html",function (req,res) {//发起请求
    // res.write("hello");
    res.send("页面/b.html")
    res.end()
})
















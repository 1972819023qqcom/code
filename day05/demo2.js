const express = require("express");
const  bodyParser = require("body-parser");
var server = express();
server.use(bodyParser.urlencoded( {  //中间件
    extened:true,           //true 扩展模式     false普通模式
    limit:1*1024*1024                 //限制    post传输数据默认是100k
    }))

server.use("/",function (req,res) {
    console.log(req.body);
})

server.listen(8080);


























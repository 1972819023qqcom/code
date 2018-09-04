const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const urlLib = require("url");


var server = http.createServer(function (req,res) {
    //get
    var obj = urlLib.parse(req.url,true);
    console.log(obj);
    const URL = obj.pathname;
    const GET = obj.query;
    //post
    var str = "";
    req.on("data",function (haha) {
        str+=haha;
    })
    req.on("end",function () {
       const POST = queryString.parse(str);
        console.log(URL);
        console.log(GET);
        console.log(POST);
    })
    //文件请求
    var file_name = "./page"+URL;
    fs.readFile(file_name,function (err,data) {
        if (err){
            console.log(err);
        } else {
            console.log(data);
            res.write(data);
            res.end();
        }
    })
    // res.end();
})
server.listen(8080);
























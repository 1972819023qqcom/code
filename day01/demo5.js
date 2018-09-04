//引入模块
const http = require("http");
const fs = require("fs");
//创建服务器
http.createServer(function (req,res) {
    var file_name = "./page"+req.url;
    console.log(req.url);
    if (req.url!="/favicon.ico") {    
        fs.readFile(file_name,function (err,data) {
            if (err){
                console.log("err文件读取错误");
            } else{
                console.log(data.toString());
                res.write(data);
                res.end();
            }
            res.end();
        })
    }

}).listen(8080)














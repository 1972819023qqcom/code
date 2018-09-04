/**
 * Created by 郭娜 on 2018/9/4.
 */
var http = require("http");
var fs = require("fs");


var server = http.createServer(function(req,res){
    console.log(req.url);


    if(req.url=="/index"){
        fs.readFile("./index.html",(err,data)=>{
            res.end(data);
        })
    }else if(req.url=="/list"){
        fs.readFile("./list.html",(err,data)=>{
            res.end(data);
        })
    }else if(req.url=="/list.css"){
        fs.readFile("./list.css",(err,data)=>{
            res.writeHead(200,{"Content-type":"text/css"});
            res.end(data);
        })
    }
    else if(req.url=="/01.jpg"){
        fs.readFile("./01.jpg",(err,data)=>{
            res.writeHead(200,{"Content-type":"image/jpeg"});
            res.end(data);
        })
    }else{
        res.end("出错了")
    }
}).listen(3000,"localhost")










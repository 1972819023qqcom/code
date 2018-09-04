/**
 * Created by 郭娜 on 2018/9/3.
 */
var http = require("http");
//console.log(http)

var server = http.createServer(function(req,res){
    //形参和实参   arguments
    //req=>request请求 resPonse响应



    res.writeHead(200,{"Conrent-type":"text/html;chatset=UTF-8"})

    //结束响应
    res.end("hello word");
    //console.log(arguments);
})
server.listen(3000,"localhost")

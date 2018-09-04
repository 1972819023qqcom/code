const http=require("http");
var Server = http.createServer(function (req,res) {
    console.log("页面有人访问了");

    switch (req.url){
        case "/index":
            res.write("index");
            break;
        case "/list":
            res.write("list");
            break;
        case "/detail":
            res.write("detail");
            break;
        default :
            res.write("12345");
            break;
    }
    res.end();
})
Server.listen(8080);
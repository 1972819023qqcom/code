const http = require("http");
const urlLib = require("url");
var Server = http.createServer(function (req,res) {

    var obj=urlLib.parse(req.url,true);
    console.log(obj);
    console.log(obj.pathname);
    console.log(obj.query);
    res.end();
})
Server.listen(8090);

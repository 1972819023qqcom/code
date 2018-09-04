
const express = require("express");
const  cookieParser = require("cookie-parser");
var server = express();
server.listen(8080);

server.use(cookieParser("ashfskkfksdjksjfkdkjfkdj"));
server.use("/",function (req,res) {
    console.log(res.cookies);
    console.log(req.signedCookies);
    res.send("ok");
    res.end();
})
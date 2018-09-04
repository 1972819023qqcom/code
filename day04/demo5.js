const express = require("express");
const expressStatic = require("express-static");

var server = express();

server.listen(8080);
var json = {
    "admin":"123456",
    "xiaoming":"111111",
    "xiaohong":"666666"
}

server.get("/login",function (req,res) {
    console.log(req.query);
    var user = req.query.user;
    var pass = req.query.pass;
    console.log(user);
    console.log(pass);
    //1.用户是否存在
    //2.密码是否正确
    //3.登录成功
    if (json[user]==null){
        res.send('{"ok":false,"msg":"该用户不存在"}')
    } else if (json[user]!= pass){
        res.send('{"ok":false,"msg":"密码错误"}')
    } else {
        res.send('{"ok":true,"msg":"登录成功"}')
    }
    res.end();
})

server.use(expressStatic("./page"));//去哪里找静态文件


























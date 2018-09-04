//引入模块
const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const urlLib = require("url");
var json = {};
//创建服务器   req,res请求，响应
const server = http.createServer(function (req,res) {
    // request         请求   输入  请求来的信息
    // response        响应   输出  输出你要输出的东西
if (req.url!="/favicon.ico"){
    //get
    var obj = urlLib.parse(req.url,true)//解析
    const URL = obj.pathname;
    const GET = obj.query;
    //post
    var str = "";
    req.on("data",function (haha) {
        str+=haha;
    })
    req.on("end",function () {
        const POST = queryString.parse(str);
    })

    //请求文件
    //文件 接口

    if (URL=="/user"){//接口
        switch (GET.act) {
            case "reg":       //注册
                //1.判断用户是否存在
                if (json[GET.user]) {
                    //用户已存在
                    res.write('{"ok":false,"msg":"用户已存在"}')
                }else {
                    //2.没有的就存起来
                    json[GET.user]=GET.pass;
                    res.write('{"ok":true,"msg":"注册成功"}')
                }
                break;
            case "login":           //登录
                //1.判断是否有此用户
                if (json[GET.user]==null){
                    res.write('{"ok":false,"msg":"用户不存在"}')
                } else if ( json[GET.user]!=GET.pass) {//2.判断密码是否正确
                    res.write('{"ok":false,"msg":"密码错误"}')
                }else {
                    res.write('{"ok":true,"msg":"登录成功"}')
                }
                break;
            default:           //
                console.log("无效接口");
                res.write('{"ok":false,"msg":"出错，此接口无效"}')
        }
        res.end();
    }else {
        //读取文件
        var file_name = "./page" + URL;
        fs.readFile(file_name,function (err,data) {
            if (err){
                console.log(err);
                res.write("404")
            }else {
                console.log(data);
                res.write(data)
            }
            res.end();
        })
    }

}
})
server.listen(8080);































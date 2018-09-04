const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const urlLib = require("url");
var json = {};

const server = http.createServer(function (req,res) {
    if (req.url!="/favicon.ico") {
        // post
        var str = "";
        req.on("data", function (haha) {
            str += haha;
        })
        req.on("end", function () {
            const POST = queryString.parse(str);
            var obj = urlLib.parse(req.url, true);
            const URL = obj.pathname;
            const GET = obj.query;
        })
        //文件请求
        //注册
        if (URL == "/user") {
            switch (GET.act) {
                case "reg"://注册
                    if (json[GET.user]) {
                        res.write('{"ok":false,"msg":"用户已存在"}')
                    } else {
                        json[GET.user] = GET.pass;
                        res.write('{"ok":"true","msg":"注册成功"}')
                    }
                    break;
                case "longin"://登录
                    if (json[GET.user] == undefined) {
                        res.write('{"ok":"false","msg":"用户不存在"}')
                    } else if (json[GET.user] != GET.pass) {
                        res.write('{"ok":"false","msg":"密码错误"}')
                    } else {
                        res.write('{"ok":"true","msg":"登录成功"}')
                    }
                    break;
                default :
                    res.write("接口无效")
            }
            res.end();
        } else {
            var file_name = "./page" + URL;
            fs.readFile(file_name, function (err, data) {
                if (err) {
                    res.write("404");
                } else {
                    res.write(data);
                }
                res.end();
            })

        }
        //登录
    }
})
server.listen(8080);
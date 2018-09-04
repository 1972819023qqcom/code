const http=require("http");//第一步引入内部模块
// const http=require("./http");//外部模块

// 第二步 创建一个服务器
http.createServer(function (request,response) {
    // request请求
    // response响应
    console.log("有人访问了");
    response.write("页面内容");
    response.end();
}).listen(8080);

// 第三步 监听服务器 监听某个端口


// http.createServer(function (req,res) {
// })
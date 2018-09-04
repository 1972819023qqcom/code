const http = require("http");
const  queryString = require("querystring");
const urlLib = require("url")
var Server = http.createServer(function (req,res) {
    // console.log(req.url);
    var str = "";
    var a=0;
    req.on("data",function (hah) {//s数据到达一次就触发一次   //on相当于事件
        a++;
        console.log(a);
        // console.log(`第${a++}次完成`);
        str = str+hah;
    })
    req.on("end",function () {  //数据传输完毕才触发
        // console.log(str);
        const POST = queryString.parse(str);
        // console.log(POST);
    })




    res.end();
})
Server.listen(8090);

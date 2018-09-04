const express = require("express");
// const  cookieParser = require("cookie-parser");
var server = express();
server.listen(8080);
res.secrer = "ashfskkfksdjksjfkdkjfkdj";
server.use("/",function (req,res) {
    res.cookie("admin","12345",{maxAge:1000*60*60*24*30});
    res.cookie("admin1","123456",{maxAge:1000*60*60*24*30});
    res.cookie("admin2","1234567",{path:"/aaa",maxAge:1000*60*60*24*30,signed:true});

    console.log(req.cookies);
    res.send("ok");
    res.end();
})







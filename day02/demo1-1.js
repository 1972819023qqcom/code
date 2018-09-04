const http = require("http");
const queryString  = require("querystring");
var Server = http.createServer(function (req,res) {
    console.log(req.url);
    var arr = req.url.split("?");
    const URL = arr[0];
    var json = queryString.parse(arr[1]);

    console.log(URL);
    console.log(json);

    // res.write("ok");
    res.end();
})
Server.listen(8090);

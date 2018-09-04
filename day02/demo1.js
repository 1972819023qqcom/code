const http = require("http");
var Server = http.createServer(function (req,res) {
    console.log(req.url);
    var arr = req.url.split("?");
    const URL = arr[0];
    const json = {};
    console.log(json["user"]);
    json["age"] = "18";
    var arr1 = arr[1].split("&");
    for (var i = 0; i < arr1.length; i++) {
         var arr2=arr1[i].split("=");
        console.log(arr2[0]);
        console.log(arr2[1]);
        json[arr2[0]]=arr2[1];
    }
    console.log(URL);
    console.log(json);

    // res.write("ok");
    res.end();
})
Server.listen(8090);

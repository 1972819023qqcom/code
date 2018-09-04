const urlLib = require("url");
var obj = urlLib.parse("https://www.baidu.com/aaa?name=xiao&pass=12345&age=18")
console.log(obj.pathname);
console.log(obj.query);
const queryString  = require("querystring");
var json = queryString.parse("user=admin&pass=111&age18&sex=nan");
console.log(json);
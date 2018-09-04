const queryString = require("querystring");
module.exports = function () {
    return function (req,res,next) {
        var str = "";
        req.on("data",function (haha) {
            str+=haha;
        })
        req.on("end",function () {
            // req.body=str;
            req.body=queryString.parse(str);
            next();
        })
    }
}




























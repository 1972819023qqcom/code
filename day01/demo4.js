//怎么读取文件//fs 模块提供了一些 API，用于以一种类似标准 POSIX 函数的方式与文件系统进行交互。
const fs=require("fs");

/*readFile（）异步读取文件
异步：比如有多件事情，可以同时进行
同步：比如有多件事情，得一件一件得来，前一件事没有完成，后一件事就无法进行
* writeFile（） 写入文件  自动创建文件，写入内容*/

fs.readFile("a.txt",function (err,data) {
    if (err){
        console.log(err);
    } else{
        // console.log(data);//<Buffer 31 32 33 34 35 36 37 38 39 30 6c 6b 6a 68 67 66 64>
        console.log(data.toString());//1234567890lkjhgfd //与a.txt文件内容相同
    }
})
//写入文件
fs.writeFile("b.txt","天天11",function (err) {
    if (err){
        console.log(err)
    } else{
        console.log("写入成功")
    }
})

//express_demo.js 文件
var express = require('express');
var app = express();
var path = require("path");
var fs = require("fs");

app.use(express.static('/data/resources/docs'));


app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   
   console.log(response);
   res.end(JSON.stringify(response));
}) 

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var user = data["user1"] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
})


 
var server = app.listen(80, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})

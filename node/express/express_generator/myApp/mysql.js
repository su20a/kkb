const express=require("express");
const mysql=require("mysql");

var app=express();

//连接数据库
var db=mysql.createConnection({host: "49.234.67.31",
							port: "3306",
							user: "su20a",
							password: "SJf203502",
							database: "test"});
//2.发送请求(查询)
db.query("show databases",function(err,data){
	if(err){
		console.log("数据库访问出错",err);
	}else{
		console.log(data);
	}
})

app.get("/",function(req,res){
	res.send("express");
});

app.listen(8000);
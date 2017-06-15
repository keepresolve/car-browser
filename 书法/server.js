var fs=require("fs");
var http=require("http");
var url=require("url")
var path=require("path")
var mime=require("./mime.js")

var server=http.createServer(function(req,res){
  var pathname=url.parse(req.url).pathname
  console.log(url.parse(req.url))
  // console.log(pathname)
  var ext=path.extname(pathname).slice(1)
  if(ext=="ico"){
  	return
  }
  var con=mime.types[ext]
  fs.exists(__dirname+pathname,function(ex){
  	if(ex){
  		console.log("ok")
  	  fs.readFile(__dirname+pathname,function(err,data){
  	  	res.writeHeader(200,{"Content-Type":con+";charset=utf-8","Access-Control-Allow-Origin":"*"})
  		res.end(data)
  	  })
  		
  	}
  	else{
  		console.log("not found")
  	}
  })
 })

server.listen(9991,function(){
	console.log(9991)
});

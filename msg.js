

exports.sendJson=function(req,resp,data) {
	resp.header("Access-Control-Allow-Origin", "*");
  resp.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  resp.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  resp.writeHead(200,{"Content-Type":"application/json"});
	if(data){
		resp.write(JSON.stringify(data));	
	}
	resp.end();
}

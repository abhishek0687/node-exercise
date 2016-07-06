var express = require('express');
var bodyParser = require('body-parser');
var msg = require('./msg');
var reqREST = require('requestREST');

var app = express();

app.listen(3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




app.get('/character/:name',function(req,resp){
	var name = req.params.name;
	for(var i=0; i<reqREST.peopleData.length;i++){
		if(reqREST.peopleData[i].name == name){
			msg.sendJson(req,resp,reqREST.peopleData[i]);
			break;
		}
	}
})



app.get('/characters',function(req,resp){

	
})

app.get('/planetresidents',function(req,resp){
	var planetResidentsData =[];
  for(var i=0; i<reqREST.plnetData.length;i++){
  	var resArr = [];
  	for(var j=0;j<reqREST.plnetData[i].residents.length;j++)
  		resArr.push(peopleData(reqREST.plnetData[i].residents[j].replace ( /[^\d.]/g, '' )).name);
   	}
   	var obj = {reqREST.plnetData[i].name:resArr};
   	planetResidentsData.push(obj);
  }
  msg.sendJson(req,resp,planetResidentsData);

})


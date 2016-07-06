var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var msg = require('./msg');

var app = express();

app.listen(3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var peopleData;
var plnetData;
request('http://swapi.co/api/people/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        peopleData = body.results;
		}
})

request('http://swapi.co/api/planets', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        plnetData = body.results;
		}
})




app.get('/character/:name',function(req,resp){
	var name = req.params.name;
	for(var i=0; i<peopleData.length;i++){
		if(peopleData[i].name == name){
			msg.sendJson(req,resp,peopleData[i]);
			break;
		}
	}
})



app.get('/characters',function(req,resp){

	
})

app.get('/planetresidents',function(req,resp){
	var planetResidentsData =[];
  for(var i=0; i<plnetData.length;i++){
  	var resArr = [];
  	for(var j=0;j<plnetData[i].residents.length;j++)
  		resArr.push(peopleData(plnetData[i].residents[j].replace ( /[^\d.]/g, '' )).name);
   	}
   	var obj = {plnetData[i].name:resArr};
   	planetResidentsData.push(obj);
  }
  msg.sendJson(req,resp,planetResidentsData);

})


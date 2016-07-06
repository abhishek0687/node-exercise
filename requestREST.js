var request = require('request');


request('http://swapi.co/api/people/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        exports.peopleData = body.results;
		}
})

request('http://swapi.co/api/planets', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        exports.plnetData = body.results;
		}
})
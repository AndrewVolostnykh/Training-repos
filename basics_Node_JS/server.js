var express = require('express');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var artists = [
	{
		id:1,
		name:'FunFurMob'
	},
	{
		id:2,
		name:'psycho-diller glIBERTINE'
	},
	{
		id:3,
		name:'Rammstein'
	}
];

app.listen(3001, function(){
	console.log('3001:api started');
})

app.get('/nodepart', function(req, res){
	res.send('hello api!');
})

app.get('/artists', function(req, res){
	res.send(artists);
})

app.get('/artists/:id', function(req, res){
	console.log(req.params);
	var artist = artists.find(function (artist) {
		return artist.id === Number(req.params.id)
	});

	res.send(artist);
})

app.post('/artists', function(req, res){
	var artist = {
		id:Date.now(),
		name:req.body.name
	};
	artists.push(artist);
	console.log(req.body);
	res.send(artist);
})

app.put('/artists/:id', function(req, res){
		var artist = artists.find(function (artist) {
		return artist.id === Number(req.params.id)
	});

	artist.name = req.body.name;
	res.send(artist);
})

app.delete('/artists/:id', function(req, res){
	artists = artists.filter(function (artist){
		return artist.id !== Number(req.params.id);
	})

	res.sendStatus(200);
})


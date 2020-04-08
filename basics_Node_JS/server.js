var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var app = express();
var db;

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


app.get('/nodepart', function(req, res){
	res.send('hello api!');
})

// show all artists
app.get('/artists', function(req, res){
	db.collection('artists').find().toArray(function(err, docs){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}

		res.send(docs);
	})
})
// show exactly artist selected by id
app.get('/artists/:id', function(req, res){
	db.collection('artists').findOne({_id: ObjectID(req.params.id) }, function(err, doc){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}

		res.send(doc);
	})
})

//add new artist
app.post('/artists', function(req, res){
	var artist = {
		name:req.body.name
	};

	db.collection('artists').insert(artist, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(artist);
	})
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

MongoClient.connect('mongodb://localhost:20100/artists', function(err, database){
	if(err){
		return console.log(err);
	}

	db = database.db('artists');

	app.listen(3001, function(){
		console.log('Use localhost:3001 to connect to application.\n Mongodb working on 20100 port. \n Application started');
	})
})
var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var db = require('./db');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/nodepart', function(req, res){
	res.send('hello api!');
})

// show all artists
app.get('/artists', function(req, res){
	db.get().collection('artists').find().toArray(function(err, docs){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}

		res.send(docs);
	})
})
// show exactly artist selected by id
app.get('/artists/:id', function(req, res){
	db.get().collection('artists').findOne({_id: ObjectID(req.params.id) }, function(err, doc){
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

	db.get().collection('artists').insert(artist, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(artist);
	})
})

app.put('/artists/:id', function(req, res){
	db.get().collection('artists').update(
		{ _id: ObjectID(req.params.id) },
		{ $set:{name: req.body.name} },
		{upsert:false, multi:false},
		function (err, result){
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
		}
	)
})

app.delete('/artists/:id', function(req, res){
	db.get().collection('artists').deleteOne(
		{ _id: ObjectID(req.params.id) },
		function (err, result){
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
		}
	)
})

db.connect('mongodb://localhost:20100/artists', function(err){
	if(err){
		return console.log(err);
	}

	app.listen(3001, function(){
		console.log('==================================================\nApplication started port:3001');
	})
})
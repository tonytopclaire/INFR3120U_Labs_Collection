var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var fs = require ("fs");
var express =  require("express");
var bodyParser = require('body-parser');
var app = express();


// image upload
var multer = require('multer');
var upload = multer({ dest: '/temp/' });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(__dirname));

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", '*'); //<-- you can change this with a specific url like http://localhost:4200
	res.header("Access-Control-Allow-Credentials", true);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
	next();
});

// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/index.html');
// });

app.post('/update/', upload.single('file'),  function (req, res) {
	console.log(req.body);
	MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
		
		dbo = db.db("mydb");
		dbo.collection("webpage").insertOne(req.body,  function (err, res) {
			if  (err)  throw  err;
			console.log('Errors!');
			db.close();
		});

	});

	var file = __dirname + "/" + req.file.originalname;
	fs.readFile(req.file.path, function (err, data) {
		fs.writeFile(file, data, function (err) {
			if (err) {
				console.error(err);
				response = {
					message: 'Sorry, file couldn\'t be uploaded.',
					filename: req.file.originalname
					//filename: req.file.filename
				};
			} else {
				response = {
					message: 'File uploaded successfully',
					filename: req.file.originalname
				};
			}
			res.end(JSON.stringify(response));
		});
	});
	// fs.writeFile('myfile.txt', JSON.stringify(req.body), function (err) {
	//         if (err) throw err;
	//         console.log('Saved!');
	//         res.send("Your data is saved.")
	//       });
});

app.get('/data/', function (req, res) {
	MongoClient.connect(url,  function (err, db) {
		if  (err)  throw  err;
		dbo = db.db("mydb");
		dbo.collection("webpage").findOne({},  function (err, result) {
			if  (err)  throw  err;
			console.log(result);
			res.json(result);
			db.close();
		});
	});


	//   fs.readFile('myfile.txt', 'utf8', function(err, contents) {
	//   console.log(contents);
	//   res.json(JSON.parse(contents));
	// });
});

app.listen(8080);

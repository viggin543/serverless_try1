import express from 'express';
import {IncomingForm} from 'formidable';
import getConnection from './mongoGonnectionHandler'


const app = express();

app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*']);
	next();
})
.get('/banana', (req, res) => {
	res.send(JSON.stringify({ banana: "this is fun !" }));
})
.get('/tapuz', (req, res) => {
	res.send(JSON.stringify({ banana: "life is shit and then you die ! " }));
})
.post('/article', (req, res) => {
	var form = new IncomingForm();
	form.parse(req, async (err, fields, files) => {
		res.writeHead(200, {'content-type': 'application/json'});
		const db = await getConnection();    
		db.collection('articales').insert({
			...fields,
			id:v1(),
			authorId:v1(),
			date:new Date()
		});
		res.end();
	});
});

module.exports = app;

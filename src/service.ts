import * as express from 'express';
import {IncomingForm} from 'formidable';
import {getConnection} from './mongoGonnectionHandler'
import {v1} from 'uuid';

const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
})
    .get('/banana', (req, res) => {

        res.send(JSON.stringify({banana: "this is fun !"}));
    })
    .get('/tapuz', (req, res) => {
        res.send(JSON.stringify({banana: "life is shit and then you die ! "}));
    })
    .get('/data', async (req, res) => {
        const db = await getConnection();
        res.send(await db.collection('articales')
            .find({}, {limit: 10}).toArray());

    })
    .post('/article', (req, res) => {
        var form = new IncomingForm();
        form.parse(req, async (err, fields, files) => {
            res.writeHead(200, {'content-type': 'application/json'});
            let db = await getConnection();

            await db.collection('articales').insert({
                ...fields,
                id: v1(),
                authorId: v1(),
                date: new Date()
            }).catch(e => console.log(e));
            res.end();
        });
    });
module.exports = app;
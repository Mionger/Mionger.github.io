const database = require('./database.js');
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https')
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const router = express.Router();
router.use((req, res, next) => {
    // 输出记录信息到终端
    console.log(req.method, req.url);
    // 继续路由处理
    next();
});

app.use(express.static('index'));
router.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
});

app.use(express.static('index'));
router.get('/reg', (req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(fs.readFileSync('./index.html').toString('utf8'));
    res.sendFile('./reg.html', {root: __dirname});
    // res.status(200).send('home page!');
    // res.status(200).send('Welcome to Safety Land!');
});

app.use(express.static('register'));
router.get('/reg', (req, res) => {
    res.sendFile('./reg.html', {root: __dirname});
});

// app.use('/', router);
// https.createServer(options, app).listen(443, () => {
//     console.log('Https server listening on port ' + 443);
// });
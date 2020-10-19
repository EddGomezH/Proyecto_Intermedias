'use strict';
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
let cors = require('cors');
const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'XXXXX',
    user: 'XXXXX',
    password: 'XXXXX',
    database: 'XXXXX',
    port: 0
});
connection.connect();

const prueba = require('./endpoints/prueba')(app,connection);

app.listen(3000, () => console.log('escuchando en puerto 3000'));
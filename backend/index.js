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
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'intermedias',
    port: 3306
});
connection.connect();

const prueba = require('./endpoints/prueba')(app,connection);
const perfil = require('./endpoints/perfil')(app,connection);
const perfil_modificar = require('./endpoints/perfil_modificar')(app,connection);
const login = require('./endpoints/login')(app,connection);

app.listen(3000, () => console.log('escuchando en puerto 3000'));
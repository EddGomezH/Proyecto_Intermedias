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
    password: 'edestroyer007',
    database: 'intermedias',
    port: 3306
});
connection.connect();

const prueba = require('./endpoints/prueba')(app,connection);
const registrar_cliente = require('./endpoints/registrar_cliente')(app,connection);
const registrar_venta = require('./endpoints/registrar_venta')(app,connection);
const graficas = require('./endpoints/graficas')(app,connection);
const sede_encargado = require('./endpoints/sede_encargado')(app,connection);
const registro_rol = require('./endpoints/registro_rol')(app,connection);

app.listen(3000, () => console.log('escuchando en puerto 3000'));
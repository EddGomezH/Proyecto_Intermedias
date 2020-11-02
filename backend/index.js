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
    password: 'hola1234',
    database: 'SistemaBodegas'
});
connection.connect();

const prueba = require('./endpoints/prueba')(app,connection);
const ObtenerProductos = require('./endpoints/GetProductos')(app,connection);
const PostProductos = require('./endpoints/PostLog')(app,connection);
const GetBodegas = require('./endpoints/GetBodegas')(app,connection);
const PostTransferencia= require('./endpoints/PostTransferencia')(app,connection);
const PostDtrans= require('./endpoints/PostDTrans')(app,connection);
const GetContra= require('./endpoints/RContrasenia')(app,connection);
const GetTransE= require('./endpoints/TransExternas')(app,connection);
const GetBodegaSede= require('./endpoints/GetBodegasSede')(app,connection);
const GetSede= require('./endpoints/GetSede')(app,connection);
const GetRepartidores= require('./endpoints/GetRepartidores')(app,connection);
const PostSolicitud= require('./endpoints/PostSolicitud')(app,connection);
const GetTransI= require('./endpoints/GetTransferenciasI')(app,connection);

app.listen(3000, () => console.log('escuchando en puerto 3000'));
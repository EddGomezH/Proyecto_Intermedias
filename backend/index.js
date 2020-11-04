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
const perfil = require('./endpoints/perfil')(app,connection);
const perfil_modificar = require('./endpoints/perfil_modificar')(app,connection);
const registrar_cliente = require('./endpoints/registrar_cliente')(app,connection);
const registrar_venta = require('./endpoints/registrar_venta')(app,connection);
const graficas = require('./endpoints/graficas')(app,connection);
const sede_encargado = require('./endpoints/sede_encargado')(app,connection);
const registro_rol = require('./endpoints/registro_rol')(app,connection);
const ObtenerProductos = require('./endpoints/GetProductos')(app,connection);
const PostProductos = require('./endpoints/PostLog')(app,connection);
const GetBodegas = require('./endpoints/GetBodegas')(app,connection);
const PostTransferencia= require('./endpoints/PostTransferencia')(app,connection);
const PostDtrans= require('./endpoints/PostDTrans')(app,connection);
const GetTransE= require('./endpoints/TransExternas')(app,connection);
const GetBodegaSede= require('./endpoints/GetBodegasSede')(app,connection);
const GetSede= require('./endpoints/GetSede')(app,connection);
const GetRepartidores= require('./endpoints/GetRepartidores')(app,connection);
const PostSolicitud= require('./endpoints/PostSolicitud')(app,connection);
const GetTransI= require('./endpoints/GetTransferenciasI')(app,connection);

const login = require('./endpoints/login')(app,connection);
const login_R = require('./endpoints/login_rep')(app,connection);

const get_ordenes_v = require('./endpoints/get_OV')(app,connection);
const get_ordenes_o = require('./endpoints/get_OT')(app,connection);

const set_estado_ordenes_v = require('./endpoints/set_estado_OV')(app,connection);
const set_estado_ordenes_t = require('./endpoints/set_estado_OT')(app,connection);

const GetContra= require('./endpoints/RContrasenia')(app,connection);
app.listen(3000, () => console.log('escuchando en puerto 3000'));
module.exports = (app,connection) => {
    app.get('/get_datos_ventas', async (req,res) => {
        connection.query(`SELECT id_venta,fk_nit,nombre,fecha_facturacion,fecha_entrega,estado,total FROM VENTA JOIN USUARIO ON (id_usuario=fk_usuario) AND (estado=0) AND (fecha_entrega IS NOT NULL);`,function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            }else {
                res.send('Error');
            }
        });
    });
}
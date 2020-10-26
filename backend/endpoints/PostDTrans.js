module.exports = (app,connection) => {
    app.post('/DetalleTransferencia', async (req,res) => {
        var id_producto = req.body.Id_Producto;
        var id_trans = req.body.Id_Trans;
        var cantidad= req.body.Cantidad;
        connection.query(`insert into Producto_Trans(Id_Producto, Id_Trans, Cantidad) values ('${parseInt(id_producto)}','${parseInt(id_trans)}','${parseInt(cantidad)}');`,function (err, rows, fields) {
            if (!err) {
                res.send('{"res":200}');
            }else {
                console.log(err);
                res.send('{"res":405}');
            }
        });
    });
}
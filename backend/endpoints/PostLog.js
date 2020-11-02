module.exports = (app,connection) => {
    app.post('/LogProductos', async (req,res) => {
        var id_producto = req.body.Id_Producto;
        var id_bodega = req.body.Id_Bodega;
        var cantNueva = req.body.CantidadNueva;
        var motivo = req.body.Motivo;
        var id_usuario= req.body.Id_Usuario;
        var datetime = new Date();

        connection.query(`select * from LogProducto where Id_Producto='${parseInt(id_producto)}' and Id_Bodega='${parseInt(id_bodega)}' order by Id_Log desc;`,function (err, rows, fields) {
            if (!err) {
                if(rows.length==0){
                    connection.query(`insert into LogProducto (Id_Producto, CantidadAntigua, CantidadNueva, Motivo,Id_Usuario, Id_Bodega,Fecha) values ('${parseInt(id_producto)}',0,'${parseInt(cantNueva)}','${motivo}','${parseInt(id_usuario)}','${parseInt(id_bodega)}','${datetime.toISOString().slice(0,10)}');`,function (err2, rows2, fields) {
                        if (!err2) {
                            res.send('{"res":200}');
                        }else{
                            res.send('{"res":405}');
                        }
                    });
                }else{
                    connection.query(`insert into LogProducto (Id_Producto, CantidadAntigua, CantidadNueva, Motivo,Id_Usuario, Id_Bodega,Fecha) values ('${parseInt(id_producto)}','${parseInt(rows[0].CantidadNueva)}','${parseInt(cantNueva)}','${motivo}','${parseInt(id_usuario)}','${parseInt(id_bodega)}','${datetime.toISOString().slice(0,10)}');`,function (err2, rows2, fields) {
                        if (!err2) {
                            res.send('{"res":200}');
                        }else{
                            res.send('{"res":405}');
                        }
                    });
                }
            }else {
                res.send('Error');
            }
        });
    });
}
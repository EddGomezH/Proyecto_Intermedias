let i=0;
module.exports = (app,connection) => {
    app.post('/Solicitud', async (req,res) => {
        
        for (i = 0; i < req.body.Productos.length; i++) {
            await new Promise((resolve, reject) => {
                connection.query(`select Id_Log,Id_Producto, Id_Bodega, CantidadNueva from LogProducto 
            where Id_Producto='${req.body.Productos[i].Id_Producto}' and Id_Bodega='${req.body.Id_Bodega}' 
            order by Id_Log desc limit 1;`, function (err, rows, fields) {
                    //console.log(i);
                    if (!err) {
                        //console.log(rows);
                        if (rows.length != 0) {
                            if (rows[0].CantidadNueva >= req.body.Productos[i].Cantidad) {
                                resolve();
                            } else {
                                console.log('No alcanza');
                                res.send('{"res":700}');
                            }
                        } else {
                            console.log('No alcanza');
                            res.send('{"res":700}');
                        }
                    } else {
                        console.log(err);
                        res.send('{"res":405}');
                    }

                });
            });
        }

        for (i = 0; i < req.body.Productos.length; i++) {
            await new Promise((resolve, reject) => {
                connection.query(`select * from LogProducto where Id_Producto='${parseInt(req.body.Productos[i].Id_Producto)}' and Id_Bodega='${parseInt(req.body.Id_Bodega)}' order by Id_Log desc;`, function (err, rows, fields) {
                    if (!err) {
                        if (rows.length == 0) {
                            res.send('{"res":405}');
                        } else {
                            var cantNueva = parseInt(rows[0].CantidadNueva)-req.body.Productos[i].Cantidad;
                            var motivo = "Transferencia de producto a bodega cod: "+req.body.Productos[i].Id_Bodega;
                            var datetime = new Date();
                            connection.query(`insert into LogProducto (Id_Producto, CantidadAntigua, CantidadNueva, Motivo,Id_Usuario, Id_Bodega,Fecha) values ('${parseInt(req.body.Productos[i].Id_Producto)}','${parseInt(rows[0].CantidadNueva)}','${parseInt(cantNueva)}','${motivo}','${parseInt(req.body.Id_Encargado)}','${parseInt(req.body.Id_Bodega)}','${datetime.toISOString().slice(0,10)}');`,function (err2, rows2, fields) {
                                if (!err2) {
                                    resolve();
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

        await new Promise((resolve, reject) => {
            connection.query(`insert into Orden (Id_Trans,Id_Encargado,Id_Repartidor,Entregado) values ('${req.body.Id_Trans}','${req.body.Id_Encargado}','${req.body.Id_Repartidor}','0');`, function (err2, rows2, fields) {
                if (!err2) {
                    resolve();
                } else {
                    console.log(err2);

                    res.send('{"res":405}');
                }
            });
        });

        await new Promise((resolve, reject) => {
            connection.query(`update Transferencia set Aceptado= 1 where Id_Trans='${req.body.Id_Trans}';`, function (err2, rows2, fields) {
                if (!err2) {
                    res.send('{"res":200}')
                    resolve();
                } else {
                    console.log(err2);
                    res.send('{"res":405}');
                }
            });
        });

        
    });
}
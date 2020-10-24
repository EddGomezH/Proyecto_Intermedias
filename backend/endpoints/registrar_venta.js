module.exports = (app,connection) => {
    app.get('/get_productos', async (req,res) => {
        let sql = `select * from Producto`;
        connection.query(sql,function (err, rows, fields) {
            if (!err) {
                res.status(200).send(rows);
            }else {
                res.send({"msg":"No hay productos"});
            }
        });
    });

    app.post('/registrar_venta', (req,res) => {
        let { nit,id_vendedor,fecha_facturacion,fecha_entrega,productos} = req.body;
        let total=0,precio_producto=0,descuento=0,estado=0,ganancia_empresa=0,ganancia_repartidor=0,id_venta=0;
        var detalle = JSON.parse(JSON.stringify(productos));
        var splitted = fecha_facturacion.split("/", 3);
        fecha_facturacion=splitted[2]+'-'+splitted[1]+'-'+splitted[0];
        for(let i=0; i<detalle.length; i++){
            descuento = detalle[i].Precio * (detalle[i].descuento/100); 
            precio_producto = detalle[i].Precio - descuento;
            total+= precio_producto * detalle[i].cantidad;
        }
        if(fecha_entrega.length == 0){
            estado=1;
            fecha_entrega=null;
        }else{
            ganancia_empresa = total*0.09;
            ganancia_repartidor = total*0.01;
            total+=ganancia_repartidor+ganancia_empresa;
        }
        let sql = `insert into Venta(FK_NIT,FK_Usuario,Fecha_Facturacion,Fecha_Entrega,Estado,Total,Ganancia_Empresa,Ganancia_Repartidor) values(?,?,?,?,?,?,?,?)`;
        let data = [nit,Number(id_vendedor),fecha_facturacion,fecha_entrega,estado,total,ganancia_empresa,ganancia_repartidor];
        connection.query(sql,data,function (err, rows, fields) {
            if (!err) {
                console.log('Venta Realizada');
                res.send({"msg":"Venta ok"});     
            }else {
                console.log(err);
                res.send({"msg":"No se realizo la venta"});
            }
        });
        sql = `select Id_Venta from Venta ORDER BY Id_Venta DESC LIMIT 1`;
        connection.query(sql,function (err, rows, fields) {
            if (!err) {
                id_venta=rows[0].Id_Venta;   
                for(let i=0; i<detalle.length; i++){
                    sql = `insert into Detalle_Venta(FK_Venta,FK_Producto,Cantidad,Total) values(?,?,?,?)`;
                    let Id_Producto=detalle[i].Id_Producto;
                    let Cantidad=detalle[i].cantidad;
                    let total_parcial=Cantidad*detalle[i].Precio;
                    data = [id_venta,Id_Producto,Cantidad,total_parcial];
                    connection.query(sql,data,function (err, rows, fields) {    
                        if(!err){
                            console.log('Producto Guardado en Detalle');     
                        }else {
                            console.log(err);
                            res.send({"msg":"No se realizo la venta"});
                        }
                    });
                    sql = `SELECT * FROM logproducto WHERE Id_Producto=? ORDER BY Id_Log DESC LIMIT 1`;
                    data = [Id_Producto];
                    connection.query(sql,data,function (err, rows, fields) {    
                        if(!err){
                            if(rows[0].CantidadNueva>detalle[i].cantidad){
                                let nuevoinv=rows[0].CantidadNueva-detalle[i].cantidad;
                                sql = `insert into logproducto(Id_Producto,CantidadAntigua,CantidadNueva,Motivo,Id_Usuario,Id_Bodega,Fecha) values(?,?,?,?,?,?,?)`
                                data = [Id_Producto,rows[0].CantidadNueva,nuevoinv,'Venta de Producto',Number(id_vendedor),Number(rows[0].Id_Bodega),fecha_facturacion];
                                connection.query(sql,data,function (err, rows, fields) {    
                                    if(!err){
                                        console.log('Producto Actualizado del Inventario');     
                                    }else {
                                        console.log(err);
                                        res.send({"msg":"No se realizo la venta"});
                                    }
                                });
                            }else{
                                console.log('Producto insuficiente para compra');
                            }
                        }else {
                            console.log(err);
                            res.send({"msg":"No se realizo la venta"});
                        }
                    });
                }
            }else {
                console.log(err);
                res.send({"msg":"No se realizo la venta"});
            }
            
        });
    });
}
module.exports = (app,connection) => {
    app.post('/TransExternas', async (req,res) => {
        connection.query(`select Transferencia.Id_Trans,Sede.Alias as 'NSede',Producto.Nombre as 'NProducto', Producto.Id_Producto,Cantidad,Usuario.Nombre as 'Encargado'from Producto_Trans
        inner join Transferencia on (Producto_Trans.Id_Trans=Transferencia.Id_Trans)
        inner join Usuario on (Transferencia.Id_Usuario=Usuario.Id_Usuario)
        inner join Producto on (Producto.Id_Producto=Producto_Trans.Id_Producto)
        inner join Sede on (Sede.Id_Sede=Transferencia.Id_Sede) where  Tipo=0 and Aceptado=false;
        `,function (err, rows, fields) {
            if (!err) {
                 ss=[];
                
                var anterior=-1;
                
                for(var i=0;i<rows.length;i++){

                        jsonData = {
                            Id_Trans: 1,
                            NSede: 'Central',
                            Encargado: 'Encargado1',
                            Productos: []
                        };
                        productos = {
                            NProducto: 'Audifonos',
                            Cantidad: 3
                        };
                        
                        jsonData.Id_Trans = rows[i].Id_Trans;
                        jsonData.NSede = rows[i].NSede;
                        jsonData.Encargado = rows[i].Encargado;
                        anterior=rows[i].Id_Trans;
                        //console.log(rows[i].Id_Trans);

                        for(;i<rows.length;i++){
                            
                            if(rows[i].Id_Trans==anterior){
                                //console.log(rows[i].Id_Trans);
                                productosr = {
                                    Id_Producto:0,
                                    NProducto: 'Audifonos',
                                    Cantidad: 3
                                };
                                productosr.Id_Producto= rows[i].Id_Producto;
                                productosr.NProducto = rows[i].NProducto;
                                productosr.Cantidad = rows[i].Cantidad;
                                jsonData.Productos.push(productosr);
                            }else{
                                i--;
                                break;
                            }
                        }
                        ss.push(jsonData);
                    //console.log(ss[0].Productos);
                }
                //console.log(ss);
                res.send(ss);
            }else {
                //console.log(err);
                res.send('Error');
            }
        });
    });
}
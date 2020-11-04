module.exports = (app,connection) => {
    app.post('/registro_rol', async (req,res) => {
        let { dpi,nombre,fecha_nacimiento,correo,pass,id_encargado,vendedor,bodeguero,repartidor } = req.body; 
        let data = [dpi,nombre,fecha_nacimiento,correo,pass,id_encargado];
        connection.query(`insert into Usuario(DPI,Nombre,Fecha_Nacimiento,Correo,Contrasena,FK_Encargado) values(?,?,?,?,?,?)`,data,function (err, rows, fields) {
            if (!err) {
                connection.query(`SELECT Id_Usuario FROM Usuario ORDER BY Id_Usuario DESC LIMIT 1`,function (err, rows, fields) {
                    if (!err) {
                        let id_usuario=rows[0].Id_Usuario;
                        if(vendedor){
                            data = [id_usuario];
                            connection.query(`insert into Usuario_Rol(FK_Usuario,FK_Rol) values(?,1);`,data,function (err, rows, fields) {
                                if (!err) {
                                   console.log('Vendedor Registrado'); 
                                }else {
                                    res.send({"msg":"Error"});
                                }
                            });
                        }
                        if(bodeguero){
                            data = [id_usuario];
                            connection.query(`insert into Usuario_Rol(FK_Usuario,FK_Rol) values(?,2);`,data,function (err, rows, fields) {
                                if (!err) {
                                    console.log('Bodeguero Registrado');
                                }else {
                                    res.send({"msg":"Error"});
                                }
                            });
                        }
                        if(repartidor){
                            data = [id_usuario];
                            connection.query(`insert into Usuario_Rol(FK_Usuario,FK_Rol) values(?,3);`,data,function (err, rows, fields) {
                                if (!err) {
                                    console.log('Repartidor Registrado');
                                }else {
                                    res.send({"msg":"Error"});
                                }
                            });
                        }
                        if(vendedor || bodeguero || repartidor){
                            res.send({"msg":"Registro OK"});
                        }
                    }else {
                        res.send({"msg":"Error"});
                    }
                });
            }else {
                res.send({"msg":"Error"});
            }
        });
    });
}
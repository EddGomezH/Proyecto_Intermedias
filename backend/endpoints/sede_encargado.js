module.exports = (app,connection) => {
    app.post('/registro_sede_encargado', async (req,res) => {
        let { alias,direccion,departamento,municipio,nombre,pass } = req.body;
        let data = [alias,direccion,departamento,municipio];
        connection.query(`insert into Sede(Alias,Direccion,Departamento,Municipio) value(?,?,?,?)`,data,function (err, rows, fields) {
            if (!err) {
                connection.query(`SELECT Id_Sede FROM Sede ORDER BY Id_Sede DESC LIMIT 1`,data,function (err, rows, fields) {
                    if (!err) {
                        let id_sede=rows[0].Id_Sede;
                        data = [nombre,pass,id_sede];
                        connection.query(`insert into Encargado(Nombre,Contrasena,FK_Sede) values(?,?,?);`,data,function (err, rows, fields) {
                            if (!err) {
                                res.send({"msg":"OK"});
                            }else {
                                res.send({"msg":"Error"});
                            }
                        });     
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
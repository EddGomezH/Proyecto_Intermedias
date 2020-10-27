module.exports = (app,connection) => {
    app.post('/perfil-datos', async (req,res) => {
        let { id } = req.body;
        let sql = "SELECT dpi,nombre,fecha_nacimiento,correo,contrasena,UR.FK_Rol from usuario U join usuario_rol UR ON U.id_usuario=UR.FK_Usuario WHERE id_usuario=?;";
        let data = [id];
        connection.query(sql,data,function (err, rows, fields) {
           // console.log(data); 
           // console.log('rows',rows);
            if (!err&&rows[0]!=null) {
                res.status(200).send({"msg":rows});
            }else {
                console.log(err);
                res.send({"msg":"Incorrecto"});
            }
        });
    });
}

module.exports = (app,connection) => {
    app.post('/login', async (req,res) => {
        let { email,password } = req.body;
        let sql = "SELECT id_usuario,nombre,UR.FK_Rol from usuario U join usuario_rol UR ON U.id_usuario=UR.FK_Usuario WHERE (U.Correo = ?) AND (U.Contrasena= ?);";
        let data = [email,password];
        connection.query(sql,data,function (err, rows, fields) {
            console.log(data);
            console.log('rows',rows);
            if (!err&&rows[0]!=null) {
                res.status(200).send({"msg":rows});
            }else {
                console.log(err);
                res.send({"msg":"Incorrecto"});
            }
        });
    });
}
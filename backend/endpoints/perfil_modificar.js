module.exports = (app,connection) => {
    app.post('/perfil', async (req,res) => {
        console.log("modificando")
        let { dpi,nombre,fecha,email,password,id_usuario } = req.body;
        let sql = "UPDATE usuario SET DPI = ?, Nombre = ?, Fecha_Nacimiento = ?, Correo = ?, Contrasena= ? WHERE Id_Usuario=?;";
        let data = [dpi,nombre,fecha,email,password,id_usuario];
        
        connection.query(sql, data, (error, results, fields) => {
            //console.log('error',error)
            //console.log('results',results)
            //console.log('fields',fields)

            if (!error) {
                res.status(200).send({"msg":"Correcto"});
            }else {
                console.log(error);
                res.send({"msg":"Incorrecto"});
            }
        });
    });
}

module.exports = (app,connection) => {
    app.post('/perfil', async (req,res) => {
        let { dpi,nombre,fecha,email,password } = req.body;
        let sql = "UPDATE usuario SET DPI = ?, Nombre = ?, Fecha_Nacimiento = ?, Correo = ?, Contrasena= ? WHERE Id_Usuario=3";;
        let data = [dpi,nombre,fecha,email,password];
        
        connection.query(sql, data, (error, results, fields) => {
            if (!error) {
                res.status(200).send({"msg":"Correcto"});
            }else {
                console.log(error);
                res.send({"msg":"Incorrecto"});
            }
        });

    });
}
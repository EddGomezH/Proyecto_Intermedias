module.exports = (app,connection) => {
    app.post('/registrar_cliente', async (req,res) => {
        let { nombre,nit,dpi,direccion,id_usuario } = req.body;
        let sql = `insert into Cliente(Nombre,NIT,DPI,Direccion,FK_Usuario) values(?,?,?,?,?)`;
        let data = [nombre,nit,dpi,direccion,id_usuario];
        connection.query(sql,data,function (err, rows, fields) {
            if (!err) {
                res.status(200).send({"msg":"Correcto"});
            }else {
                res.send({"msg":"Incorrecto"});
            }
        });
    });
}
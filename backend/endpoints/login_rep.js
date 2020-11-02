
module.exports = (app,connection) => {
    app.post('/login_repartidor', async (req,res) => {
        let { email,password } = req.body;
        let sql = "select id_encargado,nombre from encargado where (nombre=?) AND (contrasena=?);";
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
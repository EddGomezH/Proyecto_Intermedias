module.exports = (app,connection) => {
    app.post('/set_estado_ventas', async (req,res) => {
        let { id_venta } = req.body;
        let sql = "UPDATE venta SET estado=1 WHERE id_venta=?;";
        let data = [id_venta];
        console.log("modificando",id_venta)

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


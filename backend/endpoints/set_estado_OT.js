module.exports = (app,connection) => {
    app.post('/set_estado_transferencias', async (req,res) => {
        let { numero } = req.body;
        let sql = "UPDATE ORDEN SET Entregado=true where id_trans=?;";
        let data = [numero];
        console.log("modificando",numero)

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


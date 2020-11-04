module.exports = (app,connection) => {
    app.post('/get_datos_transferencias', async (req,res) => {
        let {id} = req.body;
        let sql = "SELECT O.id_trans AS numero,U.nombre AS usuario,S.Alias AS sede FROM ORDEN O JOIN TRANSFERENCIA T ON (O.id_trans=T.id_trans) AND (O.entregado=false) JOIN USUARIO U ON T.id_usuario=U.id_usuario JOIN SEDE S ON T.id_sede=S.id_sede WHERE O.id_repartidor=?";
        let data = [id];
        console.log(id);
        connection.query(sql,data,function (err, rows, fields) {
            console.log('rows',rows)
            console.log('Error',err)
            if (!err) {
                res.send(rows);
            }else {
                res.send('Error');
            }
        });
    });
}
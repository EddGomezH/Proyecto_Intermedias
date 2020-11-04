module.exports = (app,connection) => {
    app.post('/ObSede', async (req,res) => {
        var id_usuario = req.body.Id_Usuario;
        
        connection.query(`select FK_Sede from Encargado INNER JOIN usuario ON  usuario.FK_Encargado=encargado.Id_Encargado where Id_Usuario='${parseInt(id_usuario)}';`,function (err, rows, fields) {
            if (!err) {
                console.log(rows);
                res.send(rows);
            }else {
                console.log(err);
                res.send('{"res":405}');
            }
        });
    });
}
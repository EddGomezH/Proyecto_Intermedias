module.exports = (app,connection) => {
    app.post('/ObSede', async (req,res) => {
        var id_usuario = req.body.Id_Usuario;
        
        connection.query(`select Id_Encargado,FK_Sede from Encargado where Id_Encargado='${parseInt(id_usuario)}';`,function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            }else {
                console.log(err);
                res.send('{"res":405}');
            }
        });
    });
}
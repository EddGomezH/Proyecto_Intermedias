module.exports = (app,connection) => {
    app.post('/ObBodegaSede', async (req,res) => {
        var id_sede = req.body.Id_Sede;
        
        connection.query(`select * from Bodega where FK_Sede='${parseInt(id_sede)}';`,function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            }else {
                console.log(err);
                res.send('{"res":405}');
            }
        });
    });
}
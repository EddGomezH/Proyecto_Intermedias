module.exports = (app,connection) => {
    app.post('/Transferencia', async (req,res) => {
        var id_sede = req.body.Id_Sede;
        var id_usuario= req.body.Id_Usuario;
        connection.query(`insert into Transferencia (Tipo, Id_Usuario, Id_Sede) values ('${req.body.Tipo}','${parseInt(id_usuario)}','${parseInt(id_sede)}');`,function (err, rows, fields) {
            if (!err) {
                
                var trans=0;
                connection.query(`select Id_Trans from Transferencia order by Id_Trans desc;`,function (err, rows, fields) {
                    if(!err){
                        trans=rows[0].Id_Trans;
                        res.send('{"res":200, "trans":'+trans+'}');
                    }else{
                        res.send('{"res":405}'); 
                    }
                });
                
            }else {
                console.log(err);
                res.send('{"res":405}');
            }
        });
    });
}
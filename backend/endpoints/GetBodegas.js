module.exports = (app,connection) => {
    app.get('/Bodegas', async (req,res) => {
        connection.query(`select Id_Bodega,Nombre from Bodega;`,function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            }else {
                res.send('Error');
            }
        });
    });
}
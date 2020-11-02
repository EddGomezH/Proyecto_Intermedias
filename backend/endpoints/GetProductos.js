module.exports = (app,connection) => {
    app.get('/Productos', async (req,res) => {
        connection.query(`select * from Producto;`,function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            }else {
                res.send('Error');
            }
        });
    });
}
module.exports = (app,connection) => {
    app.get('/prueba', async (req,res) => {
        connection.query(`show tables`,function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            }else {
                res.send('Error');
            }
        });
    });
}
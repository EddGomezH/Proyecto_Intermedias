module.exports = (app,connection) => {
    app.get('/Repartidores', async (req,res) => {
        connection.query(`select Id_usuario,Usuario.Nombre from Usuario_Rol
        inner join Usuario on (Usuario.Id_Usuario = FK_Usuario)
        inner join Rol on (FK_Rol=Id_Rol)
        where Rol.Nombre='Repartidor';`,function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            }else {
                res.send('Error');
            }
        });
    });
}
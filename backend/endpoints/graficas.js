module.exports = (app,connection) => {

    app.get('/grafica_general', async (req,res) => {
        connection.query(`SELECT usuario.Nombre,Fecha_Facturacion,SUM(Total) as 'Total' FROM usuario_rol INNER JOIN rol ON rol.Id_Rol=usuario_rol.FK_Rol
        INNER JOIN usuario ON usuario.Id_Usuario=usuario_rol.FK_Usuario INNER JOIN venta ON venta.FK_Usuario=usuario.Id_Usuario 
        WHERE rol.Nombre='Vendedor' GROUP BY usuario.Nombre,Fecha_Facturacion`,function (err, rows, fields) {
            if (!err) {
                let lventas = [];
                let fechaconv;
                for(let i=0; i<rows.length; i++){
                    let venta = {
                        grafo: {
                            data:[],
                            label:''
                        },
                        fecha:''
                    }
                    if(i==0){
                        venta.grafo.data.push(Math.round(rows[i].Total));
                        venta.grafo.label=rows[i].Nombre;
                        fechaconv=new Date(rows[i].Fecha_Facturacion)
                        venta.fecha=fechaconv.toLocaleDateString();
                        lventas.push(venta);
                        for(let j=0; j<rows.length-1; j++){
                          lventas[i].grafo.data.push(0);  
                        }
                    }else{
                        lventas.push(venta);
                        for(let k=0; k<i; k++){
                            lventas[i].grafo.data.push(0);
                        }
                        lventas[i].grafo.data.push(Math.round(rows[i].Total));
                        lventas[i].grafo.label=rows[i].Nombre;
                        fechaconv=new Date(rows[i].Fecha_Facturacion)
                        lventas[i].fecha=fechaconv.toLocaleDateString();
                        for(let h=i; h<rows.length; h++){
                            lventas[i].grafo.data.push(0);
                        }
                    }
                }
                let reporte = {
                    ventas:[],
                    fechas:[]
                }
                for(let l=0; l<lventas.length; l++){
                    reporte.ventas.push(lventas[l].grafo);
                    reporte.fechas.push(lventas[l].fecha);
                }
                res.send(reporte);
            }else{
                res.send('Error');
            }   
        });
    });
}
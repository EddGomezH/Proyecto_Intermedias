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

    app.post('/filtrar_vendedor', async (req,res) => {
        let { nombre_vendedor,fecha_inicio,fecha_fin } = req.body;
        let lventas=[];
        let sql=`SELECT usuario.Nombre,Fecha_Facturacion,SUM(Total) as 'Total' FROM usuario_rol
        INNER JOIN rol ON rol.Id_Rol=usuario_rol.FK_Rol
        INNER JOIN usuario ON usuario.Id_Usuario=usuario_rol.FK_Usuario
        INNER JOIN venta ON venta.FK_Usuario=usuario.Id_Usuario 
        WHERE rol.Nombre='Vendedor' AND usuario.Nombre=? AND Fecha_Facturacion between ? AND ?
        GROUP BY usuario.Nombre,Fecha_Facturacion;`;
        let data = [nombre_vendedor,fecha_inicio,fecha_fin];
        connection.query(sql,data,function (err, rows, fields) {
            if(!err){
                for(let i=0; i<rows.length; i++){
                    let venta = {
                        grafo:{
                            data:[],
                            label:''
                        },
                        fecha:''
                    }
                    venta.grafo.data.push(Math.round(rows[i].Total));
                    venta.grafo.label=rows[i].Nombre;
                    fechaconv=new Date(rows[i].Fecha_Facturacion)
                    venta.fecha=fechaconv.toLocaleDateString();
                    lventas.push(venta);
                }
                let reporte = {
                    ventas:[],
                    fechas:[]
                }
                for(let j=0; j<lventas.length; j++){
                    reporte.ventas.push(lventas[j].grafo);
                    reporte.fechas.push(lventas[j].fecha);
                }
                res.send(reporte);
            }else{
                res.send('Error');
            }
        });     
    });

    app.get('/grafica_general_mes', async (req,res) => {
        connection.query(`SELECT usuario.Nombre,MONTH(Fecha_Facturacion) as Mes,SUM(Total) as 'Total' FROM usuario_rol 
        INNER JOIN rol ON rol.Id_Rol=usuario_rol.FK_Rol
        INNER JOIN usuario ON usuario.Id_Usuario=usuario_rol.FK_Usuario INNER JOIN venta ON venta.FK_Usuario=usuario.Id_Usuario 
        WHERE rol.Nombre='Vendedor' AND MONTH(Fecha_Facturacion)=MONTH(CURDATE())
        GROUP BY usuario.Nombre,Fecha_Facturacion`,function (err, rows, fields) {
            if (!err) {
                let lventas = [];
                for(let i=0; i<rows.length; i++){
                    let venta = {
                        grafo: {
                            data:[],
                            label:''
                        },
                        mes:''
                    }
                    venta.grafo.data.push(Math.round(rows[i].Total));
                    venta.grafo.label=rows[i].Nombre;
                    venta.mes=rows[i].Mes;
                    lventas.push(venta);
                }
                let reporte = {
                    ventas:[],
                    meses:[]
                }
                for(let l=0; l<lventas.length; l++){
                    reporte.ventas.push(lventas[l].grafo);
                    if(reporte.meses.findIndex((element) => element == lventas[l].mes) == -1){
                        reporte.meses.push(lventas[l].mes);
                    }else{
                        continue;
                    }
                }
                res.send(reporte);
            }else{
                res.send('Error');
            }   
        });
    });

    app.get('/grafica_general_semana', async (req,res) => {
        connection.query(`SELECT usuario.Nombre,WEEK(Fecha_Facturacion) as Semana,SUM(Total) as 'Total' FROM usuario_rol 
        INNER JOIN rol ON rol.Id_Rol=usuario_rol.FK_Rol
        INNER JOIN usuario ON usuario.Id_Usuario=usuario_rol.FK_Usuario INNER JOIN venta ON venta.FK_Usuario=usuario.Id_Usuario 
        WHERE rol.Nombre='Vendedor' AND WEEK(Fecha_Facturacion)=WEEK(CURDATE())
        GROUP BY usuario.Nombre,Fecha_Facturacion`,function (err, rows, fields) {
            if (!err) {
                let lventas = [];
                for(let i=0; i<rows.length; i++){
                    let venta = {
                        grafo: {
                            data:[],
                            label:''
                        },
                        semana:''
                    }
                    venta.grafo.data.push(Math.round(rows[i].Total));
                    venta.grafo.label=rows[i].Nombre;
                    venta.semana=rows[i].Semana;
                    lventas.push(venta);
                }
                let reporte = {
                    ventas:[],
                    semanas:[]
                }
                for(let l=0; l<lventas.length; l++){
                    reporte.ventas.push(lventas[l].grafo);
                    if(reporte.semanas.findIndex((element) => element == lventas[l].semana) == -1){
                        reporte.semanas.push(lventas[l].semana);
                    }else{
                        continue;
                    }
                }
                res.send(reporte);
            }else{
                res.send('Error');
            }   
        });
    });

    app.get('/grafica_general_dia', async (req,res) => {
        connection.query(`SELECT usuario.Nombre,DAY(Fecha_Facturacion) as Dia,SUM(Total) as 'Total' FROM usuario_rol 
        INNER JOIN rol ON rol.Id_Rol=usuario_rol.FK_Rol
        INNER JOIN usuario ON usuario.Id_Usuario=usuario_rol.FK_Usuario INNER JOIN venta ON venta.FK_Usuario=usuario.Id_Usuario 
        WHERE rol.Nombre='Vendedor' AND DAY(Fecha_Facturacion)=DAY(CURDATE())
        GROUP BY usuario.Nombre,Fecha_Facturacion`,function (err, rows, fields) {
            if (!err) {
                let lventas = [];
                for(let i=0; i<rows.length; i++){
                    let venta = {
                        grafo: {
                            data:[],
                            label:''
                        },
                        dia:''
                    }
                    venta.grafo.data.push(Math.round(rows[i].Total));
                    venta.grafo.label=rows[i].Nombre;
                    venta.dia=rows[i].Dia;
                    lventas.push(venta);
                }
                let reporte = {
                    ventas:[],
                    dias:[]
                }
                for(let l=0; l<lventas.length; l++){
                    reporte.ventas.push(lventas[l].grafo);
                    if(reporte.dias.findIndex((element) => element == lventas[l].dia) == -1){
                        reporte.dias.push(lventas[l].dia);
                    }else{
                        continue;
                    }
                }
                res.send(reporte);
            }else{
                res.send('Error');
            }   
        });
    });
}
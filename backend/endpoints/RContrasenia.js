 //Requerimos el paquete
 var nodemailer = require('nodemailer');
 
 var mensaje = "";
 var corre=""; 
 
 module.exports = (app,connection) => {
    app.post('/Contra', async (req,res) => {
        var correo = req.body.Correo;
        connection.query(`select Correo,Contrasena from Usuario where Correo='${correo}';`,function (err, rows, fields) {
            if (!err) {
                mensaje=rows[0].Contrasena;
                corre=rows[0].Correo;

                var smtpTransport = nodemailer.createTransport({
                    service: 'gmail',//smtp.gmail.com  //in place of service use host...
                    secure: false,//true
                    port: 25,//465
                    auth: {
                      user: 'TemporalPracticasIntermedias@gmail.com',
                      pass: 'practicasIntermedias2'
                    }, tls: {
                        rejectUnauthorized: false
                      }
                  });

                var mailOptions = {
                    from: 'TemporalPracticasIntermedias@gmail.com',
                    to: corre,
                    subject: 'Recuperación de contraseña Sistema de bodegas',
                    text: 'Su contraseña es: '+mensaje
                  };
                  
                smtpTransport.sendMail(mailOptions, function(error, response){
                    if(error){
                        console.log(error);
                    }else{
                        console.log("Message sent: " + response.message);
                    }
             
                    smtpTransport.close();
                });

                res.send('{"res":200}'); 
            }else {
                res.send('{"res":405}'); 
            }
        });
    });
}
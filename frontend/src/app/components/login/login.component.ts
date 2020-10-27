import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { LoginService } from "../../services/login/login.service";

interface Rol {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roles: Rol[] = [
    {value: 1, viewValue: 'Vendedor'},
    {value: 2, viewValue: 'Bodeguero'},
    {value: 3, viewValue: 'Repartidor'}
  ];

  

  credenciales=
  {
    email: '',
    password:'',
  }

  rol_seleccionado: number=this.roles[0].value;

  fg_email: string 
  
  constructor(private usuario_login:LoginService,private router:Router,private _location: Location) { }

  ngOnInit(): void {
  }

  login()
  {
    if(this.credenciales.email!=''&&this.credenciales.password!='')
    {
      this.usuario_login.login(this.credenciales).subscribe((res:any) => {
        if(res.msg!='Incorrecto'){
          for(let registro of res.msg)
          {
            if(registro.FK_Rol==this.rol_seleccionado)
            {
              sessionStorage.setItem('id',registro.id_usuario);
              alert('Sesión iniciada');
              this.iniciar_sesion();
              return;
            }
          }
          alert("No tienes permiso de iniciar sesión con el rol seleccionado")
          //console.log(res.msg);
        }else {
          alert('Error correo electrónico y/o contraseña incorrectos');
        }
      });   
      return; 
    }
    alert("Ingres sus credenciales por favor");
  }

  iniciar_sesion()
  {
    switch(this.rol_seleccionado)
    {
      case 1:
        //this.router.navigate(['/inicio-repartidor']);
        alert("inicio vendedor");
      break;
      case 2:
        //this.router.navigate(['/inicio-repartidor']);
        alert("inicio bodeguero");
      break;
      case 3:
        this.router.navigate(['/inicio-repartidor']);
      break;
    }
  }

  enviar()
  {
    console.log(this.fg_email)
  }
  
}

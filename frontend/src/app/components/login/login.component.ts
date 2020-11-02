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
    {value: 3, viewValue: 'Repartidor'},
    {value: 4, viewValue: 'Encargado'},
  ];

  credencial_name;
  credencial_key;

  credenciales=
  {
    email: '',
    password:'',
  }

  rol_seleccionado: number=this.roles[0].value;

  fg_email: string 
  
  constructor(private usuario_login:LoginService,private router:Router,private _location: Location) { }

  ngOnInit(): void {
    this.credencial_name='E-mail'
  }

  login()
  {
    if(this.credenciales.email!=''&&this.credenciales.password!='')
    {
      if(this.rol_seleccionado!=4)
      {
        this.Iniciar_usuario();
        return; 
      }
      this.Iniciar_Encargado();
      return;
    }
    alert("Ingres sus credenciales por favor");
  }
  
  Iniciar_usuario()
  {
    this.usuario_login.login(this.credenciales).subscribe((res:any) => {
      if(res.msg!='Incorrecto'){
        for(let registro of res.msg)
        {
          if(registro.FK_Rol==this.rol_seleccionado)
          {
            sessionStorage.setItem('id',registro.id_usuario);
            sessionStorage.setItem('rol',this.rol_seleccionado+'');
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
  }

  Iniciar_Encargado()
  {
    this.usuario_login.login_repartidor(this.credenciales).subscribe((res:any) => {
      if(res.msg!='Incorrecto'){
          sessionStorage.setItem('id',res.msg[0].id_encargado+'');
          console.log(sessionStorage.getItem('id'))
          sessionStorage.setItem('rol',this.rol_seleccionado+'');
          this.iniciar_sesion();
        return;
        //console.log(res.msg);
      }else {
        alert('Error usuario y/o contraseña incorrectos');
      }
    }); 
  }

  setEncargado(rol_valor)
  {
    if(rol_valor==4)
    {
      this.credencial_name='User'
      return;
    }
    this.credencial_name='E-mail'
  }

  iniciar_sesion()
  {
    switch(this.rol_seleccionado)
    {
      case 1:
        this.router.navigate(['/inicio_vendedor']);
        alert("Sesión iniciada vendedor");
      break;
      case 2:
        this.router.navigate(['/inicio-bodeguero']);
        alert("Sesión iniciada bodeguero");
      break;
      case 3:
        this.router.navigate(['/inicio-repartidor']);
        alert("Sesión iniciada repartidor");
      break;
      case 4:
        this.router.navigate(['/inicio_encargado']);
        alert("Sesión iniciada Encargado");
      break;
    }
  }

  enviar()
  {
    console.log(this.fg_email)
  }
  
}

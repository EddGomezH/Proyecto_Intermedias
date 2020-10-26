import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { LoginService } from "../../services/login/login.service";

interface Rol {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roles: Rol[] = [
    {value: 'vendedor', viewValue: 'Vendedor'},
    {value: 'repartidor', viewValue: 'Repartidor'},
    {value: 'bodequero', viewValue: 'Bodeguero'}
  ];

  

  credenciales=
  {
    email: '',
    password:'',
  }

  rol_seleccionado: string=this.roles[0].value;

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
          alert('Sesión iniciada');
          console.log(res.msg[0].Id_Usuario,res.msg[0].Nombre);
        }else {
          alert('Error correo electrónico y/o contraseña incorrectos');
        }
      });   
      return; 
    }
    alert("Ingres sus credenciales por favor");
  }

  enviar()
  {
    console.log(this.fg_email)
  }
  
}

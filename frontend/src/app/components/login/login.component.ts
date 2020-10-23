import { Component, OnInit } from '@angular/core';

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

  rol_seleccionado: string=this.roles[0].value

  log_email: string
  log_password:string
  fg_email: string 
  
  constructor() { }

  ngOnInit(): void {
  }

  login()
  {
    console.log(this.log_email,this.log_password,this.rol_seleccionado)
  }

  enviar()
  {
    console.log(this.fg_email)
  }
  
}

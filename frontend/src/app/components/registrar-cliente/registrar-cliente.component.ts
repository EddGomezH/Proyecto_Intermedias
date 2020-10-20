import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  cliente = {
    nombre:'',
    nit:'',
    dpi:'',
    direccion:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  Registrar(){
    console.log(this.cliente);
  }

}

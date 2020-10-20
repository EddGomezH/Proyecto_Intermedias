import { Component, OnInit } from '@angular/core';
import { RegistrarClienteService } from '../../services/registrar-cliente/registrar-cliente.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    direccion:'',
    sede: 0
  }

  constructor(private registar:RegistrarClienteService, private router:Router) { }

  ngOnInit(): void {
  }

  Registrar(){
    console.log(this.cliente);
  }

  Volver(){
    this.router.navigate(['inicio_vendedor']);
  }
}

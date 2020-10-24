import { Component, OnInit } from '@angular/core';
import { RegistrarClienteService } from '../../services/registrar-cliente/registrar-cliente.service';
import { Router } from '@angular/router';

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
    id_usuario:1
  }

  constructor(private registar:RegistrarClienteService, private router:Router) { }

  ngOnInit(): void {
  }

  Registrar(){
    this.registar.registrar_cliente(this.cliente).subscribe((res:any) => {
      console.log(res);
    });
  }

  Volver(){
    this.router.navigate(['inicio_vendedor']);
  }
}

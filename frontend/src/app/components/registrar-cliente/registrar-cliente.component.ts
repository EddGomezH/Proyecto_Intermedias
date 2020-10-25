import { Component, OnInit } from '@angular/core';
import { RegistrarClienteService } from '../../services/registrar-cliente/registrar-cliente.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private registar:RegistrarClienteService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  Registrar(){
    this.registar.registrar_cliente(this.cliente).subscribe((res:any) => {
      if(res.msg=='Correcto'){
        this.toastr.success('El cliente se registro con exito','Cliente Registrado');
      }else if(res.msg=='Incorrecto'){
        this.toastr.warning('El cliente que desea registrar ya se encuentra registrado', 'Cliente ya Registrado');
      }
    });
  }

  Volver(){
    this.router.navigate(['inicio_vendedor']);
  }
}

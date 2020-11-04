import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistroRolService } from '../../services/registro-rol/registro-rol.service';

@Component({
  selector: 'app-registar-rol',
  templateUrl: './registar-rol.component.html',
  styleUrls: ['./registar-rol.component.css']
})
export class RegistarRolComponent implements OnInit {

  user = {
	  dpi: '',
    nombre: '',
    fecha_nacimiento: '',
    correo: '',
    pass: '',
    id_encargado:0,
    vendedor: false,
    bodeguero: false,
    repartidor: false
  }

  constructor(private router:Router, private toast:ToastrService, private registro:RegistroRolService) {
    this.user.id_encargado=Number(sessionStorage.getItem("id"));
  }

  ngOnInit(): void {
  }

  Registrar(){
    if(this.user.vendedor==false && this.user.bodeguero==false && this.user.repartidor==false){
      this.toast.error('Se debe seleccionar al menos un rol para el usuario', 'Error rol no elegido');
    }else{
      this.registro.registrar_rol(this.user).subscribe((res:any) => {
        if(res.msg=='Registro OK'){
          this.toast.success('El registro se ha realizado con exito', 'Registro exitoso');
        }else if(res.msg=='Error'){
          this.toast.error('Ha ocurrido un error durante el registro', 'Error en registro');
        }
      });
    }
  }

  Volver(){
    this.router.navigate(['/inicio_encargado']);
  }
}

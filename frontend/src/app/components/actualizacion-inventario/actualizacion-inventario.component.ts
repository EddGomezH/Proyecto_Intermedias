import { Component, OnInit } from '@angular/core';
import {Producto} from '../../models/producto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {ObProductosService} from '../../services/ObProductos/ob-productos.service';

@Component({
  selector: 'app-actualizacion-inventario',
  templateUrl: './actualizacion-inventario.component.html',
  styleUrls: ['./actualizacion-inventario.component.css']
})
export class ActualizacionInventarioComponent implements OnInit {

  productos: Producto[]=[];

  constructor(private toastr: ToastrService,private router: Router,public ObPro:ObProductosService) { 
    /*if(!sessionStorage.getItem("id_usuario")){
      //menu.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }
    
    this.idUsuario = Number(sessionStorage.getItem("id_usuario"));
    
    */

  }

  ngOnInit(): void {
    
   this.getProductos();
  }

  getProductos(){
    this.ObPro.getProductos().subscribe((data_api: any) => {
      console.log(data_api);
      this.productos = data_api;
    })
  }
  ActProducto(){

  }

}

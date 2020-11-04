import { Component, OnInit } from '@angular/core';
import {Producto} from '../../models/producto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {ObProductosService} from '../../services/ObProductos/ob-productos.service';
import{DialogServiceService} from '../../services/SDialog/dialog-service.service';
import{ActProductoService}from '../../services/ActProducto/act-producto.service';


@Component({
  selector: 'app-actualizacion-inventario',
  templateUrl: './actualizacion-inventario.component.html',
  styleUrls: ['./actualizacion-inventario.component.css']
})
export class ActualizacionInventarioComponent implements OnInit {

  productos: Producto[]=[];
  idUsuario=0;

  constructor(private actProduc:ActProductoService,private dialogService: DialogServiceService,private toastr: ToastrService,private router: Router,public ObPro:ObProductosService) { 
    if (!sessionStorage.getItem("id")) {
      this.router.navigate(['']);
    }
    else if (sessionStorage.getItem("rol") != "2") {
      this.router.navigate(['']);
    }
    else {
      //agregar redireccion a la vista anterior
      this.idUsuario = Number(sessionStorage.getItem("id"));
    }
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
  ActProducto(pro:Producto){
    this.dialogService.ConfirmDialogActualizarProduc()
    .afterClosed().subscribe(res => {
      console.log(res);
      if(res.resp){
        this.actProduc.PutProducto(pro,res.Cantidad,res.Motivo,this.idUsuario,res.Bodega).subscribe(
          res => {
            console.log(res);
            console.log(res.status);
            if(res.res==200){
              this.toastr.success('El Log fue actualizado!','Log Actualizado');
            }else{
              this.toastr.error('Error al obtener datos!','Log no se Actualizó');
            }
            
          },
          err => {
            this.toastr.error('Error al conectar con servidor!','Log no se Actualizó');
          }
        );
      
      }
    })
  }

}

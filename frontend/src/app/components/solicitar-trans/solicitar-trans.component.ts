import { Component, OnInit } from '@angular/core';
import {GetBodegasService} from '../../services/ObBodegas/get-bodegas.service';
import {ABodega} from '../../models/abodega';
import {Producto} from '../../models/producto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {ObProductosService} from '../../services/ObProductos/ob-productos.service';
import {AgTransferenciaService} from '../../services/AgTrans/ag-transferencia.service';
import {AgDetalleTransService} from '../../services/AgDTrans/ag-detalle-trans.service';
import { async } from 'rxjs/internal/scheduler/async';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-solicitar-trans',
  templateUrl: './solicitar-trans.component.html',
  styleUrls: ['./solicitar-trans.component.css']
})
export class SolicitarTransComponent implements OnInit {

  productos: Producto[]=[];
  Bodegas: ABodega[]=[];
  selectedValue: number;
  idUsuario=0;
  Tipo=1;
  transaccion:number=-1;
  Respu$:Observable<any>; 

  constructor(public AdT:AgDetalleTransService,public ObPro:ObProductosService,private toastr: ToastrService,public AT:AgTransferenciaService, public bd:GetBodegasService,private router: Router,) {
    /*if(!sessionStorage.getItem("id_usuario")){
      this.router.navigate(['/login']);
    }
    
    this.idUsuario = Number(sessionStorage.getItem("id_usuario"));*/
    this.idUsuario = 1;
  }

  ngOnInit(): void {
    this.getProductos();
    this.OBodegas();
    
  }
  OBodegas(){
    this.bd.getBodegas().subscribe((data_api: any) => {
      console.log(data_api);
      this.Bodegas = data_api;
    })
  }
  getProductos(){
    this.ObPro.getProductos().subscribe((data_api: any) => {
      console.log(data_api);
      this.productos = data_api;
      for(var i=0; i<this.productos.length;i++){
        this.productos[i].Precio=0;
      }
    })
  }

  async Solicitar(){
    this.transaccion=-1;
    console.log(this.productos);
    console.log(this.Tipo);
    let existe:boolean=false;
    for(var i=0; i<this.productos.length;i++){
      if(this.productos[i].Precio!=0){
        existe=true;
      }
    }

    if(existe){
      if(this.Tipo==1){
         await this.Solicitar1();
      }else{
        await this.Solicitar2();
      }
      console.log(this.productos);
      for(var i=0; i<this.productos.length;i++){
        console.log('no ent');
        if(this.productos[i].Precio!=0){
          console.log('no ent1');
          if(this.transaccion!=-1){
            console.log('no ent2');
            this.AdT.AgDTransferencia(this.productos[i].Id_Producto,this.transaccion,this.productos[i].Precio).subscribe(
              res => {
                if(res.res==200){
                  //this.toastr.success('Transacción Solicitada!','Transacción');
                }else{
                  this.toastr.error('DTransacción no pudo ser solicitada!','Transacción');
                }  
              },
              err => {
                this.toastr.error('Error al conectar con servidor!','DTransacción fallida');
              }
            );
          }
        }
      }

    }
  }

  async Solicitar1() {
    console.log('prue');
    console.log(this.Bodegas);
    return new Promise((resolve, reject) => {
      this.AT.AgTransferencia(1, this.idUsuario, this.selectedValue).subscribe(res => {
        if (res.res == 200) {
          console.log(res);
          this.transaccion = res.trans;
          this.toastr.success('Transacción Solicitada!', 'Transacción');
          resolve();
        } else {
          this.toastr.error('Transacción no pudo ser solicitada!', 'Transacción');
        }
      },
        err => {
          this.toastr.error('Error al conectar con servidor!', 'Transacción fallida');
        }
      );
    });
  }

  async Solicitar2() {
    return new Promise((resolve, reject) => {
      this.AT.AgTransferencia(0, this.idUsuario, this.selectedValue).subscribe(res => {
        if (res.res == 200) {
          console.log(res);
          this.transaccion = res.trans;
          this.toastr.success('Transacción Solicitada!', 'Transacción');
          resolve();
        } else {
          this.toastr.error('Transacción no pudo ser solicitada!', 'Transacción');
        }
      },
        err => {
          this.toastr.error('Error al conectar con servidor!', 'Transacción fallida');
        }
      );
    });
  }

  private handleError(error: any) {
    return throwError(error);
  }
}

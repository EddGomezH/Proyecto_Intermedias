import { Component, OnInit } from '@angular/core';
import {Transferencia} from '../../models/transferencia';
import {GetTransEService} from '../../services/ObTransE/get-trans-e.service';
import {GetBodegasService} from '../../services/ObBodegas/get-bodegas.service';
import {GetSedeService} from '../../services/ObSede/get-sede.service';
import{DialogServiceService} from '../../services/SDialog/dialog-service.service';
import { ToastrService } from 'ngx-toastr';
import {BSolicitudT} from '../../models/bsolicitud-t';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vatrans-externas',
  templateUrl: './vatrans-externas.component.html',
  styleUrls: ['./vatrans-externas.component.css']
})
export class VATransExternasComponent implements OnInit {

  id_usuario=1;
  transferencias: Transferencia[] = [];
  displayedColumns: string[] = ['producto', 'cantidad'];
  se:{
    Id_Encargado:0,
    FK_Sede:0
  };
  


  constructor(private router: Router,private toastr: ToastrService,private dialogService: DialogServiceService,public GTES:GetTransEService, public GBS:GetBodegasService, public GS:GetSedeService ) {
    if (!sessionStorage.getItem("id")) {
      this.router.navigate(['']);
    }
    else if (sessionStorage.getItem("rol") != "4" || sessionStorage.getItem("rol") != "2") {
      this.router.navigate(['']);
    }
    else {
      //agregar redireccion a la vista anterior
      this.id_usuario = Number(sessionStorage.getItem("id"));
    }
  }

  ngOnInit(): void {
    this.getTransE();
    this.getSedeActual();
  }

  getTransE() {
    //funcion que consume el servicio para obtener todas las tareas
    this.GTES.GetTransfE().subscribe((data_api: any) => {
      this.transferencias = data_api;
    })
  }

  getSedeActual(){
    this.GS.GetSede(this.id_usuario).subscribe((data_api: any) => {
      
      this.se = data_api;
      sessionStorage.setItem("Id_Sede",this.se[0].FK_Sede);
    })
  }

  Aceptar(tra:Transferencia){
   
    this.dialogService.ConfirmDialogTransferenciaE()
    .afterClosed().subscribe(res => {
      console.log(res);
      if(res.resp){
        let Sol= new BSolicitudT(this.id_usuario,res.Repartidor,res.Bodega,tra.Id_Trans,tra.Productos);
        console.log(Sol);
        this.GTES.PostSolitud(Sol).subscribe(res => {
            console.log(res);
            console.log(res.status);
            if(res.res==200){
              this.toastr.success('La transferencia fue aceptada!','Transferencia');
            }else{
              this.toastr.error('La transferencia no pudo ser aceptada!','Transferencia');
            }
            
          },
          err => {
            this.toastr.error('Error al conectar con servidor!','Transferencia');
          }
        );
      }
    })
  }
}

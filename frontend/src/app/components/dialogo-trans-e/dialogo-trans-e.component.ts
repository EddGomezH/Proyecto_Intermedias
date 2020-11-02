import { Component, OnInit } from '@angular/core';
import {GetBodegasService} from '../../services/ObBodegas/get-bodegas.service';
import {ABodega} from '../../models/abodega';
import {BRepartidor} from '../../models/brepartidor';
import { ToastrService } from 'ngx-toastr';
import {GetRepartidoresService} from '../../services/ObRepartidores/get-repartidores.service'

@Component({
  selector: 'app-dialogo-trans-e',
  templateUrl: './dialogo-trans-e.component.html',
  styleUrls: ['./dialogo-trans-e.component.css']
})
export class DialogoTransEComponent implements OnInit {

  Bodegas: ABodega[]=[];
  Repartidores: BRepartidor[]=[];
  selectedValue: number;
  selectedValue2: number;

  RespDia={
    resp:false,
    Bodega:0,
    Repartidor:0
  }
  id_sede=0;

  constructor(private toastr: ToastrService,public bd:GetBodegasService, public GR:GetRepartidoresService) { 

    /*if (!sessionStorage.getItem("id_usuario")) {
      this.router.navigate(['/login']);
    }
    else if (sessionStorage.getItem("tipo_usuario") == "estudiante") {
      this.router.navigate(['/login']);
    }
    else {*/
      //agregar redireccion a la vista anterior
      //this.id_usuario = Number(sessionStorage.getItem("id"))

    //}
    this.id_sede=Number(sessionStorage.getItem("Id_Sede"));
  }

  ngOnInit(): void {
    console.log('id sede' + this.id_sede);
    this.OBodegas();
    this.ORepartidores();
  }

  OBodegas(){
    this.bd.getBodegaSede(this.id_sede).subscribe((data_api: any) => {
      this.Bodegas = data_api;
    })
  }

  ORepartidores(){
    this.GR.getRepartidores().subscribe((data_api: any) => {
      this.Repartidores = data_api;
    })
  }

  OnResT(bod:number,rep:number) {
    this.RespDia.resp=true;
    this.RespDia.Bodega=bod;
    this.RespDia.Repartidor=rep;
    return (this.RespDia);
  }

}

import { Component, OnInit } from '@angular/core';
import {GetBodegasService} from '../../services/ObBodegas/get-bodegas.service';
import {ABodega} from '../../models/abodega';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialogo-act-produc',
  templateUrl: './dialogo-act-produc.component.html',
  styleUrls: ['./dialogo-act-produc.component.css']
})
export class DialogoActProducComponent implements OnInit {

  Bodegas: ABodega[]=[];
  selectedValue: number;


  RespDia={
    resp:false,
    Cantidad:0,
    Motivo:'',
    Bodega:0
  }

  
  constructor(private toastr: ToastrService,public bd:GetBodegasService) { }

  ngOnInit(): void {
    this.OBodegas();
  }
  OBodegas(){
    this.bd.getBodegas().subscribe((data_api: any) => {
      console.log(data_api);
      this.Bodegas = data_api;
    })
  }

  OnResT(cant,mo,bod:number) {
    this.RespDia.resp=true;
    this.RespDia.Cantidad=cant;
    this.RespDia.Motivo=mo;
    this.RespDia.Bodega=bod;
    return (this.RespDia);
  }

}

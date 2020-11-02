import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { RegistrarVentaService } from '../../services/registrar-venta/registrar-venta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-venta',
  templateUrl: './reporte-venta.component.html',
  styleUrls: ['./reporte-venta.component.css']
})
export class ReporteVentaComponent implements OnInit {

  vendedor={
    nombre_vendedor:'',
    fecha_inicio:'',
    fecha_fin:''
  }

  public lineChartData: ChartDataSets[] = [];

  public lineChartLabels: Label[] = [];

  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    }
  };

  public lineChartColors: Color[] = [];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  lventas=[];
  lfechas=[];

  constructor(private ventas:RegistrarVentaService, private router:Router) {
    this.ventas.reporte_ventas_lineas().subscribe((res:any) => {
      this.lventas=res.ventas;
      this.lfechas=res.fechas;
      this.lineChartData = this.lventas;
      this.lineChartLabels=this.lfechas;
    });
  }

  ngOnInit(): void { }

  Lineas(){
    this.lineChartType='line';
  }

  Barras(){
    this.lineChartType='bar';
  }

  Dona(){
    this.lineChartType='doughnut';
  }

  Filtrar(){
    this.ventas.filtrar_vendedor(this.vendedor).subscribe((res:any) => {
       this.lineChartData=res.ventas;
       this.lineChartLabels=res.fechas;
    });
  }

  Mes(){
    this.ventas.Mes().subscribe((res:any) => {
      this.lineChartData=res.ventas;
      this.lineChartLabels=res.meses;
    });
  }

  Semana(){
    this.ventas.Semana().subscribe((res:any) => {
      this.lineChartData=res.ventas;
      this.lineChartLabels=res.semanas;
    });
  }

  Dia(){
    this.ventas.Dia().subscribe((res:any) => {
      this.lineChartData=res.ventas;
      this.lineChartLabels=res.dias;
    });
  }

  Reset(){
    this.lineChartData=this.lventas;
    this.lineChartLabels=this.lfechas;
  }

  Volver(){
    this.router.navigate(['/inicio_vendedor']);
  }
}

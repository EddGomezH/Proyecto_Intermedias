import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-bodeguero',
  templateUrl: './inicio-bodeguero.component.html',
  styleUrls: ['./inicio-bodeguero.component.css']
})
export class InicioBodegueroComponent implements OnInit {

  constructor(private router:Router) {
    if (!sessionStorage.getItem("id")) {
      this.router.navigate(['']);
    }
    else if (sessionStorage.getItem("rol") != "2") {
      this.router.navigate(['']);
    }
   }

  ngOnInit(): void {

    
  }

  ActInventario(){
    this.router.navigate(['/ActInventario']);
  }

  SoliTrans(){
    this.router.navigate(['/SoliTrans']);
  }

  VerTransIn(){
    this.router.navigate(['/VerTransIn']);
  }

  VerTransEx(){
    this.router.navigate(['/VerTransEx']);
  }

  Salir(){
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('rol');

    this.router.navigate(['']);
  }
  

  perfil(){
    this.router.navigate(['/perfil']);
  }

}

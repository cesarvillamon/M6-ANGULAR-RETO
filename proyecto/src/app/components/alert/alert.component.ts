import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  constructor(private router:Router){

  }
  menuItemsAlert = ["Inicio", "Necesidades", "Productos y Servicios", "Educación Financiera", "Trámites Digitales", "Sucursal Virtual Personas"]
  gologin(){
    this.router.navigate(['/login'])
  }
}

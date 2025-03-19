import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  menuItemsAlert = ["Inicio", "Necesidades", "Productos y Servicios", "Educación Financiera", "Trámites Digitales", "Sucursal Virtual Personas"]
}

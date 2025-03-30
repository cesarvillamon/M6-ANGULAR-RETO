import { Component} from '@angular/core';
//import { State } from '../state/state';
import { Router } from '@angular/router';
import { ConsultaHistoriaService } from 'src/app/services/consultahistoria.service';
import { ConsultasaldoService } from 'src/app/services/consultasaldo.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  saldoCuenta: any;
  tipoCuenta: any;
  nroCuenta: any;
  mostrarSaldo: boolean = false;
  mostrarHistoria: boolean = false;  
  codigoTransaccion: any;
  valortransaccion: any;
  historialTransacciones: any[] = [];

  constructor(private consultasaldoService: ConsultasaldoService,
    private consultahistoriaService: ConsultaHistoriaService, private router:Router) { }

  getSaldo(): void {
    this.consultasaldoService.getSaldo().subscribe((data) => {
      this.saldoCuenta = data;
      this.mostrarSaldo = true;
      this.mostrarHistoria = false;      
    }
    );
    
  }

  getHistoria(): void {
    this.consultahistoriaService.getHistoria().subscribe((data) => {
      this.historialTransacciones = data;
      this.mostrarHistoria = true;
      this.mostrarSaldo = false;      
    }
    );
  }
  
    
    logout(): void {
      this.mostrarSaldo = false;
      this.mostrarHistoria = false;
      this.router.navigateByUrl('/login');
    }
}

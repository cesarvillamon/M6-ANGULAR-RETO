import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasaldoService {  

  constructor(private httpClient: HttpClient) { }

  getSaldo():Observable<any>{
    const body = { numeroCuenta: "1",
      saldoInicial: 200,
      tipoCuenta: "Básica"
     };
    return this.httpClient.post('http://localhost:8081/cuentas/saldo', body);
  }
  
}
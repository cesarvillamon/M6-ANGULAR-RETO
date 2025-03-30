import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealizaroperacionesService {

  private urlcrearDeposito = 'http://localhost:8081/transacciones/deposito';
  private urlcrearRetiro = 'http://localhost:8081/transacciones/retiro';
  private urlcrearCompra = 'http://localhost:8081/transacciones/compra';

  constructor(private httpclient:HttpClient) { }

  crearDeposito(idCuenta: number, codigoTransaccion: string, monto: number):Observable<any>{
    const body = { numeroCuenta: idCuenta.toString(),
      monto: monto,
      tipoOperacion: codigoTransaccion
     };
     console.log(body)
      return this.httpclient.post(this.urlcrearDeposito, body);     
  }

  crearRetiro(idCuenta: number, codigoTransaccion: string, monto: number):Observable<any>{
    const body = { numeroCuenta: idCuenta.toString(),
      monto: monto,
      tipoOperacion: codigoTransaccion
     };
      return this.httpclient.post(this.urlcrearRetiro, body);     
  }

  crearCompra(idCuenta: number, codigoTransaccion: string, monto: number, esWeb:boolean):Observable<any>{
    const params = { esCompraWeb: esWeb };
    const body = { numeroCuenta: idCuenta.toString(),
      monto: monto,
      tipoOperacion: codigoTransaccion
     };
      return this.httpclient.post(this.urlcrearCompra, body, { params });     
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConsultaHistoriaService {  
  constructor(private httpClient:HttpClient) { }
  getHistoria():Observable<any>{
    return this.httpClient.get('http://localhost:8081/transacciones/historial/1');
  }
    
}

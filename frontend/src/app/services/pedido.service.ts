import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl='http://localhost:3000/api/datos';

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando…');
  }

  obtenerDatos(){
    return this.httpclient.get<Pedido[]>(this.apiUrl);
  }

  agregarDato(datos: Pedido) : Observable<any>{
    return this.httpclient.post<Pedido>(this.apiUrl, datos);
  }

  eliminarDato(id:number){
    return this.httpclient.delete(this.apiUrl+'/'+id);
  }
}
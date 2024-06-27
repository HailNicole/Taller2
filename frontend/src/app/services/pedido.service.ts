import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl='http://localhost:3000/api/pedidos';

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando…');
  }

  obtenerDatos(){
    return this.httpclient.get<Pedido[]>(this.apiUrl);
  }

  obtenerDatoPorId(id:number){
    return this.httpclient.get<Pedido>(this.apiUrl+"/"+id);
  }

  agregarDato(datos: Pedido) : Observable<any>{
    return this.httpclient.post<Pedido>(this.apiUrl, datos);
  }

  eliminarDato(id:number){
    let url=this.apiUrl+'/'+id;
    return this.httpclient.delete(url);
  }

  editarDato(pedido:Pedido){
    let id=pedido.id;
    let url=this.apiUrl+'/'+id;
    console.log(url);
    return this.httpclient.put(url,pedido);
  }
}
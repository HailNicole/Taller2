import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plato } from '../models/plato';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  private apiUrl='http://localhost:3000/api/platos';

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando…');
  }

  obtenerPlatos(){
    return this.httpclient.get<Plato[]>(this.apiUrl);
  }

  obtenerPlatoPorId(id:number){
    return this.httpclient.get<Plato>(this.apiUrl+"/"+id);
  }

  agregarPlato(datos: Plato) : Observable<any>{
    return this.httpclient.post<Plato>(this.apiUrl, datos);
  }

  eliminarPlato(id:number){
    let url=this.apiUrl+'/'+id;
    return this.httpclient.delete(url);
  }
}

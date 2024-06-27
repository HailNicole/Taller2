import { Injectable } from '@angular/core';
import { Plato } from '../models/plato';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private plato: Plato = new Plato(0,'', '', 0, 0,"");
  private pedido: Pedido = new Pedido(0,'',0,'','',0,0);

  setPlato(plato: Plato) {
    this.plato = plato;
  }

  getPlato(): Plato{
    return this.plato;
  }

  setPedido(pedido: Pedido) {
    this.pedido = pedido;
  }

  getPedido(): Pedido{
    return this.pedido;
  }
}
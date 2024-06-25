import { Injectable } from '@angular/core';
import { Plato } from '../models/plato';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private plato: Plato = new Plato('', '', 0);

  setPlato(plato: Plato) {
    this.plato = plato;
  }

  getPlato(): Plato{
    return this.plato;
  }
}
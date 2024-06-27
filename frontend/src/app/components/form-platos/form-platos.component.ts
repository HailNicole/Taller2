import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Plato } from '../../models/plato';
import { PlatoService } from '../../services/plato.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-form-platos',
  templateUrl: './form-platos.component.html',
  styleUrl: './form-platos.component.css'
})
export class FormPlatosComponent implements OnInit{

  constructor(private router: Router, private sharedDataService: SharedDataService, private platoService:PlatoService){ }
  ngOnInit(): void { 
    this.platoService.obtenerPlatos().subscribe(data =>{
      this.platos = data;
    });
  }

  id:number=0;
  nombre:string="";
  descripcion:string='';
  costo:number=0.0;
  cant:number=0;
  img:string="";
  platos:Plato[]=[];

  Pedir(id:number,nombre:string,desc:string,costo:number,cant:number,img:string) {
    let platoSeleccionado= new Plato(id,nombre,desc,costo,cant,img);
    this.sharedDataService.setPlato(platoSeleccionado);
    this.router.navigate(['/Pedir']);
  }
}
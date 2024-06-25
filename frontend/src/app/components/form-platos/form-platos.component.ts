import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Plato } from '../../models/plato';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-form-platos',
  templateUrl: './form-platos.component.html',
  styleUrl: './form-platos.component.css'
})
export class FormPlatosComponent implements OnInit{

  constructor(private router: Router, private sharedDataService: SharedDataService){ }
  ngOnInit(): void { }

  nombre:string="";
  descripcion:string='';
  costo:number=0.0;

  platos=[{'Nombre':'Salchipapa','Descripcion':'Plato de papas y salchichas fritas, que se puede acompañar con mayonesa, salsa de tomate u otro tipo de salsas','Costo':'1.00', 'imagen': '../assets/salchipapa.jpg'},
    {'Nombre':'Hamburguesa','Descripcion':'Pieza de carne picada aplastada y con forma redondeada, mezclada con diversos ingredientes, que se hace a la plancha, a la parrilla o frita.','Costo':'2.50', 'imagen': '../assets/hamburguesa.jpg'},
    {'Nombre':'Yapingacho','Descripcion':'Tortillas fritas, hechas de papas cocidas aplastadas, con queso, achiote y cebolla blanca.','Costo':'3.00', 'imagen': '../assets/yapingacho.jpg'},
    {'Nombre':'Milkshake','Descripcion':'Bebida elaborada principalmente con leche y/o helado al que se le agrega frutas y otros ingredientes.','Costo':'1.50', 'imagen': '../assets/milkshake.jpg'},
    {'Nombre':'Encebollado','Descripcion':'caldo de pescado que contiene albacora, yuca, tomate, cebolla colorada, cilantro, ají en polvo, comino y otras especias.','Costo':'1.50', 'imagen': '../assets/encebollado.jpg'}];

  Pedir(nombre:string,desc:string,costo:string) {
    let num = Number(costo);
    let platoSeleccionado= new Plato(nombre,desc,num);
    this.sharedDataService.setPlato(platoSeleccionado);
    this.router.navigate(['/Pedir']);
  }
}
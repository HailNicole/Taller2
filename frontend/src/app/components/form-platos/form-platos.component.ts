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
  cant:number=0;

  platos=[{'Nombre':'Maki tempura','Cantidad':'6','Descripcion':'Nuestros tempurizados siempre han sido un éxito, ahora te traemos la versión maki para que puedas disfrutar también de nuestro sushi tempurizado.Crema de queso, cebollino y salmón spicy, una explosión de sabores.','Costo':'7.00', 'imagen': '../assets/sushi1.jpg'},
    {'Nombre':'Mix roll','Cantidad':'8','Descripcion':'Explosión de sabores y frescura máxima con este roll que combina el mejor atún con aguacate, mango, cobertura de salmon tataki y salsa unagi.¡Un BOOM en toda regla!','Costo':'10.25', 'imagen': '../assets/sushi2.jpg'},
    {'Nombre':'Lee Roll','Cantidad':'8','Descripcion':'No encontrarás este roll en ningún otro sitio, combinación espectacular de anguila y mango combinado con nuestra mayo teriyaki, sencillamente brutal.¿A que esperas para probarlo?','Costo':'11.00', 'imagen': '../assets/sushi3.jpg'},
    {'Nombre':'Revolution Roll','Cantidad':'8','Descripcion':'Heüra y aguacate, con sombrero de cebolla caramelizada y envoltura de alga wakame. Un plato elegido por vosotros y Heüra que acerca la libertad de elegir a vuestras mesas.','Costo':'9.50', 'imagen': '../assets/sushi4.jpg'},
    {'Nombre':'Roll tropical','Cantidad':'8','Descripcion':'Refrescante como el solo, combinamos nuestro mejor atún con mango, aguacate y piña flambeada, esto no lo vas a encontrar en otra parte no hay descripción posible.¡E-S-P-E-C-T-A-C-U-L-A-R!','Costo':'6.50', 'imagen': '../assets/sushi5.jpg'}];

  Pedir(nombre:string,desc:string,costo:string,cant:string) {
    let costoT = Number(costo);
    let cantT = Number(cant);
    let platoSeleccionado= new Plato(nombre,desc,costoT,cantT);
    this.sharedDataService.setPlato(platoSeleccionado);
    this.router.navigate(['/Pedir']);
  }
}
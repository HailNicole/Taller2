import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido';
import { Router} from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit{

  arrayDatos:Pedido[]=[];

  constructor(private pedidoService:PedidoService,private router: Router){
    this.pedidoService.obtenerDatos().subscribe(data =>{
      this.arrayDatos = data;
    });
  }
  ngOnInit(): void { }

  Eliminar(id:number){
    console.log(id);
    this.arrayDatos.splice(id,1);
    this.pedidoService.eliminarDato(id).subscribe(
      response => {
        console.log('Pedido eliminado correctamente:', response);
      },
      error => {
        console.error('Error al eliminar Pedido:', error);
      });
        // Navega a la misma ruta para recargar la página
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/Pedidos']);
        });
  }
}
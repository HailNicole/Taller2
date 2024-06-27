import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido';
import { Router} from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit{

  arrayDatos:Pedido[]=[];
  obtenerDato: any;

  constructor(private pedidoService:PedidoService,private router: Router,private sharedDataService: SharedDataService){
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

  Editar(id:number){
    this.pedidoService.obtenerDatoPorId(id).subscribe(data =>{
      this.obtenerDato = new Pedido(data.id,data.nombre_plato,data.cantidad,data.descripcion,data.esp,data.costoTotal,data.id_plato);
      this.sharedDataService.setPedido(this.obtenerDato);
      this.router.navigate(['/EditarPedido']);
    });
  }
}
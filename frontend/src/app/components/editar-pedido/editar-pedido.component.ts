import { Component, OnInit, Input} from '@angular/core';
import { Pedido } from '../../models/pedido';
import { Plato } from '../../models/plato';
import { SharedDataService } from '../../services/shared-data.service';
import { Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service';
import { PlatoService } from '../../services/plato.service';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrl: './editar-pedido.component.css'
})
export class EditarPedidoComponent implements OnInit{
  
  platoSeleccionado: Plato = new Plato(0,'', '', 0, 0,'');
  pedidoSeleccionado: Pedido = new Pedido(0,'',0,'','',0,0);
  cantidad: number = 1;
  especificaciones: string = '';

  constructor(private sharedDataService: SharedDataService, private router: Router
    , private pedidoService:PedidoService,private route: Router, private platoService:PlatoService){ }

  ngOnInit(): void { 
    console.log(this.sharedDataService.getPedido());
    this.pedidoSeleccionado = this.sharedDataService.getPedido();
    if(!this.pedidoSeleccionado){
      this.router.navigate(['/Pedidos']);
    }else{
      this.CargarPlato();
      this.especificaciones = this.pedidoSeleccionado.esp;
    }
  }

  CalcularCostoTotal(){
    let total=this.cantidad*this.platoSeleccionado.costo;
    return total;
  }

  CalcularCantT(){
    let cantTotal=this.platoSeleccionado.cant*this.cantidad;
    return cantTotal;
  }

  CargarPlato(){
    this.platoService.obtenerPlatoPorId(this.pedidoSeleccionado.id_plato).subscribe(data =>{
      this.platoSeleccionado=data;
    })
  }

  Actualizar() {
    this.EditarPedido();
    alert("Pedido Actualizado");
    this.route.navigate(['/Pedidos'], { queryParams: { reload: true } });
  }

  EditarPedido(){
    let nuevoPedido = new Pedido(this.pedidoSeleccionado.id,this.pedidoSeleccionado.nombre_plato
      ,this.CalcularCantT(),this.pedidoSeleccionado.descripcion,this.especificaciones,this.CalcularCostoTotal(),this.pedidoSeleccionado.id_plato);
    this.pedidoService.editarDato(nuevoPedido).subscribe(
      response => {
        console.log('Pedido editado correctamente:', response);
      },
      error => {
        console.error('Error al editado el Pedido:', error);
      });
  }
}
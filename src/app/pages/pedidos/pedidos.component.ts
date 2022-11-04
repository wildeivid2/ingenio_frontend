import { Component, OnInit } from '@angular/core';
import { Pedido } from './../../models/Pedido';
import { PedidoService } from './../../services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {

    this.pedidoService.obtenerPedidos().subscribe(
      pedidos => this.pedidos = pedidos
    );

  }

}

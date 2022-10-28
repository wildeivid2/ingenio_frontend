import { Component, OnInit } from '@angular/core';
import { PedidoService } from './../../services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private pedidoService:PedidoService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Cliente } from './../../models/Cliente';
import { ClienteService } from './../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.obtenerClientes()
    .subscribe(
      clientes => {
        this.clientes = clientes;
        console.log(clientes);
      }
    )
  }

}

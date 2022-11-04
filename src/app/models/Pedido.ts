import { Cliente } from './Cliente'
import { Usuario } from './Usuario'
import { Logistica } from './Logistica'

export class Pedido {

  id: number
  cliente: Cliente
  usuario: Usuario
  totalEnvioNormal: number
  totalMontoDescuento: number
  totalEnvio: number
  logisticas: Logistica[]

  constructor(id: number, cliente: Cliente, usuario: Usuario, totalEnvioNormal: number, totalMontoDescuento: number, totalEnvio: number, logisticas: Logistica[]) {
    this.id = id
    this.cliente = cliente
    this.usuario = usuario
    this.totalEnvioNormal = totalEnvioNormal
    this.totalMontoDescuento = totalMontoDescuento
    this.totalEnvio = totalEnvio
    this.logisticas = logisticas
  }

}

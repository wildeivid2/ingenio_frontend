import { Cliente } from './Cliente'
import { Usuario } from './Usuario'
import { Logisticas } from './Logistica'

export class Pedido {

  id: number
  cliente: Cliente
  usuario: Usuario
  totalEnvioNormal: number
  totalMontoDescuento: number
  totalEnvio: number
  logisticas: Logisticas[]

  constructor(id: number, cliente: Cliente, usuario: Usuario, totalEnvioNormal: number, totalMontoDescuento: number, totalEnvio: number, logisticas: Logisticas[]) {
    this.id = id
    this.cliente = cliente
    this.usuario = usuario
    this.totalEnvioNormal = totalEnvioNormal
    this.totalMontoDescuento = totalMontoDescuento
    this.totalEnvio = totalEnvio
    this.logisticas = logisticas
  }

}

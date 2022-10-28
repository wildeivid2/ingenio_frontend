import { TipoTransporte } from './TipoTransporte'

export class Producto {

  id: number
  tipoTransporte: TipoTransporte
  producto: string
  matricula: string

  constructor(id: number, tipoTransporte: TipoTransporte, producto: string, matricula: string) {
    this.id = id
    this.tipoTransporte = tipoTransporte
    this.producto = producto
    this.matricula = matricula
  }

}

import { Producto } from './Producto'

export class LogisticaDetalle {

  id: number
  producto: Producto
  cantidad: number

  constructor(id: number, producto: Producto, cantidad: number) {
    this.id = id
    this.producto = producto
    this.cantidad = cantidad
  }

}

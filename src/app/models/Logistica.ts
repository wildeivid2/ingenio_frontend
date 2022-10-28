import { TipoTransporte } from './TipoTransporte'
import { Bodega } from './Bodega'
import { LogisticaDetalle } from './LogisticaDetalle'

export class Logistica {

  id: number
  tipoLogistica: TipoTransporte
  cantidadTotalProductos: number
  fechaRegistro: string
  fechaEntrega: string
  bodega: Bodega
  precioNormal: number
  precioDescuento: number
  precioEnvio: number
  logisticaDetalles: LogisticaDetalle[]

  constructor(id: number, tipoLogistica: TipoTransporte, cantidadTotalProductos: number, fechaRegistro: string, fechaEntrega: string, bodega:Bodega, precioNormal: number, precioDescuento: number, precioEnvio: number, logisticaDetalles: LogisticaDetalle[]) {
      this.id = id
      this.tipoLogistica = tipoLogistica
      this.cantidadTotalProductos = cantidadTotalProductos
      this.fechaRegistro = fechaRegistro
      this.fechaEntrega = fechaEntrega
      this.bodega = bodega
      this.precioNormal = precioNormal
      this.precioDescuento = precioDescuento
      this.precioEnvio = precioEnvio
      this.logisticaDetalles = logisticaDetalles
  }

}

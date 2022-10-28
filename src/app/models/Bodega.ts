import { TipoTransporte } from './TipoTransporte'

export class Bodega {

  id: number
  tipoTransporte: TipoTransporte
  bodega: string

  constructor(id: number, tipoTransporte: TipoTransporte, bodega: string) {
    this.id = id
    this.tipoTransporte = tipoTransporte
    this.bodega = bodega
  }

}

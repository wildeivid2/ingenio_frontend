import { TipoDocumento } from './TipoDocumento';
import { Pedido } from './Pedido';


export class Cliente {

  id: number;
  nombre: string;
  apellido: string;
  tipoDocumento: TipoDocumento;
  numeroDocumento: number;
  pais: string;
  ciudad: string;
  direccion: string;
  email: string;
  celular: string;
  createAt: string;
  pedidos: Pedido[];

  constructor(id: number, nombre: string, apellido: string, tipoDocumento: TipoDocumento, numeroDocumento: number, pais: string, ciudad: string, direccion: string, email: string, celular: string, createAt: string, pedidos: Pedido[]) {
    this.id = id
    this.nombre = nombre
    this.apellido = apellido
    this.tipoDocumento = tipoDocumento
    this.numeroDocumento = numeroDocumento
    this.pais = pais
    this.ciudad = ciudad
    this.direccion = direccion
    this.email = email
    this.celular = celular
    this.createAt = createAt
    this.pedidos = pedidos
  }

}

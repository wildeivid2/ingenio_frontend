import { Role } from './Role'

export class Usuario {

  id: number
  username: string
  password: string
  enabled: boolean
  email: string
  roles: Role[]

  constructor(id: number, username: string, password: string, enabled: boolean, email: string, role: Role[]) {
    this.id = id
    this.username = username
    this.password = password
    this.enabled = enabled
    this.email = email
    this.roles = role
  }

}

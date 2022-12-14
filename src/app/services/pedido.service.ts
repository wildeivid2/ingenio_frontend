import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Pedido } from './../models/Pedido';

import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }

  public obtenerPedidos(): Observable<Pedido[]> {
    return this.http.get(`${baserUrl}/pedido`)
    .pipe(
      map( (response: any) => response as Pedido[] ),
      catchError(e => {
        console.error(e.error.message);
        return throwError(e);
      })
    );
  }


}

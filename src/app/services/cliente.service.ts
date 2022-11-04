import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Cliente } from './../models/Cliente';

import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


  public obtenerClientes(): Observable<Cliente[]> {
    return this.http.get(`${baserUrl}/cliente`)
    .pipe(
      map(response => response as Cliente[] ),
      catchError(error => {
        console.log(error);
        return throwError(error);
      })
    );
  }

}

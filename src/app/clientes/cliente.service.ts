import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { of, Observable } from 'rxjs';

//libreria para comunicarnos con el backend
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ClienteService {

  private urlEndPoint: string = "http://localhost:8080/api/clientes";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'}); 
  
  //inyectamos el modulo de HttpClient con la variable http
  constructor(private http: HttpClient) { }

  getClientes(): Observable <Cliente[]>  {
    //definir la url que va a consumir o consultar la api
    //hacemos un cast para que sea del tipo cliente
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }

  create(cliente:Cliente) :Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint, cliente,{headers:this.httpHeaders})
  }
}
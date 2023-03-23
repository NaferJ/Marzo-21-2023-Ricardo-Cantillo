import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface'
import { ResponseI } from '../../modelos/response.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loginByusuario(form: LoginI) {
    throw new Error('Method not implemented.');
  }

  url:string = 'http://localhost/Marzo-23-2023-Ricardo-Cantillo-2/'

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion, form);
  }


}

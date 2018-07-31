import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http : HttpClient) { }

  public getEmpresas():Observable<any>{
    return this.http.get('https://kalimet.herokuapp.com/api/empresas/lista');
  }
}

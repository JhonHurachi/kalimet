import { HttpClient } from '@angular/common/http';
import { DbService } from './config/db.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  url:String = this.db.getUrl();

  constructor(private http : HttpClient, private db: DbService) { }

  public getTrabajadoresIdNom():Observable<any>{
    return this.http.get(`${this.url}trabajadores/trabajadoresNomId`);
  }

  public getTrabajadoresLista():Observable<any>{
    return this.http.get(`${this.url}trabajadores/trabajadoresLista`);
  }
  public deleteTrabajador(id:any, cabecera:any):Observable<any>{
    return this.http.delete(`${this.url}trabajadores/eliminarTrabajador/${id}`, cabecera);
  }
  public setTrabajador(body:any, cabecera:any):Observable<any>{
    return this.http.post(`${this.url}trabajadores/agregarTrabajador`, body, cabecera);
  }
  public updateTrabajador(body:any, cabecera:any):Observable<any>{
    return this.http.put(`${this.url}trabajadores/actualizarTrabajador`, body, cabecera);
  }
  public getTrabajador(id:number):Observable<any>{
    return this.http.get(`${this.url}trabajadores/trabajador/${id}`);
  }
}

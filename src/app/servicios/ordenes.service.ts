import { DbService } from './config/db.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  url:string = this.db.getUrl();

  constructor(private http : HttpClient, private db: DbService) { }

  public getOrdenes():Observable<any>{
    return this.http.get(`${this.url}ordenes/lista`);
  }

  public getOrden(id:number):Observable<any>{
    return this.http.get(`${this.url}ordenes/orden/${id}`);
  }

  public getOrigenes(id:number):Observable<any>{
    return this.http.get(`${this.url}ordenes/origenes/${id}`);
  }

  public getUltimaOrden():Observable<any>{
    return this.http.get(`${this.url}ordenes/ultimaOrden`);
  }

  public setOrden(body:any, cabecera:any):Observable<any>{
    return this.http.post(`${this.url}ordenes/agregarOrden`, body, cabecera);
  }

  public setOrigen(body:any, cabecera:any):Observable<any>{
    return this.http.post(`${this.url}ordenes/agregarOrigen`, body, cabecera);
  }

  public updateEmpresa(body:any, cabecera:any):Observable<any>{
    return this.http.put(`${this.url}empresas/actualizarEmpresa`, body, cabecera);
  }

  public deleteEmpresa(id:any, cabecera:any):Observable<any>{
    return this.http.delete(`${this.url}empresas/eliminarEmpresa/${id}`, cabecera);
  }

  public setActividad(body:any, cabecera:any):Observable<any>{
    return this.http.post(`${this.url}ordenes/agregarActividad`, body, cabecera);
  }

  public setActividadTrabajador(body:any, cabecera:any):Observable<any>{
    return this.http.post(`${this.url}ordenes/agregarActividadTrabajador`, body, cabecera);
  }
}

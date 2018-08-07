import { DbService } from './config/db.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  url:string = this.db.getUrl();

  constructor(private http : HttpClient, private db: DbService) { }

  public getEmpresas():Observable<any>{
    return this.http.get(`${this.url}empresas/lista`);
  }

  public getEmpresa(id:String):Observable<any>{
    return this.http.get(`${this.url}empresas/empresa/${id}`);
  }

  public setEmpresa(body:any, cabecera:any):Observable<any>{
    return this.http.post(`${this.url}empresas/agregarEmpresa`, body, cabecera);
  }

  public updateEmpresa(body:any, cabecera:any):Observable<any>{
    return this.http.put(`${this.url}empresas/actualizarEmpresa`, body, cabecera);
  }

  public deleteEmpresa(id:any, cabecera:any):Observable<any>{
    return this.http.delete(`${this.url}empresas/eliminarEmpresa/${id}`, cabecera);
  }
}

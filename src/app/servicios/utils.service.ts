import { HttpClient } from '@angular/common/http';
import { DbService } from './config/db.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  url:string = this.db.getUrl()

  constructor(private db: DbService, private http:HttpClient ) { }

  public getPaises():Observable<any>{
    return this.http.get(`${this.url}paises`);
  }

  public getContribuyentes():Observable<any>{
    return this.http.get(`${this.url}tipoContribuyentes`);
  }

  public getTiposDocumento():Observable<any>{
    return this.http.get(`${this.url}tipoDocumento`);
  }

  public getCargos():Observable<any>{
    return this.http.get(`${this.url}cargos`);
  }

  public getContactos():Observable<any>{
    return this.http.get(`${this.url}contactos`);
  }

  public getHabilidades():Observable<any>{
    return this.http.get(`${this.url}habilidades`);
  }

  public getActivs():Observable<any>{
    return this.http.get(`${this.url}activs`);
  }

  public getActiv(id:number):Observable<any>{
    return this.http.get(`${this.url}activ/${id}`);
  }

  public updateActiv(body:any, cabecera:any):Observable<any>{
    return this.http.put(`${this.url}actualizarActiv`, body, cabecera);
  }

  public setActiv(body:any, cabecera:any):Observable<any>{
    return this.http.post(`${this.url}agregarActiv`, body, cabecera);
  }

  public deleteActiv(id:any, cabecera:any):Observable<any>{
    return this.http.delete(`${this.url}eliminarActiv/${id}`, cabecera);
  }
//Productos
  public getProductos():Observable<any>{
    return this.http.get(`${this.url}productos`);
  }

  public getProducto(id:number):Observable<any>{
    return this.http.get(`${this.url}producto/${id}`);
  }

  public updateProducto(body:any, cabecera:any):Observable<any>{
    return this.http.put(`${this.url}actualizarProducto`, body, cabecera);
  }

  public setProducto(body:any, cabecera:any):Observable<any>{
    return this.http.post(`${this.url}agregarProducto`, body, cabecera);
  }

  public deleteProducto(id:any, cabecera:any):Observable<any>{
    return this.http.delete(`${this.url}eliminarProducto/${id}`, cabecera);
  }
//Fin

//Trabajos
public getTrabajos():Observable<any>{
  return this.http.get(`${this.url}trabajos`);
}

public getTrabajo(id:number):Observable<any>{
  return this.http.get(`${this.url}trabajo/${id}`);
}

public updateTrabajo(body:any, cabecera:any):Observable<any>{
  return this.http.put(`${this.url}actualizarTrabajo`, body, cabecera);
}

public setTrabajo(body:any, cabecera:any):Observable<any>{
  return this.http.post(`${this.url}agregarTrabajo`, body, cabecera);
}

public deleteTrabajo(id:any, cabecera:any):Observable<any>{
  return this.http.delete(`${this.url}eliminarTrabajo/${id}`, cabecera);
}
//Fin
}

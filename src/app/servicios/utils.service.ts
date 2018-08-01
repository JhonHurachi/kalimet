import { HttpClient } from '@angular/common/http';
import { DbService } from './config/db.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  url:String = this.db.getUrl()

  constructor(private db: DbService, private http:HttpClient ) { }

  public getPaises():Observable<any>{
    return this.http.get(`${this.url}paises`);
  }

  public getContribuyentes():Observable<any>{
    return this.http.get(`${this.url}tipoContribuyentes`);
  }

}

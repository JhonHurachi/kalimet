import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  url: String = 'https://kalimet.herokuapp.com/api/'

  constructor() { }

  getUrl():String{
    return this.url
  }
}

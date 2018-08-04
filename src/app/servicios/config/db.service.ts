import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  url: String = 'https://kalimet.herokuapp.com/api/'
  //url: String = 'http://localhost:3000/api/'

  constructor() { }

  getUrl():String{
    return this.url
  }
}

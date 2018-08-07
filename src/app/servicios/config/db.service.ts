import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  url: string = 'https://kalimet.herokuapp.com/api/'
  //url: string = 'http://localhost:3000/api/'

  constructor() { }

  getUrl():string{
    return this.url
  }
}

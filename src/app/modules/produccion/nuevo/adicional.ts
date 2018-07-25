import { Component} from '@angular/core';

@Component({
    selector: 'adicional',
    templateUrl: 'adicional.html',
    styleUrls: ['./nuevo.component.css'],
  })

  export class Adicional {
    constructor(){}  
    nombre: String = "Adicional 1"
    contactos: any = [
        {value: 'Contacto 1', viewValue: 'Contacto 1'},
        {value: 'Contacto 2', viewValue: 'Contacto 2'},
        {value: 'Contacto 3', viewValue: 'Contacto 3'}
        ];
    contacto:String = this.contactos[0].value 
    adicional:any={nombre:"Probando", contacto: "Contacto 1"} 
  }
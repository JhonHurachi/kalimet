import { Component} from '@angular/core';

@Component({
    selector: 'adicional',
    templateUrl: 'adicional.html',
    styleUrls: ['./nuevo.component.css'],
  })

  export class Adicional {
    constructor(){}  
    contactos: any = [
        {value: 'Contacto 1', viewValue: 'Contacto 1'},
        {value: 'Contacto 2', viewValue: 'Contacto 2'},
        {value: 'Contacto 3', viewValue: 'Contacto 3'}
        ];
    contacto:String = this.contactos[0].value 
    adicional:any={nombre:"Probando", descripcion:"Descripcion 1", contacto: "Contacto 1"} 
  }
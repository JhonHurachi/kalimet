import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../../node_modules/@angular/material';
import { Adicional } from './adicional';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'kal-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  myControl = new FormControl();
  options: User[] = [
    {name: 'Salazar Benavente Valeriano'},
    {name: 'Méndez Delfín José'},
    {name: 'Quero García Alberto'}
  ];
  filteredOptions: Observable<User[]>;
  
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  fechaEm = new Date();
  

  clientes: any = [
    {value: 'Transportes Kala', viewValue: 'Transportes Kala'},
    {value: 'Cliente 2', viewValue: 'Cliente 2'},
    {value: 'Cliente 3', viewValue: 'Cliente 3'}
  ];
  cliente:String = this.clientes[0].value

  contactos: any = [
    {value: 'Contacto 1', viewValue: 'Contacto 1'},
    {value: 'Contacto 2', viewValue: 'Contacto 2'},
    {value: 'Contacto 3', viewValue: 'Contacto 3'}
  ];
  contacto:String = this.contactos[0].value
  constructor(public dialog : MatDialog) { }

  adicional: Object
  adicionales: Array<Object> = []

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    this.myControl.valueChanges.subscribe(val=>{
      this.existeFun(val)
    })
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  existe:boolean = false

  existeFun(val:User){
    this.existe = val==null?false:!this.options.some(elem => elem.name==val.name)
    console.log(this.existe)
  }
  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  openDialog() {
    const dialogRef = this.dialog.open(Adicional, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result.nombre}`);
      console.log(`Dialog result: ${result.contacto}`);
      this.adicional = {titulo:result.nombre, des:result.descripcion, ref:result.contacto}
      if(result!=null)
        this.adicionales.push(this.adicional)
    });
  }

}



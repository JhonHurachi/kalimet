import { Trabajo } from './dialogs/trabajo';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Adicional } from './dialogs/adicional';
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
  
  constructor(public dialog : MatDialog) { }

  //Responsable
  myControl = new FormControl();
  options: User[] = [
    {name: 'Salazar Benavente Valeriano'},
    {name: 'Méndez Delfín José'},
    {name: 'Quero García Alberto'}
  ];
  filteredOptions: Observable<User[]>;

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

  //Fin Responsable

  //DatePicker  
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  fechaEm = new Date();
  //Fin DatePicker
  
  //Clientes
  clientes: any = [
    {value: 'Transportes Kala', viewValue: 'Transportes Kala'},
    {value: 'Cliente 2', viewValue: 'Cliente 2'},
    {value: 'Cliente 3', viewValue: 'Cliente 3'}
  ];
  cliente:String = this.clientes[0].value
  //Fin Clientes

  //Contactos
  contactos: any = [
    {value: 'Contacto 1', viewValue: 'Contacto 1'},
    {value: 'Contacto 2', viewValue: 'Contacto 2'},
    {value: 'Contacto 3', viewValue: 'Contacto 3'}
  ];
  contacto:String = this.contactos[0].value
  //Fin contactos

  //Adicionales
  adicional: Object
  adicionales: Array<Object> = []

  openDialog() {
    const dialogRef = this.dialog.open(Adicional, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {     
      if(result!=null){
        this.adicional = {nro:`ADD${this.adicionales.length+1}`,titulo:result.nombre, des:result.descripcion, ref:result.contacto}
        this.adicionales.push(this.adicional)
      }
    });
  }
  //Fin adicionales

  //Trabajos
  openTrabajo() {
    const dialogRef = this.dialog.open(Trabajo, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  //Fin trabajos

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
}



import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';
import { Adicional } from './adicional';

@Component({
  selector: 'kal-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  responsables: any = [
    {value: 'Salazar Benavente Valeriano', viewValue: 'Salazar Benavente Valeriano'},
    {value: 'Méndez Delfín José', viewValue: 'Méndez Delfín José'},
    {value: 'Quero García Alberto', viewValue: 'Quero García Alberto'}
  ];
  responsable:String = this.responsables[0].value

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

  fechaActual: any = Date()
  constructor(public dialog : MatDialog) { }

  adicional: Object
  adicionales: Array<Object> = []

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(Adicional, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result.nombre}`);
      console.log(`Dialog result: ${result.contacto}`);
      this.adicional = {titulo:result.nombre, ref:result.contacto}
      this.adicionales.push(this.adicional)
    });
  }

}



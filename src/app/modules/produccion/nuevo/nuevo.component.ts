import { TrabajadoresService } from './../../../servicios/trabajadores.service';
import { Trabajo } from './dialogs/trabajo';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Adicional } from './dialogs/adicional';
import {FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';
import { Router } from '../../../../../node_modules/@angular/router';
import { UtilsService } from '../../../servicios/utils.service';
import { EmpresasService } from '../../../servicios/empresas.service';

export interface Trabajador {
  id_trab:number,
  nombre_trab:string
}

export interface Cliente{
  cod_emp_cli: string,
  pais_emp_cli: string,
  ruc_emp_cli: string,
  raz_soc_emp_cli: string,
  tipo_contribuyente_cli: string
}

@Component({
  selector: 'kal-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  
  produccionForm: FormGroup
  post: any
  paises: Array<any>
  tiposcon: Array<any> 
  filteredOptions: Observable<Trabajador[]>;
  filteredOptionsCli: Observable<Cliente[]>;
  existeResp:boolean = false
  existeCli:boolean = false
  clientes:Cliente[]
  trabajadores: Trabajador[]
  adicional: Object
  adicionales: Array<Object> = []  
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  

  constructor(
    private dialog : MatDialog,
    private fb: FormBuilder, 
    private snackBar: MatSnackBar, 
    private router: Router, 
    private empresasService:EmpresasService,
    private utilsService:UtilsService,
    private trabajadoresService:TrabajadoresService
  ) { 
    this.produccionForm = this.fb.group({
      'operacion': [1234, Validators.required],
      responsable: new FormControl([null, Validators.required]),
      'fecha':[new Date(), Validators.required],
      'referencia': ['Agregar', Validators.compose([Validators.required])],
      cliente: new FormControl([null, Validators.compose([Validators.required])])
    })
  }

  //Responsable
  displayFn(trabajador?: Trabajador): string | undefined {
    return trabajador ? trabajador.nombre_trab : undefined;
  } 

  existeFun(val:Trabajador){
    this.existeResp = val==null?false:!this.trabajadores.some(elem => elem.nombre_trab==val.nombre_trab)
    console.log(this.existeResp)
  }
  
  private _filter(name: string): Trabajador[] {
    const filterValue = name.toLowerCase();
    return this.trabajadores.filter(trabajador => trabajador.nombre_trab.toLowerCase().indexOf(filterValue) === 0);
  }
  //Fin Responsable

  //Cliente
  displayFnCli(cliente?: Cliente): string | undefined {
    return cliente ? cliente.raz_soc_emp_cli : undefined;
  } 

  existeFunCli(val:Cliente){
    this.existeCli= val==null?false:!this.clientes.some(elem => elem.raz_soc_emp_cli==val.raz_soc_emp_cli)
  }
  
  private _filterCli(name: string): Cliente[] {
    const filterValue = name.toLowerCase();
    return this.clientes.filter(cliente => cliente.raz_soc_emp_cli.toLowerCase().indexOf(filterValue) === 0);
  }
  //Fin Cliente

  //DatePicker  
  //Fin DatePicker

  //Contactos
  contactos: any = [
    {value: 'Contacto 1', viewValue: 'Contacto 1'},
    {value: 'Contacto 2', viewValue: 'Contacto 2'},
    {value: 'Contacto 3', viewValue: 'Contacto 3'}
  ];
  contacto:String = this.contactos[0].value
  //Fin contactos

  //Adicionales
  openDialog() {
    const dialogRef = this.dialog.open(Adicional, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {     
      if(result!=null){
        this.adicional = {nro:`ADD  ${this.adicionales.length+1}`,titulo:result.nombre, des:result.descripcion, ref:result.contacto}
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

  //Cuadro de dialogo
  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  //fin Cuadro

  addOrden(orden){
    console.log(orden)
  }

  ngOnInit() {
    this.trabajadoresService.getTrabajadoresIdNom()
      .subscribe(
        (data)=>{
          this.trabajadores=data;
          this.filteredOptions = this.produccionForm.controls['responsable'].valueChanges
          .pipe(
            startWith<string | Trabajador>(''),
            map(value => typeof value === 'string' ? value : value.nombre_trab),
            map(name => name ? this._filter(name) : this.trabajadores.slice())
          );
        this.produccionForm.controls['responsable'].valueChanges.subscribe(val=>{
          this.existeFun(val)
        });
        },
        (error)=>{
          console.log(error);
        }
      )
    
    this.empresasService.getEmpresas()
      .subscribe(
        (data)=>{
          this.clientes=data;
          this.filteredOptionsCli = this.produccionForm.controls['cliente'].valueChanges
            .pipe(
              startWith<string | Cliente>(''),
              map(value => typeof value === 'string' ? value : value.raz_soc_emp_cli),
              map(name => name ? this._filterCli(name) : this.clientes.slice())
            );
          this.produccionForm.controls['cliente'].valueChanges.subscribe(val=>{
            this.existeFunCli(val)
          });
        },
        (error)=>{
          console.log(error);
        }
      )
  }
}



import { OrdenesService } from './../../../servicios/ordenes.service';
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

export interface Contacto{
  vcod_contac: number,
  vnom_contact: string,
  vcod_emp_contact: string
}

export interface Ad{
  nro:string, 
  des:string, 
  ref:string, 
  idC:number
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
  adicional: Ad
  adicionales: Array<Ad> = []  
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  contactos: Array<Contacto>=[]
  numOperacion:number=1
  
  constructor(
    private dialog : MatDialog,
    private fb: FormBuilder, 
    private snackBar: MatSnackBar, 
    private router: Router, 
    private empresasService:EmpresasService,
    private utilsService:UtilsService,
    private trabajadoresService:TrabajadoresService,
    private ordenesService: OrdenesService
  ) { 
    this.produccionForm = this.fb.group({
      responsable: new FormControl([null, Validators.required]),
      'fecha':[new Date(), Validators.required],
      'referencia': [null, Validators.compose([Validators.required])],
      cliente: new FormControl([null, Validators.compose([Validators.required])]),
      'opP': [null, Validators.compose([Validators.required])],
      contacto : new FormControl([null,Validators.compose([Validators.required])])
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

  //Adicionales
  openDialog() {
    const dialogRef = this.dialog.open(Adicional, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {     
      if(result!=null){
        let nombreC=""
        for(let c of this.contactos){
          if(c.vcod_contac==result.contacto)
            nombreC=c.vnom_contact
        }
        this.adicional = {nro:`A${this.adicionales.length+1}`, des:result.descripcion, ref:nombreC, idC:result.contacto}
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
    let o = {
      responsable: orden.responsable.id_trab,
      fecha: orden.fecha,
      referencia: orden.referencia,
      cliente: orden.cliente.cod_emp_cli
    }

    let principal = {
      orden:this.numOperacion,
      nombre:'OP',
      descripcion:orden.opP,
      contacto: orden.contacto
    }
    
    let headers = {
      'Content-Type': 'application/json'
    }
    this.ordenesService.setOrden(o,headers)
      .subscribe(
        (data)=>{
        this.ordenesService.setOrigen(principal,headers)
          .subscribe(
            (data)=>{console.log('principal')},
            (error)=>{console.log(error)}
          )
          for(let adds of this.adicionales){
            let adicional = {
              orden:this.numOperacion,
              nombre:adds.nro,
              descripcion:adds.des,
              contacto: adds.idC
            }
            this.ordenesService.setOrigen(adicional,headers)
          .subscribe(
            (data)=>{console.log('adicional')},
            (error)=>{console.log(error)}
          )       
        }
          this.openAddSuccess('Orden añadida','Aceptar');
          this.router.navigate(["produccion/ordenes"]);
        },
        (error)=>{
          this.openAddSuccess('Error al añadir la orden','Aceptar')
        }
      )      
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
    this.ordenesService.getUltimaOrden()
      .subscribe(
        (data)=>{
          this.numOperacion=data.ultima+1;
        },
        (error)=>{
          this.numOperacion=1;
          console.log(error)}
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
    
    this.utilsService.getContactos()
      .subscribe(
        (data)=>{
          this.contactos = data;
        },
        (error)=>{console.log(error)}
      )
  }
}



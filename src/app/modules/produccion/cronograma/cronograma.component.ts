import { ITrabajo } from './../../../interfaces/trabajo';
import { Iproducto } from './../../../interfaces/producto';
import { Hora } from './hora';
import { MatDialog } from '@angular/material';
import { TrabajadoresService } from './../../../servicios/trabajadores.service';
import { OrdenesService } from './../../../servicios/ordenes.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../servicios/utils.service';
import * as moment from 'moment';

export interface Orden{
  nro:number,
  fecha:Date,
  responsable:string,
  referencia:string,
  cliente:string
}

export interface Origen{
  vvcod_orden: number,
  vcod_origen: number,
  vnom_ord: string,
  vdesc_orden: string,
  vcontact_orden: string
}

export interface Trabaj{
  or: number,
  trab:number,
  trabT:string,
  esp: number,
  espT: string,
  hh:number,
  mh:number,
  cat: number
}

export interface Actividad{
  tipo:number,
  desc:string,
  trabajo:number,
  producto:number,
  trabajs: Array<Trabaj>,
  ht:number,
  mt:number
}

@Component({
  selector: 'kal-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit {

  sub:any
  orden:Orden = {
    nro:1,
    fecha:new Date(),
    responsable:'',
    referencia:'',
    cliente:''
  }
  origen:Origen={
    vvcod_orden: 1,
    vcod_origen: 1,
    vnom_ord: '',
    vdesc_orden: '',
    vcontact_orden: ''
  }
  origenes:Array<Origen>
  ver:boolean=false;
  trabajadores:any
  trabajos:Array<ITrabajo>
  productos:Array<Iproducto>
  habilidades:any
  ahora:string=moment(new Date()).format('YYYY-MM-DDThh:mm')
  trabAct:Trabaj
  actividad:Actividad
  trabActs:Array<Trabaj>=[]
  actividades:Array<Actividad>=[]
  cronogramaForm:FormGroup
  horaH:number=0
  minH:number=1
  horaT:number=0
  minT:number=1
  o:number
  activs = []

  constructor(
    private route:ActivatedRoute,
    private ordenesService:OrdenesService,
    private trabajadoresService:TrabajadoresService,
    private utilsService:UtilsService,
    private fb:FormBuilder,
    private dialog : MatDialog,
  ) {
    this.cronogramaForm = this.fb.group({
      actv:fb.group({
      'tipo':[null,Validators.required],
      'nombre':[null, Validators.compose([Validators.required])],
      'trabajo':[null, Validators.required],
      'producto':[null, Validators.required],
      tjdor:fb.group({
        't':[null, Validators.required],
        'esp':[null, Validators.required]
      }),
      ht:[1,Validators.required],
      mt:[0,Validators.required]
    })})
   }

  buscarTrabajador(value:number):string{
    for(let t of this.trabajadores){
      if(t.id_trab==value)
        return t.nombre_trab;
    }
  }

  buscarEspecialidad(value:number):string{
    console.log(this.habilidades)
    for(let e of this.habilidades){
      if(e.cod_hab==value)
        return e.desc_hab;
    }
  }

  addTrabActv(ta){
      this.trabAct= {
      or: this.o,
      trab:ta.value.t,
      trabT:this.buscarTrabajador(ta.value.t),
      esp: ta.value.esp,
      espT: this.buscarEspecialidad(ta.value.esp),
      hh:this.horaH,
      mh:this.minH,
      cat: 0
    }
    this.trabActs.push(this.trabAct)
  }

  addActiv(ac){
    console.log(ac)
    this.actividad = {
      tipo:ac.tipo,
      desc:ac.nombre,
      trabajo:ac.trabajo,
      producto:ac.producto,
      trabajs: this.trabActs,
      ht:this.horaT,
      mt:this.minT
    }
    this.actividades.push(this.actividad)
    this.trabActs = []
    console.log(this.actividades)
  }

  addCronograma(ac){

  }

  openHoraH() {
    const dialogRef = this.dialog.open(Hora, {
      width: '150px'
    });

    dialogRef.afterClosed().subscribe(result => {     
      if(result!=null){
          console.log(result)
          this.horaH=result.hora
          this.minH=result.min
        }
      })
    }

  openHoraT() {
    const dialogRef = this.dialog.open(Hora, {
      width: '150px'
    });

    dialogRef.afterClosed().subscribe(result => {     
      if(result!=null){
          console.log(result)
          this.horaT=result.hora
          this.minT=result.min
        }
      })
    }
  

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.o = +params['id']
      this.ordenesService.getOrden(+params['id'])
        .subscribe(
          (data)=>{
            this.orden.nro = data.cod_orden;
            this.orden.fecha = data.fec_orden;
            this.orden.referencia = data.ref_orden;
            this.orden.responsable = data.resp_orden;
            this.orden.cliente = data.cliente_orden;
          },
          (error)=>{console.log(error)}
        )
      
      this.ordenesService.getOrigenes(+params['id'])
        .subscribe(
          (data)=>{
            this.origenes=data;
            this.ver=data.length>0?true:false;
          },
          (error)=>{
            console.log(error)
          }
        )
      
      this.trabajadoresService.getTrabajadoresLista()
      .subscribe(
        (data)=>{          
          this.trabajadores = data;
        },
        (error)=>{
          console.log(error)
        }
      );

      this.utilsService.getTrabajos()
        .subscribe(
          (data)=>{          
            this.trabajos = data;
          },
          (error)=>{
            console.log(error)
          }
      );

      this.utilsService.getProductos()
        .subscribe(
          (data)=>{          
            this.productos = data;
          },
          (error)=>{
            console.log(error)
          }
      );

      this.utilsService.getHabilidades()
        .subscribe(
          (data)=>{          
            this.habilidades= data;
          },
          (error)=>{
            console.log(error)
          }
      );

      this.utilsService.getActivs()
        .subscribe(
          (data)=>{          
            this.activs= data;
          },
          (error)=>{
            console.log(error)
          }
      );
    })
  }

}

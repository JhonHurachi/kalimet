import { TrabajadoresService } from './../../../servicios/trabajadores.service';
import { Trabajador } from './../../mantenimiento/trabajadores/actualizar-trabajador/actualizar-trabajador.component';
import { OrdenesService } from './../../../servicios/ordenes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../servicios/utils.service';

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

export interface Trabajador{

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
  trabajos:any
  productos:any
  habilidades:any

  constructor(
    private route:ActivatedRoute,
    private ordenesService:OrdenesService,
    private trabajadoresService:TrabajadoresService,
    private utilsService:UtilsService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.ordenesService.getOrden(+params['id'])
        .subscribe(
          (data)=>{
            this.orden.nro = data.cod_orden;
            this.orden.fecha = data.fec_orden;
            this.orden.referencia = data.ref_orden;
            this.orden.responsable = data.resp_orden;
            this.orden.cliente = data.cliente_orden;
            console.log(this.orden)
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
    })
  }

}

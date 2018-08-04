import { UtilsService } from './../../../../servicios/utils.service';
import { TrabajadoresService } from './../../../../servicios/trabajadores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';

export interface Trabajador {
  id:number,
  tipo_doc:number,
  tipo_cont:number,
  doc:number,
  fecnac:any,
  ape_pat:string,
  ape_mat:string,
  primer_nombre:string,
  segundo_nombre:string,
  direccion:string,
  telefono:string,
  mail:string,
  cargo:number
}

@Component({
  selector: 'kal-actualizar-trabajador',
  templateUrl: './actualizar-trabajador.component.html',
  styleUrls: ['./actualizar-trabajador.component.css']
})
export class ActualizarTrabajadorComponent implements OnInit {

  trabajadorForm: FormGroup;
  trab: Trabajador={
    id:1,
    tipo_doc:1,
    tipo_cont:1,
    doc:1,
    fecnac:new Date(),
    ape_pat:'',
    ape_mat:'',
    primer_nombre:'',
    segundo_nombre:'',
    direccion:'',
    telefono:'',
    mail:'',
    cargo:1
  }
  tipos_doc: Array<any>=[];
  tipos_cont: Array<any>=[];
  cargos: Array<any>=[];
  minDate = new Date(1930, 0, 1);
  maxDate = new Date(2000, 0, 1);
  sub:any;

  constructor(
    private fb: FormBuilder, 
    private snackBar: MatSnackBar,
    private router: Router, 
    private route: ActivatedRoute,
    private trabajadorService:TrabajadoresService,
    private utilsService:UtilsService,
  ) {
    this.trabajadorForm = this.fb.group({
      'id':[null,Validators.required],
      'tipo_doc':[null, Validators.required],
      'tipo_cont': [null, Validators.compose([Validators.required])],
      'doc': [null, Validators.compose([Validators.required])],
      'fecnac':[new Date(), Validators.required],
      'ape_pat': [null, Validators.compose([Validators.required])],
      'ape_mat': [null, Validators.compose([Validators.required])],
      'primer_nombre': [null, Validators.compose([Validators.required])],
      'segundo_nombre': [''],
      'direccion': [''],
      'telefono': ['', Validators.compose([Validators.pattern("^[0-9]{9}$")])],
      'mail': ['', Validators.compose([Validators.email])],
      'cargo': [null, Validators.compose([Validators.required])]
    })
   }

   updateTrabajador(trabajador){
    let headers = {
      'Content-Type': 'application/json'
    }
    this.trabajadorService.updateTrabajador(trabajador, headers)
      .subscribe(
        (data)=>{
              console.log('Exito');
              this.openAddSuccess("Trabajador actualizado", "Aceptar")
              this.mostrarTrabajadores();
        },
        (error)=>{console.log(error)}
      );
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  mostrarTrabajadores(){
    this.router.navigate(["mantenimientos/trabajadores/lista"]);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.trabajadorService.getTrabajador(+params['id'])
      .subscribe(
        (data)=>{
          this.trab.id = +params['id'];
          this.trab.tipo_doc=data.cod_doc_id;
          this.trab.tipo_cont=data.cod_cont_sunat;
          this.trab.doc=data.num_doc_id;
          this.trab.fecnac=data.fec_nac_trabajador;
          this.trab.ape_pat=data.ape_pat_trabajador;
          this.trab.ape_mat=data.ape_mat_trabajador;
          this.trab.primer_nombre=data.primer_nombre_trabajador;
          this.trab.segundo_nombre=data.segundo_nombre_trabajador;
          this.trab.direccion=data.dir_trabajador;
          this.trab.telefono=data.tel_trabajador;
          this.trab.mail=data.mail_trabajador;
          this.trab.cargo=data.cod_cargo_trabajador;
          this.trabajadorForm.setValue(this.trab);
        },
        (error)=>{
          console.log(error)
        }
      );
   });

    this.utilsService.getContribuyentes()
    .subscribe(
      (data)=>{
        this.tipos_cont= data;
      }
    );

    this.utilsService.getTiposDocumento()
    .subscribe(
      (data)=>{
        this.tipos_doc= data;
      }
    );

    this.utilsService.getCargos()
    .subscribe(
      (data)=>{
        this.cargos= data;
      }
    );
  }

}

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contacto } from './../nuevo.component';
import { UtilsService } from './../../../../servicios/utils.service';
import { Component, OnInit} from '@angular/core';

export interface Contacto{
  vcod_contac: number,
  vnom_contact: string,
  vcod_emp_contact: string
}

@Component({
    selector: 'adicional',
    templateUrl: 'adicional.html',
    styleUrls: ['../nuevo.component.css'],
  })
  
  export class Adicional implements OnInit {

    contactos:Array<Contacto>=[]
    adicionalForm: FormGroup
      
    constructor(
      private utilsService:UtilsService,
      private fb:FormBuilder
    ) {
      this.adicionalForm = this.fb.group({
        'descripcion': [null, Validators.required],
        'contacto': [null, Validators.required]
      })
    } 

    ngOnInit(){
      this.utilsService.getContactos()
        .subscribe(
          (data)=>{
            this.contactos = data;
          },
          (error)=>{console.log(error)}
        )
    }
  }
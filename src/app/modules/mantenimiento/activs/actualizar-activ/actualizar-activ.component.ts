import { UtilsService } from './../../../../servicios/utils.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'kal-actualizar-activ',
  templateUrl: './actualizar-activ.component.html',
  styleUrls: ['./actualizar-activ.component.css']
})
export class ActualizarActivComponent implements OnInit {

  activForm: FormGroup;
  sub: any;
  activ= {
    activ:"",
    id:0
  }

  constructor(
    private utilsService:UtilsService,
    private snackBar:MatSnackBar,    
    private router: Router,
    private fb: FormBuilder, 
    private route:ActivatedRoute,
    
  ) { 
    this.activForm = this.fb.group({
      'id':[null, Validators.required],
      'activ':[null, Validators.required]
    })
  }

  updateActiv(activ){
    console.log(activ)
    let headers = {
      'Content-Type': 'application/json'
    }
    this.utilsService.updateActiv(activ, headers)
      .subscribe(
        (data)=>{
              console.log('Exito');
              this.openAddSuccess("Actividad actualizada", "Aceptar")
              this.router.navigate(["mantenimientos/activs/lista"]);
        },
        (error)=>{console.log(error)}
      );
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.utilsService.getActiv(+params['id'])
      .subscribe(
        (data)=>{
          this.activ.id = params['id'];
          this.activ.activ = data.des_activ;
          this.activForm.setValue(this.activ)
        }
      );
  });
  }

}

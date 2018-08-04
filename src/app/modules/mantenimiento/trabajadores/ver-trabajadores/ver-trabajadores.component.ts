import { TrabajadoresService } from './../../../../servicios/trabajadores.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';

@Component({
  selector: 'kal-ver-trabajadores',
  templateUrl: './ver-trabajadores.component.html',
  styleUrls: ['./ver-trabajadores.component.css']
})
export class VerTrabajadoresComponent implements OnInit {

  trabajadores: any = []

  constructor(
    private trabajadoresService: TrabajadoresService,
    private snackBar: MatSnackBar
  ) { }

  eliminarTrabajador(id:number){
    let headers = {}
    this.trabajadoresService.deleteTrabajador(id, headers)
      .subscribe(
        (data)=>{            
          this.openAddSuccess("Trabajador eliminado", "Aceptar")       
          this.verTrabajadores()
        },
        (error)=>{
          this.openAddSuccess("No se puede eliminar a este trabajador", "Aceptar") 
        }
      )
  }

  openAddSuccess(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  verTrabajadores(){
    this.trabajadoresService.getTrabajadoresLista()
      .subscribe(
        (data)=>{          
          this.trabajadores = data;
        },
        (error)=>{
          console.log(error)
        }
      );
  }

  ngOnInit() {
    this.verTrabajadores();
  }

}

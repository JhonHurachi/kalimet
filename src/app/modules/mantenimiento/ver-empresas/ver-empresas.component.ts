import { EmpresasService } from './../../../servicios/empresas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kal-ver-empresas',
  templateUrl: './ver-empresas.component.html',
  styleUrls: ['./ver-empresas.component.css']
})
export class VerEmpresasComponent implements OnInit {

  empresas:any = []

  constructor(private empresasService:EmpresasService) { }



  ngOnInit() {
    this.empresasService.getEmpresas()
      .subscribe(
        (data)=>{
          console.log(data);
          this.empresas = data;
        }
      );
  }

}

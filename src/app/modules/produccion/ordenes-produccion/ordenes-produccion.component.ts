import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kal-ordenes-produccion',
  templateUrl: './ordenes-produccion.component.html',
  styleUrls: ['./ordenes-produccion.component.css']
})
export class OrdenesProduccionComponent implements OnInit {

  constructor() { }

  modo:String=screen.width<=1024?"over":"side"
  abierto: boolean=screen.width<=1024?false:true

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kal-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  modo:String=screen.width<=1024?"push":"side"
  abierto: boolean=screen.width<=1024?false:true

  ngOnInit() {
  }

}

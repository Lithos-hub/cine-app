import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  animations: [

      trigger('fadeBoton', [
        state('inactive', style({ opacity: 0 })),
        state('active', style({ opacity: 1 })),
        transition('inactive => active', animate(2000)),
        transition('active => inactive', animate(2000)),
      ])
    ]
  })

export class NavbarComponent implements OnInit {

  public state:string = 'inactive';

  mostrar = false;

  desplegar = true;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarMenu(){
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }
  

}

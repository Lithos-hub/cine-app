import { Component, OnInit } from '@angular/core';
import { NovedadesService } from '../../services/novedades.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html'
})
export class NovedadesComponent implements OnInit {

  novedades: any;

  // tslint:disable-next-line: variable-name
  constructor(public _novedades: NovedadesService,
              private router: Router){

                this._novedades.getNovedades()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.novedades = data.results;
      });
  }

  ngOnInit(){

  }

}
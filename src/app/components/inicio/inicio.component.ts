import { Component, OnInit } from '@angular/core';
import { GaleriaInicioService } from '../../services/galeria-inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  url = 'https://image.tmdb.org/t/p/w500';

  imagenes: any;

  constructor(public _galeria: GaleriaInicioService){

        this._galeria.getGaleria()
          .subscribe( (data: any) => {
          console.log(data.results);
          this.imagenes = data.results;
        });
        }
  ngOnInit(): void {
  }

}
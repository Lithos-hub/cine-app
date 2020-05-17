import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NovedadesService } from '../../services/novedades.service';

@Component({
  selector: 'app-pelicula-selec-novedades',
  templateUrl: './pelicula-selec-novedades.component.html',
  styles: [
  ]
})
export class PeliculaSelecNovedadesComponent implements OnInit {

  url = 'https://image.tmdb.org/t/p/w500';

  peliculanovedad: any;

  constructor(public activatedRoute: ActivatedRoute,
              public _novedades: NovedadesService) {

            this.activatedRoute.params.subscribe( parametros => {
              console.log(parametros);
              this._novedades.getPelicula( parametros['id'] )
                  .subscribe( pelicula => this.peliculanovedad = pelicula );
                  });
    }
  ngOnInit(): void {
  }

}

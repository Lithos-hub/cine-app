import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NovedadesService } from '../../services/novedades.service';

@Component({
  selector: 'app-pelicula-selec-inicio',
  templateUrl: './pelicula-selec-inicio.component.html',
  styles: [
  ]
})
export class PeliculaSelecInicioComponent implements OnInit {

  url = 'https://image.tmdb.org/t/p/w500';

  peliculainicio: any;

  constructor(public activatedRoute: ActivatedRoute,
              public _novedades: NovedadesService) {

            this.activatedRoute.params.subscribe( parametros => {
              console.log(parametros);
              this._novedades.getPelicula( parametros['id'] )
                  .subscribe( pelicula => this.peliculainicio = pelicula );
                  });
    }
  ngOnInit(): void {
  }

}
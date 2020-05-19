import { Component, OnInit } from '@angular/core';
import { PorgeneroService } from '../../services/porgenero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula-selec-genero',
  templateUrl: './pelicula-selec-genero.component.html',
  styles: [
  ]
})
export class PeliculaSelecGeneroComponent implements OnInit {

  url = 'https://image.tmdb.org/t/p/w500';

  peliculagenero: any;

  constructor(public activatedRoute: ActivatedRoute,
              public _generos: PorgeneroService) {

            this.activatedRoute.params.subscribe( parametros => {
              console.log(parametros);
              this._generos.getPelicula( parametros['id'] )
                  .subscribe( pelicula => this.peliculagenero = pelicula );
                  });
    }
  ngOnInit(): void {
  }

}
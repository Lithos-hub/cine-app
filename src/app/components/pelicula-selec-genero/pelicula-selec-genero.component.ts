import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FichaPeliculaService } from '../../services/ficha-pelicula.service';

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
              public _fs: FichaPeliculaService) {

            this.activatedRoute.params.subscribe( parametros => {
              console.log(parametros);
              this._fs.getFichaPelicula( parametros['id'] )
                  .subscribe( pelicula => this.peliculagenero = pelicula );
                  });
    }
  ngOnInit(): void {
  }

}
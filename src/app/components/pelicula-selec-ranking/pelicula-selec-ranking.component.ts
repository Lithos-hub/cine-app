import { Component, OnInit } from '@angular/core';
import { FichaPeliculaService } from '../../services/ficha-pelicula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula-selec-ranking',
  templateUrl: './pelicula-selec-ranking.component.html',
  styles: [
  ]
})
export class PeliculaSelecRankingComponent implements OnInit {


  url = 'https://image.tmdb.org/t/p/w500';

  pelicularanking: any;

  constructor(public activatedRoute: ActivatedRoute,
              public _fs: FichaPeliculaService) {

            this.activatedRoute.params.subscribe( parametros => {
              console.log(parametros);
              this._fs.getFichaPelicula( parametros['id'] )
                  .subscribe( pelicula => this.pelicularanking = pelicula );
                  });
    }
  ngOnInit(): void {
  }
}

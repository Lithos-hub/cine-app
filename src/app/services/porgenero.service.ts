import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PorgeneroService {

  peliculasgenero: any[] = [];

  private apikey: string = 'c9a3e87b703c630c13d5ea61ef62c7b6';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';


  constructor(private http: HttpClient) { }

  getPelicula(id:string) {

    const url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getAccion() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=28`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getAventura() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=12`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getAnimacion() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=16`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getComedia() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=35`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getCrimen() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=80`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getDocumental() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=99`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getDrama() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=18`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getFamilia() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=10751`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getFantasia() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=14`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getHistoria() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=36`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getTerror() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=27`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getMusica() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=10402`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getMisterio() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=9648`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getRomance() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=10749`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getCienciaFiccion() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=878`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getPeliculaTV() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=10770`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getSuspense() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=53`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getBelica() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=10752`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  getWestern() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es-ES&sort_by=popularity.desc&page=1&with_genres=37`;
    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }




}

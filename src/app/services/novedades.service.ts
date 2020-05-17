import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {

  novedades: any[] = [];

  peliculanovedad: any[] = [];

  private apikey:string = 'c9a3e87b703c630c13d5ea61ef62c7b6';
  private urlMoviedb:string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getNovedades() {


    const desde = new Date();
    const hasta = new Date();

    const fecha1 = `${ hasta.getFullYear() }-${ ('0' + (hasta.getMonth() + 1 )).slice(-2) }-${ ('0' + ( hasta.getDate() - 9)).slice(-2) }`;
    const fecha2 = `${ desde.getFullYear() }-${ ('0' + (desde.getMonth() + 1 )).slice(-2) }-${ ('0' + ( desde.getDate() - 9)).slice(-2) }`;


    // tslint:disable-next-line: max-line-length
    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ fecha2 }&primary_release_date.lte=${ fecha1 }&api_key=${ this.apikey }&language=es-ES`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }

  getPelicula( id:string ) {

    const url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );

  }


}


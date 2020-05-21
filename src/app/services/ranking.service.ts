import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  peliculasranking: any[] = [];

  private apikey: string = 'c9a3e87b703c630c13d5ea61ef62c7b6';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';


  constructor(private http: HttpClient) { }

  get2010() {

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_year=2010&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  get2011() {

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_year=2011&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  get2012() {

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_year=2012&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  get2013() {

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_year=2013&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  get2014() {

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_year=2014&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  get2015() {

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_year=2015&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  get2016() {

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_year=2016&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  get2017() {

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_year=2017&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  get2018() {

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_year=2018&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  get2019() {

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_year=2019&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }
  get2020() {

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_year=2020&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback=JSON_CALLBACK' );
  }


}

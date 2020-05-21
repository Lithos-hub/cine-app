import { Component, OnInit } from '@angular/core';
import { PorgeneroService } from '../../services/porgenero.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styles: [
  ]
})
export class GenerosComponent implements OnInit {

  url = 'https://image.tmdb.org/t/p/w500';


  dropon1 = false;
  dropon2 = false;
  dropon3 = false;
  dropon4 = false;
  dropon5 = false;
  dropon6 = false;
  dropon7 = false;
  dropon8 = false;
  dropon9 = false;
  dropon10 = false;
  dropon11 = false;
  dropon12 = false;
  dropon13 = false;
  dropon14 = false;
  dropon15 = false;
  dropon16 = false;
  dropon17 = false;
  dropon18 = false;
  dropon19 = false;


  generos: any;
  accion: any;
  aventura: any;
  animacion: any;
  comedia: any;
  crimen: any;
  documental: any;
  drama: any;
  familia: any;
  fantasia: any;
  historia: any;
  terror: any;
  musica: any;
  misterio: any;
  romance: any;
  cienciaficcion: any;
  peliculastv: any;
  suspense: any;
  belica: any;
  western: any;

  constructor(public _genero: PorgeneroService,
              ){

                this._genero.getAccion()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.accion = data.results;
      });
                this._genero.getAventura()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.aventura = data.results;
      });
                this._genero.getAnimacion()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.animacion = data.results;
      });
                this._genero.getComedia()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.comedia = data.results;
      });
                this._genero.getCrimen()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.crimen = data.results;
      });
                this._genero.getDocumental()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.documental = data.results;
      });
                this._genero.getDrama()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.drama = data.results;
      });
                this._genero.getFamilia()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.familia = data.results;
      });
                this._genero.getFantasia()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.fantasia = data.results;
      });
                this._genero.getHistoria()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.historia = data.results;
      });
                this._genero.getTerror()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.terror = data.results;
      });
                this._genero.getMusica()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.musica = data.results;
      });
                this._genero.getMisterio()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.misterio = data.results;
      });
                this._genero.getRomance()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.romance = data.results;
      });
                this._genero.getCienciaFiccion()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.cienciaficcion = data.results;
      });
                this._genero.getPeliculaTV()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.peliculastv = data.results;
      });
                this._genero.getSuspense()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.suspense = data.results;
      });
                this._genero.getBelica()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.belica = data.results;
      });
                this._genero.getWestern()
                .subscribe( (data: any) => {
                console.log(data.results);
                this.western = data.results;
      });

  }
  ngOnInit(): void {
  }

  scroll(sectionId) {
    let element = document.getElementById(sectionId);
    if(element) {
      element.scrollIntoView();
    }
  }

}

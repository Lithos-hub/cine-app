import { Component, OnInit } from '@angular/core';
import { PopularesService } from '../../services/populares.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styles: [
  ]
})
export class PopularesComponent implements OnInit {

  url = 'https://image.tmdb.org/t/p/w500';

  populares: any[] = [];

  constructor(public _ps: PopularesService){

        this._ps.getPopulares()
          .subscribe( (data: any) => {
          console.log(data.results);
          this.populares = data.results;
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

import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../services/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styles: [
  ]
})
export class RankingComponent implements OnInit {

  url = 'https://image.tmdb.org/t/p/w500';

  dropon0 = false;
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

  yearzero: any;
  yearone: any;
  yeartwo: any;
  yearthree: any;
  yearfour: any;
  yearfive: any;
  yearsix: any;
  yearseven: any;
  yeareight: any;
  yearnine: any;
  yearten: any;


  constructor(private ranking: RankingService) {

    this.ranking.get2010()
    .subscribe( (data: any) => {
    console.log(data.results);
    this.yearzero = data.results;
  });

  
    this.ranking.get2011()
    .subscribe( (data: any) => {
    console.log(data.results);
    this.yearone = data.results;
  });
  
    this.ranking.get2012()
    .subscribe( (data: any) => {
    console.log(data.results);
    this.yeartwo = data.results;
  });

    this.ranking.get2013()
    .subscribe( (data: any) => {
    console.log(data.results);
    this.yearthree = data.results;
  });

    this.ranking.get2014()
    .subscribe( (data: any) => {
    console.log(data.results);
    this.yearfour = data.results;
  });

    this.ranking.get2015()
    .subscribe( (data: any) => {
    console.log(data.results);
    this.yearfive = data.results;
  });

    this.ranking.get2016()
    .subscribe( (data: any) => {
    console.log(data.results);
    this.yearsix = data.results;
  });

    this.ranking.get2017()
    .subscribe( (data: any) => {
    console.log(data.results);
    this.yearseven = data.results;
  });

    this.ranking.get2018()
    .subscribe( (data: any) => {
    console.log(data.results);
    this.yeareight = data.results;
  });

    this.ranking.get2019()
    .subscribe( (data: any) => {
    console.log(data.results);
    this.yearnine = data.results;
  });

    this.ranking.get2020()
    .subscribe( (data: any) => {
    console.log(data.results);
    this.yearten = data.results;
  });

  }

  ngOnInit(): void {
  }

  anchor() {

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constants',
  templateUrl: './constants.component.html',
  styleUrls: ['./constants.component.scss']
})
export class ConstantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public ApiKey: string = 'e03d718829c24339b5ea62712a181aae';
  public ArticlesUrl: string = 'https://newsapi.org/v1/articles';
  public SourcesUrl: string = "https://newsapi.org/v1/sources";
  public NumberOfNews: number  = 10;
}

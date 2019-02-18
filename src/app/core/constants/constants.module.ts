import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ConstantsModule { 
  
  public ApiKey: string = 'e03d718829c24339b5ea62712a181aae';
  public ArticlesUrl: string = 'https://newsapi.org/v1/articles';
  public SourcesUrl: string = "https://newsapi.org/v1/sources";
  public NumberOfNews: number  = 10;
}

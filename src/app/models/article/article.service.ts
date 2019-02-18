import { Injectable } from '@angular/core';
import { ConstantsModule } from '../../core/constants/constants.module';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService {

  constructor (private http: HttpClient) { }

  public getArticles(sourceId: string){
    let constants: ConstantsModule = new ConstantsModule();

    return this.http.get(constants.ArticlesUrl+'?source='+sourceId+'&apiKey='+constants.ApiKey);
  }
}

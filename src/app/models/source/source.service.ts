import { Injectable } from '@angular/core';
import {ConstantsModule } from '../../core/constants/constants.module';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SourceService {

  constructor(private http: HttpClient) { }

  public getSources() {
    let constants = new ConstantsModule();
    
    return this.http.get(constants.SourcesUrl);
  }
}

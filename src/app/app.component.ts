import { Component, OnInit } from '@angular/core';
import {SourcesComponent} from './sources/sources.component';
import {ArticlesComponent} from './articles/articles.component';
//import '../css/main.less';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'my-app';
  //__webpack_public_path__ = "public/js/";
  sources: SourcesComponent = new SourcesComponent();
    
  ngOnInit() {
    this.sources.getAllSouces();
  }

  //
  showNews(){
      console.log('articles loaded');
      let articles = new ArticlesComponent();
      articles.applyFilters();
  }
}

//import Articles from './services/ArticlesService.js';

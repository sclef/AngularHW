import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list.component';
import { ArticlesListRoutingModule } from './articles-list-routing.module';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [ArticlesListComponent, ArticleComponent],
  imports: [
    ArticlesListRoutingModule,
    CommonModule,
  ]

})
export class ArticlesListModule { }

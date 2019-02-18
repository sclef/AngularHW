import { NgModule } from '@angular/core';
import { ArticlesListComponent } from './articles-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ArticlesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesListRoutingModule { }

export const routedComponents = [ArticlesListComponent];

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SourcesComponent } from './sources/sources.component';
import { ArticlesComponent } from './articles/articles.component';
import { UtilsComponent } from './utils/utils.component';
import { ConstantsComponent } from './constants/constants.component';

@NgModule({
  declarations: [
    AppComponent,
    SourcesComponent,
    ArticlesComponent,
    UtilsComponent,
    ConstantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

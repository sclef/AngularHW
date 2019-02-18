import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleService } from './models';
import { SourceService } from './models';
import { ConstantsModule } from './core/constants/constants.module';
import { UtilsModule } from './core/utils/utils.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //FormsModule,
    BrowserModule,
    AppRoutingModule,
    ConstantsModule,
    UtilsModule,
    HttpClientModule,
  ],
  providers: [ArticleService, SourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

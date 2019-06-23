import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityModule } from './modules/entity/entity.module';
import { NavComponent } from './nav/nav.component';
import { JsonDataService } from './core/services/json-data.service';
import { HelpComponent } from './help/help.component';
import { JsonFileModule } from './modules/json-file/json-file.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EntityModule,
    JsonFileModule
  ],
  providers: [
    // JsonDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

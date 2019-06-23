import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonFileRoutingModule } from './json-file-routing.module';
import { ViewJsonComponent } from './view-json/view-json.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  declarations: [ViewJsonComponent],
  imports: [
    CommonModule,
    JsonFileRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AceEditorModule
  ]
})
export class JsonFileModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityRoutingModule } from './entity-routing.module';
import { ListEntityComponent } from './list-entity/list-entity.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AceEditorModule } from 'ng2-ace-editor';
import { EditEntityComponent } from './edit-entity/edit-entity.component';
import { DataTablesModule } from 'angular-datatables';
import { JsonDataService } from 'src/app/core/services/json-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailsEntityComponent } from './details-entity/details-entity.component';
import { AddEntityComponent } from './add-entity/add-entity.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ListEntityComponent, EditEntityComponent, DetailsEntityComponent, AddEntityComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EntityRoutingModule,
    NgxJsonViewerModule,
    DataTablesModule,
    AceEditorModule
  ],
  providers: [
    // JsonDataService
  ]
})
export class EntityModule { }

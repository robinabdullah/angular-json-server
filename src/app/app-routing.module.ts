import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEntityComponent } from './modules/entity/list-entity/list-entity.component';
import { EditEntityComponent } from './modules/entity/edit-entity/edit-entity.component';
import { DetailsEntityComponent } from './modules/entity/details-entity/details-entity.component';
import { AddEntityComponent } from './modules/entity/add-entity/add-entity.component';
import { HelpComponent } from './help/help.component';
import { ViewJsonComponent } from './modules/json-file/view-json/view-json.component';

const routes: Routes = [
  {
    path: '',
    component: ListEntityComponent
  },
  {
    path: 'add',
    component: AddEntityComponent
  },
  {
    path: 'edit/:id',
    component: EditEntityComponent
  },
  {
    path: 'details/:id',
    component: DetailsEntityComponent
  }, {
    path: 'jsonview',
    component: ViewJsonComponent
  },
  {
    path: 'help',
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

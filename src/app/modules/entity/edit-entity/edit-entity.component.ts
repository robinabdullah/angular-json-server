import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonDataService } from 'src/app/core/services/json-data.service.js';

@Component({
  selector: 'app-edit-entity',
  templateUrl: './edit-entity.component.html',
  styleUrls: ['./edit-entity.component.css']
})
export class EditEntityComponent implements OnInit {
  private data: any;
  private entityObjectEdit: any;
  public entityNameNew: string;
  private entityName: string;
  public isJson = true;
  public isValidName = true;

  constructor(
    private route: ActivatedRoute,
    private jsonDataService: JsonDataService,
    private router: Router,

  ) {
    this.jsonDataService.getAllEntities().subscribe(x => {
      this.data = JSON.parse(x);
      this.getEntityObject();
      // console.log(this.jsonData);
    });
  }

  ngOnInit() {
  }

  public isValidEntityName() {
    let name: any;
    name = this.entityNameNew;

    if (isNaN(name) && name.indexOf(' ') <= 0 && (name != '' || name != null)) {
      this.isValidName = true;
    } else {
      this.isValidName = false;
    }
    // console.log(this.isValidName);
  }

  public getEntityObject() {
    this.entityName = this.route.snapshot.paramMap.get('id');
    this.entityNameNew = this.entityName;

    if (this.data[this.entityName] === undefined) {
      alert('Undefined entity. ');
      this.router.navigate(['/']);
    }

    this.entityObjectEdit = this.data[this.entityName];
  }

  get entities() {
    return this.data;
  }

  get code() {
    return JSON.stringify(this.entityObjectEdit, null, 2);
  }

  set code(v) {
    try {
      this.entityObjectEdit = JSON.parse(v);
      this.isJson = true;
    } catch (e) {
      this.isJson = false;
      console.log('error occored while you were typing the JSON');
    }
  }

  public updateJson() {

    if (this.entityName !== this.entityNameNew) { // if entity name changed
      // alert(this.data[this.entityNameNew]);
      delete this.data[this.entityName]; // delete the entity
      this.data[this.entityNameNew] = this.entityObjectEdit; // add the object with updated entity name
    } else {
      this.data[this.entityName] = this.entityObjectEdit; // update entity data
    }

    try {
      this.jsonDataService.updateEntity(this.data).subscribe(() => {
        alert('Successfully saved');
        // this.router.navigate(['/edit/' + this.entityNameNew]);

      });


    } catch (e) {
      alert('unknown error while updating');
    }

  }

}

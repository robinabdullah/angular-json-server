import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonDataService } from 'src/app/core/services/json-data.service';

@Component({
  selector: 'app-details-entity',
  templateUrl: './details-entity.component.html',
  styleUrls: ['./details-entity.component.css']
})
export class DetailsEntityComponent implements OnInit {

  private data: any;
  private entityObjectEdit: any;
  public entityNameNew: string;
  private entityName: string;

  constructor(
    private route: ActivatedRoute,
    private jsonDataService: JsonDataService,
    private router: Router
  ) {
    this.jsonDataService.getAllEntities().subscribe(x => {
      this.data = JSON.parse(x);
      this.getEntityObject();
    });
  }

  ngOnInit() {

  }

  public getEntityObject() {
    this.entityName = this.route.snapshot.paramMap.get('id');
    this.entityNameNew = this.entityName;

    if (this.data[this.entityName] === undefined) {
      // alert('undefined property');
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
      // alert('saved');
    } catch (e) {
      console.log('error occored while you were typing the JSON');
    }
  }


}

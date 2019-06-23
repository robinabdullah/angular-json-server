import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonDataService } from 'src/app/core/services/json-data.service';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.css']
})
export class AddEntityComponent implements OnInit {
  private data: any;
  private entityObjectCreate: any;
  public entityNameNew: string;
  private entityName: string;
  public isJson: boolean;
  public isValidName = false;

  constructor(
    private route: ActivatedRoute,
    private jsonDataService: JsonDataService,
    private router: Router,

  ) {
    this.jsonDataService.getAllEntities().subscribe(x => {
      this.data = JSON.parse(x);
      // console.log(this.jsonData);
    });
  }

  ngOnInit() {
  }

  get entities() {
    return this.data;
  }

  get code() {
    return JSON.stringify(this.entityObjectCreate, null, 2);
  }

  set code(v) {
    try {
      this.entityObjectCreate = JSON.parse(v);
      this.isJson = true;
      // alert('saved');
    } catch (e) {
      console.log('error occored while you were typing the JSON');
      this.isJson = false;
    }
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

  public updateJson() {

    if (this.isJson === true && this.entityNameNew != null) {
      if (this.data[this.entityNameNew] === undefined) {
        this.data[this.entityNameNew] = this.entityObjectCreate; // add entity data

        try {
          this.jsonDataService.updateEntity(this.data).subscribe(() => {
            alert('Successfully Created');
            this.router.navigate(['/edit/' + this.entityNameNew]);
          });


        } catch (e) {
          console.log(e);
          alert('unknown error while updating');
        }
      } else {
        alert(this.entityNameNew + ' is already exists. Please delete this entity then try again.');
      }
    }



  }

}

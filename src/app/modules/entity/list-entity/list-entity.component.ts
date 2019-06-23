import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { JsonDataService } from 'src/app/core/services/json-data.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-entity',
  templateUrl: './list-entity.component.html',
  styleUrls: ['./list-entity.component.css']
})
export class ListEntityComponent implements OnInit, OnDestroy {

  private data: any;
  public listEntity: any;
  private parsedJson: Object;
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger = new Subject();

  constructor(private jsonDataService: JsonDataService,
              private router: Router
    ) {
    this.data = jsonDataService.getAllEntities().subscribe(x => {

      this.jsonDataService.jsonData = JSON.parse(x);
      this.data = JSON.parse(x);

      this.listEntity = Object.keys(JSON.parse(x));
      this.dtTrigger.next();
    });

   }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  private delete(entityDelete: string) {

    if (confirm('Do you really want to delete?')) {
      delete this.data[entityDelete];
      this.jsonDataService.updateEntity(this.data).subscribe( () => {
        alert('Entity deleted.');
        location.reload();
      });
    } else {
      // do nothing
    }

  }

}

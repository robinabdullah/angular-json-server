import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonDataService } from 'src/app/core/services/json-data.service';

@Component({
  selector: 'app-view-json',
  templateUrl: './view-json.component.html',
  styleUrls: ['./view-json.component.css']
})
export class ViewJsonComponent implements OnInit {

  private data: any;

  constructor(
    private route: ActivatedRoute,
    private jsonDataService: JsonDataService,
    private router: Router
    ) {
    this.jsonDataService.getAllEntities().subscribe(x => {
      this.data = JSON.parse(x);
    });
   }

  ngOnInit() {

  }

  get code() {
    return JSON.stringify(this.data, null, 2);
  }


}

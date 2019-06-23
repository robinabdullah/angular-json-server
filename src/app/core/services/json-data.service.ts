import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  private fileSaveUrl = environment.fileSaveUrl; // url loaded from environment variable
  public jsonData: any;
  constructor(private http: HttpClient) {

    this.getAllEntities().subscribe(x => {
      this.jsonData = JSON.parse(x);
      // console.log(this.jsonData);
    });

  }

  getAllEntities() {
    return this.http.get<any>(this.fileSaveUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** PUT: update the User on the server */
  updateEntity(jsonContent: any): Observable<any> {

    this.jsonData = jsonContent;

    return this.http.post(this.fileSaveUrl, jsonContent).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  /** Log a DistrictService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`DistrictService: ${message}`);
  }
}

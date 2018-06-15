import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MontaMenuService {

  private baseUrl = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0/listarmenu';

  constructor(private http: HttpClient) {

  }

  // query(): Observable<Array<any>> {
  //   return this.http.get(this.baseUrl);
  // }

}

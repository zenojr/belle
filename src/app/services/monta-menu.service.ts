import { Http, Response, RequestOptions } from '@angular/http';
import { Menu } from './../components/menu-principal/menu';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/catch' ;
import 'rxjs/add/operator/do' ;
import { Injectable } from '@angular/core';


@Injectable()
export class MontaMenuService {

  private baseUrl = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0/listarmenu';

  constructor(private http: Http) {

  }

  getMenu() {
    const requestOptions = new RequestOptions();
    //requestOptions.headers = new Headers();
  }

}


 // getMenu() {
  //   const requestOptions = new RequestOptions(); // verificar uso de let ou const
  //   requestOptions.headers = new Headers();
  //   requestOptions.headers.set( 'Authorization', this.jwtToken.token );
  //   requestOptions.headers.set('Content-type', 'application/json');
  //   this.http
  //   .get(this.linkListMenu, requestOptions)
  //   .toPromise()
  //   .then(response => this.menu = response.json());
  // }
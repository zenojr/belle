import { JwtTokenService } from './../../services/jwt-token.service';
import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Array<Object>;

  constructor( private http: Http,
               private jwtToken: JwtTokenService,
               private auth: AuthService
             ) {
              console.log(this.auth.check);
             }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    let requestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    requestOptions.headers.set( 'Authorization', 'Bearer ${this.jwtToken.token}' );
    requestOptions.headers.set('Content-type', 'application/json');
    this.http
    .get('http://api.bellesoftware.com.br/v1.0/moedas', requestOptions)
    .toPromise()
    .then(response => this.products = response.json());
  }

}

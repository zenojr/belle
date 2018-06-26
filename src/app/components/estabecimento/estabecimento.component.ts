import { Component, OnInit, Injectable } from '@angular/core';
import { JwtTokenService } from './../../services/jwt-token.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AuthService } from '../../services/auth.service';

import { Estabelecimento } from './estabelecimento';

@Component({
  selector: 'app-estabecimento',
  templateUrl: './estabecimento.component.html',
  styleUrls: ['./estabecimento.component.css']
})
export class EstabecimentoComponent implements OnInit {

  lista: Array<Object>;

  urlBase = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0';

  urlModule = '/estabelecimento';

  constructor( private http: Http,
               private jwtToken: JwtTokenService,
               private auth: AuthService

              ) {
             }

  ngOnInit() {
    this.buildLista();
  }

  buildLista() {
    const requestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    requestOptions.headers.set( 'Authorization', this.jwtToken.token );
    requestOptions.headers.set('Content-type', 'application/json');
    this.http.get(this.urlBase + this.urlModule, requestOptions).toPromise()
    .then(
      response => {
        const list = response.json();
        this.lista = list;
        console.log(list);
      }
    );
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListaMenuService } from './../../../services/lista-menu.service';

import { AuthService } from './../../../services/auth.service';
import { JwtTokenService } from './../../../services/jwt-token.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-estabelecimento-details',
  templateUrl: './estabelecimento-details.component.html',
  styleUrls: ['./estabelecimento-details.component.css']
})
export class EstabelecimentoDetailsComponent implements OnInit {

  listaEstabelecimento: Array<any>;
  urlBase = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0';
  urlModule = '/estabelecimento';

  itemSelected: any;

  constructor(private http: Http,
              private jwtToken: JwtTokenService,
              private listaMenuService: ListaMenuService,
              private httpCli: HttpClient
              ) {

   }

  ngOnInit() {
    // this.listaEstab();
    this.estabelecimentoSelect();
    this.listaEstabHttpCLI()
  }

  estabelecimentoSelect() {
    this.itemSelected = this.listaMenuService.codEstabelecimento;
    console.log(this.itemSelected);
    console.log(this.listaEstabelecimento);
  }

  // listaEstab() {
  //   const requestOptions = new RequestOptions();
  //   requestOptions.headers = new Headers();
  //   requestOptions.headers.set( 'Authorization', this.jwtToken.token );
  //   requestOptions.headers.set('Content-type', 'application/json');
  //   this.http.get(this.urlBase + this.urlModule, requestOptions).toPromise()
  //   .then(
  //     response => {
  //       const list = response.json();
  //       this.listaEstabelecimento = list;
  //       console.log(list);
  //       return list;
  //     }
  //   );
  // }

  listaEstabHttpCLI() {
    this.httpCli.get
    (this.urlBase + this.urlModule, {observe: 'response', headers: new HttpHeaders().set('Authorization', this.jwtToken.token)})
    .toPromise()
    .then(
      response => {
        const list = response.body;
        this.listaEstabelecimento = list;
        console.log(list);
      }
    )
    .catch(err => {
      return Promise.reject(err.error || 'Server Error!!!!');
    });
  }

  // extractData(res: HttpResponse<Object>) {
  //   const array = new Array();
  //   let key, count = 0;
  //   // tslint:disable-next-line:forin
  //   for (key in res.body) {
  //     array.push(res.body[count++]);
  //   }
  //   return array;
  // }

}

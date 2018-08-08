import { JwtTokenService } from './jwt-token.service';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CrudService {

  urlBase = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0';
  urlModule = '/estabelecimento';

  constructor(private http: HttpClient,
              private jwtTokenService: JwtTokenService
              ) { }

  query() {
    return this.http.get<any[]>(`${this.urlBase + this.urlModule}`);
  }


  // listaEstabHttpCLI() {
  //   this.httpCli.get
  //   (this.urlBase + this.urlModule, {observe: 'response', headers: new HttpHeaders().set('Authorization', this.jwtToken.token)})
  //   .subscribe(data => this.posts.data);
  //   console.log(this.posts);
  // }

}

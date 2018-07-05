import { ListaMenuService } from './../../../services/lista-menu.service';

import { AuthService } from './../../../services/auth.service';
import { JwtTokenService } from './../../../services/jwt-token.service';
import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-estabelecimento-details',
  templateUrl: './estabelecimento-details.component.html',
  styleUrls: ['./estabelecimento-details.component.css']
})
export class EstabelecimentoDetailsComponent implements OnInit {

  listaEstabelecimento: Array<Object>;
  urlBase = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0';
  urlModule = '/estabelecimento';

  

  constructor(private http: Http,
              private jwtToken: JwtTokenService,
              private auth: AuthService,
              private listaMenuService: ListaMenuService
  ) {
    const itemSelected: any = this.listaMenuService.codEstabelecimento;
    console.log(itemSelected);
   }

  ngOnInit() {
    this.listaEstab();
  }

  listaEstab() {
    const requestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    requestOptions.headers.set( 'Authorization', this.jwtToken.token );
    requestOptions.headers.set('Content-type', 'application/json');
    this.http.get(this.urlBase + this.urlModule, requestOptions).toPromise()
    .then(
      response => {
        const list = response.json();
        this.listaEstabelecimento = list;
        console.log(list);
        return list;
      }
    );
  }

}

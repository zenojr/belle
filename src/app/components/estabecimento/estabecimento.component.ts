import { ListaMenuService } from './../../services/lista-menu.service';
import { HttpClient } from '@angular/common/http';
import { Estabelecimento } from './estabelecimento.model';
import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { JwtTokenService } from './../../services/jwt-token.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-estabecimento',
  templateUrl: './estabecimento.component.html',
  styleUrls: ['./estabecimento.component.css']
})
export class EstabecimentoComponent implements OnInit {

lista: Array<Object>;
listaNova: any = [];

eventosEstab: any;

urlBase = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0';

urlModule = '/estabelecimento';

cursos: string[];



constructor(  private http: Http,
              private jwtToken: JwtTokenService,
              private auth: AuthService,
              private httpCli: HttpClient,
              private listaMenuService: ListaMenuService

            ) {
}

ngOnInit() {
  this.buildLista();
}

selecionaItem(event: Event) {
  console.log(event);
  this.listaMenuService.codEstabelecimento = event;

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

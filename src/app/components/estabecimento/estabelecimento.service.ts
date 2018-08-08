import { JwtTokenService } from './../../services/jwt-token.service';
import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estabelecimento } from './estabelecimento.model';

@Injectable()
export class EstabelecimentoService {

  httpOptions = {
    headers: {
      'Accept':  'application/json',
      'Content-type': 'application/json',
      'Authorization': this.jwtTokenService.token,
      'ativo': '0'
    }
  };

  urlBase = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller';

  urlModule = '/Estabelecimento/v1.0/estabelecimento';

  constructor(
    private jwtTokenService: JwtTokenService,
    private http: HttpClient
   ) {
    console.log('Estab service');
   }

   listar(): Promise<any> {
    return this.http
    .get<any>(this.urlBase + this.urlModule, this.httpOptions).toPromise();
  }

  listarPorCod(cod: string): Promise<any> {
    const httpOptions = this.httpOptions;
    httpOptions.headers['filtro'] = cod;
    return this.http
    .get<any>(this.urlBase + this.urlModule, httpOptions).toPromise();
  }

  gravar(estabelecimento: any): Promise<any> {
    estabelecimento['ope'] = 'A';
    return this.http
    .post<any>(this.urlBase + this.urlModule, estabelecimento, this.httpOptions).toPromise();
  }



}

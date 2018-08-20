import { JwtTokenService } from './../../services/jwt-token.service';
import { Usuario } from './usuario.model';
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UsuarioService {

  httpOptions = {
    headers: {
      'Accept':  'application/json',
      'Content-type': 'application/json',
      'Authorization': this.jwtTokenService.token,
      'ativo': '0'
    }
  };

  urlBase = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller';
  urlModule = '/Usuario/v1.0/listarusuarios';

  constructor(
    private jwtTokenService: JwtTokenService,
    private http: HttpClient
  ) {
    console.log('userService');
  }

  listar(): Promise<any> {
    console.log( 'listar sem cod user' );
    delete this.httpOptions.headers[ 'filtro' ];
    return this.http
    .get<any>(this.urlBase + this.urlModule, this.httpOptions).toPromise();
  }

  listarPorLogin(login: string): Promise<any> {
    console.log( 'listaLoginUser' );
    const httpOptions = this.httpOptions;
    httpOptions.headers['filtro'] = login;
    return this.http
    .get<any>(this.urlBase + this.urlModule, httpOptions).toPromise();
  }

  gravar(usuario: any): Promise<any> {
    usuario['ope'] = 'A';
    return this.http
    .post<any>(this.urlBase + this.urlModule, usuario, this.httpOptions).toPromise();
  }


}

import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { JwtTokenService } from '../../services/jwt-token.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listaCliente: Array<Object>;
  urlBase = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/Cliente/v1.0';
  urlModule = '/listaclientes';

  

  constructor(
              private http: Http,
              private jwtToken: JwtTokenService,
              private auth: AuthService
              ) { }

  ngOnInit() {
    this.buildLista();
  }

  buildLista() {
    const requestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    requestOptions.headers.set( 'Authorization', this.jwtToken.token );
    requestOptions.headers.set('Content-type', 'application/json');
    requestOptions.headers.set('usuario', 'sysadmin');
    requestOptions.headers.set('ativo', '0');
    requestOptions.headers.set('cnt', '0');
    requestOptions.headers.set('lmt', '500');
    this.http.get(this.urlBase + this.urlModule, requestOptions).toPromise()
    .then(
      response => {
        const list = response.json();
        this.listaCliente = list;
        console.log(list);
      }
    );
  }

}

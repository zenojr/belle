import { Component, OnInit, Input } from '@angular/core';
import { JwtTokenService } from '../../services/jwt-token.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaUser: Array<Object>;
  urlBase = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller';
  // https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/Login/v1.0/login

  urlModule = 'ListarUsuarios/v1.0/listarusuarios';

  constructor(
              private http: Http,
              private jwtToken: JwtTokenService,
              private auth: AuthService
              ) { }

  ngOnInit() {
    console.log(this.urlBase);
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
        this.listaUser = list;
        console.log(list);
      }
    );
  }

}

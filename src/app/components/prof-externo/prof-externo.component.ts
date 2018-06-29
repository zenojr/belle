import { Component, OnInit} from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { JwtTokenService } from '../../services/jwt-token.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-prof-externo',
  templateUrl: './prof-externo.component.html',
  styleUrls: ['./prof-externo.component.css']
})
export class ProfExternoComponent implements OnInit {

  listaProfExt: Array<Object>;
  urlBase = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0';
  urlModule = '/profext';


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
    this.http.get(this.urlBase + this.urlModule, requestOptions).toPromise()
    .then(
      response => {
        const list = response.json();
        this.listaProfExt = list;
        console.log(list);
      }
    );
  }

}

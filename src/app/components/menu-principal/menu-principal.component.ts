import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from './../../services/jwt-token.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  public activeMenu: Boolean = false;

  menu: Array<Object>;
  urlBase = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0';
  urlModule = '/montarmenu';

  constructor( private http: Http,
               private jwtToken: JwtTokenService,
               private auth: AuthService
             ) {
             }

  ngOnInit() {
    if ( this.jwtToken.token ) {
      this.activeMenu = true;
      this.buildMenu();
    }
  }

  buildMenu() {
    const requestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    requestOptions.headers.set( 'Authorization', this.jwtToken.token );
    requestOptions.headers.set('Content-type', 'application/json');
    this.http.get(this.urlBase + this.urlModule, requestOptions).toPromise()
    .then(
      response => {
        const sub = response.json().menu.menuitem;
        this.menu = sub;
        console.log(sub);
      }
    );
  }


}

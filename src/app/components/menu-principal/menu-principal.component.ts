import { TranslateModule } from '@ngx-translate/core';
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

  menu: Array<Object>;
  submenu: Array<Object>;

  constructor( private http: Http,
               private jwtToken: JwtTokenService,
               private auth: AuthService
             ) {
             }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    const requestOptions = new RequestOptions(); // verificar uso de let ou const
    requestOptions.headers = new Headers();
    requestOptions.headers.set( 'Authorization', this.jwtToken.token );
    requestOptions.headers.set('Content-type', 'application/json');
    this.http
    .get('https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0/listarmenu', requestOptions)
    .toPromise()
    .then(response => this.menu = response.json());
  }

}

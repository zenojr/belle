import { HttpClient } from '@angular/common/http';
import { MontaMenuService } from './../../services/monta-menu.service';
import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from './../../services/jwt-token.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
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
               private auth: AuthService,
               private montaMenu: MontaMenuService,
               private httpCli: HttpClient
             ) {
             }

  ngOnInit() {
    // this.getMenu();
    // this.montaMenu.query().subscribe(data => this.posts = data);
    this.getSubMenu();
  }




linkListMenu = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0/listarmenu';


  getMenu() {
    const requestOptions = new RequestOptions(); // verificar uso de let ou const
    requestOptions.headers = new Headers();
    requestOptions.headers.set( 'Authorization', this.jwtToken.token );
    requestOptions.headers.set('Content-type', 'application/json');
    this.http
    .get(this.linkListMenu, requestOptions)
    .toPromise()
    .then(response => this.menu = response.json());
  }



  // tslint:disable-next-line:member-ordering
  menuUrl = 'https://app.bellesoftware.com.br/release/php/belle/amfphp/Services/controller/v1.0/montarmenu';

  

  getSubMenu() {
    const requestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    requestOptions.headers.set( 'Authorization', this.jwtToken.token );
    requestOptions.headers.set('Content-type', 'application/json');
    this.http.get(this.menuUrl, requestOptions).toPromise()
    .then(
      response => {
        var sub = response.json().menu.menuitem;
        this.menu = sub;
        console.log(sub);
      }
    );

  }


}
